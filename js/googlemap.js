function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 37.140172, lng: -80.59283299999998},
      zoom: 8
    });
}