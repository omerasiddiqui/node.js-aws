///////////////// [ donate spin animation ] //////////////

function makeShake() {
  $(".donate").removeClass("hide");
  $(".donate").addClass("flip");
}

function fadeInUp() {
  $(".amazonPay").removeClass("hide");
  $(".amazonPay").addClass("fadeInDown");
}

setInterval(makeShake, 1500)
setInterval(fadeInUp, 1500)

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

  setInterval(changeText, 9000);

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

////////////// [ mobile browser resize ] /////////////////////

function calcVH() {
  $('header').innerHeight( $(this).innerHeight() );
}
$(document).ready(function() {
  calcVH();
  $(window).on('orientationchange', function() {
    calcVH();
  });
});



var amazonClientId = "amzn1.application-oa2-client.4af4262a236b472fbd8e5c3bda0feabf",
    amazonSecret = "a20ee5a8a9dcf954a16fd917bb3e79fb52dec95c5f43490b04bcdd5e39421de8";