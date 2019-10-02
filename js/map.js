
//On recupere la taille da la fenetre
var width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

//On adapte la taille de la carte a acelle de la fenetre
document.getElementById('map').style.height = height.toString()+"px";
document.getElementById('map').style.width = width.toString()+"px";
document.getElementById('mainscreen').style.height = height.toString()+"px";
document.getElementById('mainscreen').style.width = width.toString()+"px";

document.getElementById('nav').style.visibility = "hidden";
document.getElementById('materialButtons').style.visibility = "hidden";


// On initialise la latitude et la longitude de Paris (centre de la carte)
var macarte = null;

var markerClusters;

window.onload = function(){
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    //getLocation();
    initMap();
}


function initMap() {

    navigator.geolocation.getCurrentPosition(function(location) {
        //document.getElementById('lds-ripple').style.visibility = "visible";
        displayMap(location.coords.latitude, location.coords.longitude, 11);

    }, function (error){
        displayMap(48.856614, 2.3522219, 6);
    });

}

function displayMap(latitude, longitude, zoomLevel){
    // Créer l'objet "macarte" et l'insèrer dans  l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([latitude, longitude], zoomLevel);

    markerClusters = new L.MarkerClusterGroup({
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: cluster.getChildCount(),
                className: 'mycluster',
                iconSize: null
            });
        }
    });
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);


    var myIcon = L.icon({
        iconUrl: "../devAvence/src/img/markers/ski.png",
        iconSize: [40, 56],
        iconAnchor: [25, 50],
        popupAnchor: [-3, -76],
    });


    var myIcon2 = L.icon({
        iconUrl: "../devAvence/src/img/markers/vtt.png",
        iconSize: [40, 56],
        iconAnchor: [25, 50],
        popupAnchor: [-3, -76],
    });

    var myIcon3 = L.icon({
        iconUrl: "../devAvence/src/img/markers/windsurf.png",
        iconSize: [40, 56],
        iconAnchor: [25, 50],
        popupAnchor: [-3, -76],
    });

    var marker2 = L.marker([48.996596, 2.026829], {icon: myIcon2}).addTo(macarte);

    var marker3 = L.marker([49.030294, 2.053852], {icon: myIcon3}).addTo(macarte);

    var marker4 = L.marker([42.815800, 0.320440], {icon: myIcon}).addTo(macarte).on('click', function(e) {
        document.location.href = "./html/spot.html";
    });;

    markerClusters.addLayer(marker2);
    markerClusters.addLayer(marker3);
    markerClusters.addLayer(marker4);

    macarte.addLayer(markerClusters);


    document.getElementById('nav').style.visibility = "visible";
    document.getElementById('materialButtons').style.visibility = "visible";
}

