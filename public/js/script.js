// animate
function makeShake() {
  $(".donate").removeClass("hide");
  $(".donate").addClass("flip");
}

setInterval(makeShake, 750)

// quotes
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

// contact form
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

// mobile resize
function calcVH() {
  $('header').innerHeight( $(this).innerHeight() );
}
$(document).ready(function() {
  calcVH();
  $(window).on('orientationchange', function() {
    calcVH();
  });
});

// emailJS forwarding
const serviceID = "service_zkzmi9b"
const templateID = "template_xosfpsn"
let templateParams;
const userID = "user_AOpQMhmW9QCJKO0qKOeoS"

emailjs.init(userID);

$('#send-button').on('click', function() {

  let firstName =  $('#input-1').val();
  let lastName = $('#input-2').val();
  let fullName = firstName + " " + lastName;

  templateParams = {
    "from_name" : fullName,
    "from_email": $('#input-4').val(),
    "phone_number" : $('#input-3').val(),
    "message" : $('#input-5').val()
  }

emailjs.send("service_zkzmi9b","template_xosfpsn", templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

})



