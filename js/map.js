
//On recupere la taille da la fenetre
var width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

//On adapte la taille de la carte a acelle de la fenetre
document.getElementById('map').style.height = height.toString()+"px";
document.getElementById('map').style.width = width.toString()+"px";
document.getElementById('mainscreen').style.height = height.toString()+"px";
document.getElementById('mainscreen').style.width = width.toString()+"px";

document.getElementById('nav').style.visibility = "hidden";
document.getElementById('fixed-action-btn').style.visibility = "hidden";
document.getElementById('bottom').style.visibility = "hidden";


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


    var skiIcon = L.icon({
        iconUrl: "./src/img/markers_colors/ski.png",
        iconSize: [40, 56],
        iconAnchor: [25, 50],
        popupAnchor: [-3, -76],
    });

    var vttIcon = L.icon({
        iconUrl: "./src/img/markers_colors/vtt.png",
        iconSize: [40, 56],
        iconAnchor: [25, 50],
        popupAnchor: [-3, -76],
    });

    var windsurfIcon = L.icon({
        iconUrl: "./src/img/markers_colors/windsurf.png",
        iconSize: [40, 56],
        iconAnchor: [25, 50],
        popupAnchor: [-3, -76],
    });

    var runningIcon = L.icon({
        iconUrl: "./src/img/markers_colors/running.png",
        iconSize: [40, 56],
        iconAnchor: [25, 50],
        popupAnchor: [-3, -76],
    });

    var wakeBoardIcon = L.icon({
        iconUrl: "./src/img/markers_colors/wakeboard.png",
        iconSize: [40, 56],
        iconAnchor: [25, 50],
        popupAnchor: [-3, -76],
    });

    var workoutIcon = L.icon({
        iconUrl: "./src/img/markers_colors/workout.png",
        iconSize: [40, 56],
        iconAnchor: [25, 50],
        popupAnchor: [-3, -76],
    });

    var basketIcon = L.icon({
        iconUrl: "./src/img/markers_colors/basket.png",
        iconSize: [40, 56],
        iconAnchor: [25, 50],
        popupAnchor: [-3, -76],
    });

    var surfIcon = L.icon({
        iconUrl: "./src/img/markers_colors/surf.png",
        iconSize: [40, 56],
        iconAnchor: [25, 50],
        popupAnchor: [-3, -76],
    });

    var footballIcon = L.icon({
        iconUrl: "./src/img/markers_colors/football.png",
        iconSize: [40, 56],
        iconAnchor: [25, 50],
        popupAnchor: [-3, -76],
    });

    var skateboardIcon = L.icon({
        iconUrl: "./src/img/markers_colors/skateboard.png",
        iconSize: [40, 56],
        iconAnchor: [25, 50],
        popupAnchor: [-3, -76],
    });

    var tabIcon = { "ski" : skiIcon,
        "windsurf" : windsurfIcon,
        "VTT": vttIcon,
        "running" : runningIcon,
        "wakeboard" : wakeBoardIcon,
        "workout" : workoutIcon,
        "basket" : basketIcon,
        "surf" : surfIcon,
        "football" : footballIcon,
        "skateboard" : skateboardIcon
    };

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            obj = JSON.parse(this.responseText);

            var markers = [];

            for (i in obj) {
                markers[i] = L.marker([obj[i].latitude, obj[i].longitude], {icon: tabIcon[obj[i].type]});
                markers[i].myCustomId = obj[i].idSpot;
                markers[i].addTo(macarte);
                markers[i].on('click', markerClick);
                markers[i].on('mouseover', hover);
            }

            for(i in markers){
                markerClusters.addLayer(markers[i]);
            }
        }
    };
    xhttp.open("GET", "https://activdoor.000webhostapp.com/php/index.php?action=getAllSpots&json=true", true);
    xhttp.send();

    macarte.addLayer(markerClusters);
    document.getElementById('nav').style.visibility = "visible";
    document.getElementById('fixed-action-btn').style.visibility = "visible";
    document.getElementById('bottom').style.visibility = "visible";
    document.getElementById('centerLogo').style.visibility = "hidden";

}

function markerClick(e){
    window.open("./php/index.php?action=getSpot&spotId="+e.target.myCustomId,"_self");
}

function hover(e){

}
