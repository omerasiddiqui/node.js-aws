var API_KEY = "AIzaSyC1enG5_1nkoR0vCWS3N3RGpDEuyfcfPeQ",
    farmerville_coords = {lat: 32.7716318, lng: -92.40113170000001};

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: farmerville_coords,
    zoom: 15
  });
  var marker = new google.maps.Marker({position: farmerville_coords, map: map});
}