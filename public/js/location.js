var API_KEY_LOCATION = "RJxTzA85vT26NJ0GGvgam0xRTp9fdZQ3";
var API_KEY = "f7a9d9d54358c3cd93b834ec60d1d8be";



$(document).ready(function() {

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
  } 

  function successFunction(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    console.log(lat, lng);

    var url = `http://www.mapquestapi.com/geocoding/v1/reverse?key=${API_KEY_LOCATION}&location=${lat},${lng}&includeRoadMetadata=true&includeNearestIntersection=true`

    $.getJSON(url, function(data) {
        console.log(data);
        console.log(data.results[0].locations[0])
        var results = data.results[0].locations[0];

        var address = results.street,
            city = results.adminArea5,
            state = results.adminArea3;

        getLocalTimes(city)
    })

    function getLocalTimes(cityPassed) {
        $.getJSON(`http://muslimsalat.com/${cityPassed}/daily.json?key=${API_KEY}&jsoncallback=?`, function(times) {
            console.log(times);
            $('.prayerTimes')
            .append('<p>Today in ' +times.city + ", " + times.state + "</p>")
            .append('<p> Fajr: ' +times.items[0].fajr + "</p>")
            .append('<p> Dhuhr: ' +times.items[0].dhuhr + "</p>")
            .append('<p> Asr: ' +times.items[0].asr + "</p>")
            .append('<p> Maghrib: ' +times.items[0].maghrib + "</p>")
            .append('<p> Isha: ' +times.items[0].isha + "</p>")
        })
    }

  }

  function errorFunction(){
    alert(err.code);
    alert(err.message);
    alert("Geocoder failed");
  }


      $.getJSON(`http://muslimsalat.com/monroe/daily.json?key=${API_KEY}&jsoncallback=?`, function (times)
      {
          console.log(times);
          $('.prayerTimesMonroe')
          .append('<p>Today in ' +times.city + ", " + times.state + "</p>")
          .append('<p> Fajr: ' +times.items[0].fajr + "</p>")
          .append('<p> Dhuhr: ' +times.items[0].dhuhr + "</p>")
          .append('<p> Asr: ' +times.items[0].asr + "</p>")
          .append('<p> Maghrib: ' +times.items[0].maghrib + "</p>")
          .append('<p> Isha: ' +times.items[0].isha + "</p>")
      });



})
  