function getLocalisation(){

}

function displayMap(){

    var position = getLocalisation();

    var width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

    console.log(width, height);

    document.getElementById('map').style.height = height.toString()+"px";
    document.getElementById('map').style.width = width.toString()+"px";
    document.getElementById('mainscreen').style.height = height.toString()+"px";

    // On initialise la latitude et la longitude de Paris (centre de la carte)
    var lat = 48.852969;
    var lon = 2.349903;
    var macarte = null;
    // Fonction d'initialisation de la carte
    function initMap() {
        // Créer l'objet "macarte" et l'insèrer dans  l'élément HTML qui a l'ID "map"
        macarte = L.map('map').setView([lat, lon], 7);
        // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
        L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
            // Il est toujours bien de laisser le lien vers la source des données
            attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
            minZoom: 1,
            maxZoom: 20
        }).addTo(macarte);

        var marker = L.marker([lat, lon]).addTo(macarte);
    }
    window.onload = function(){
        // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
        getLocation();
        initMap();
    };
}

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;

    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([position.coords.latitude, position.coords.longitude], 11);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);

    var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(macarte);
}