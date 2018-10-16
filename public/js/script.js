///////////////// [ donate spin animation ] //////////////

function makeShake() {
  $(".donate").removeClass("hide");
  $(".donate").addClass("flip");
}

setInterval(makeShake, 1500)

////////////////// [ quote slideshow] /////////////////////

const quotesDiv = $(".quotes");

const quotes = [
    `<h5 class="animated fadeInUp">"Those who believe, and do deeds of righteousness, and establish regular prayers and regular <span class="charity">charity</span>, will have their reward with their Lord. On them shall be no fear, nor shall they grieve" (2:277).</h5>`,
    `<h5 class="animated fadeInUp">"Worship none but Allah. treat with kindness your parents and kindred, and orphans and those in need; speak fair to the people; be steadfast in prayer; and practice regular <span class="charity">charity</span>" (2:83).</h5>`,
    `<h5 class="animated fadeInUp">"Allah will deprive usury of all blessing, but will give increase for deeds of <span class="charity">charity</span>. For He loves not creatures ungrateful and wicked" (2:276).</h5>`
];

let index = 0;

function changeText() {
    quotesDiv.fadeIn("slow").html(quotes[index]);
    index++;
    if (index >= quotes.length) {
      index = 0;
    }
  }

  setInterval(changeText, 8000);

////// [ form script ] ////////

var $input;

function onInputFocus(event) {
  var $target = $(event.target);
  var $parent = $target.parent();
  $parent.addClass('input--filled');
};

function onInputBlur(event) {
  var $target = $(event.target);
  var $parent = $target.parent();

  if (event.target.value.trim() === '') {
    $parent.removeClass('input--filled');
  }
};

$(document).ready(function() {
  $input = $('.input__field');
  
  // in case there is any value already
  $input.each(function(){
    if ($input.val().trim() !== '') {
      var $parent = $input.parent();
      $parent.addClass('input--filled');
    }
  });
  
  $input.on('focus', onInputFocus);
  $input.on('blur', onInputBlur);

});

////////////// [ prayer times ] /////////////////////

// un-comment before going live

// var API_KEY = "f7a9d9d54358c3cd93b834ec60d1d8be";

// jQuery(function($) {
//     $.getJSON('http://muslimsalat.com/monroe/daily.json?key=API_KEY&jsoncallback=?', function (times)
//     {
//         console.log(times);
//         $('.prayerTimes')
//         .append('<p>Today in ' +times.city + ", " + times.state + "</p>")
//         .append('<p> Fajr: ' +times.items[0].fajr + "</p>")
//         .append('<p> Dhuhr: ' +times.items[0].dhuhr + "</p>")
//         .append('<p> Asr: ' +times.items[0].asr + "</p>")
//         .append('<p> Maghrib: ' +times.items[0].maghrib + "</p>")
//         .append('<p> Isha: ' +times.items[0].isha + "</p>")
//     });
// });

