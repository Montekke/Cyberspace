 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  adaptiveHeight: true,
  responsive:[
    {
      breakpoint:460,
      settings: {
        adaptiveHeight: false,
      }
    }
  ]
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  focusOnSelect: true,
  arrows:true,
  appendArrows:$('.arrows2'),
  responsive:[
    {
      breakpoint:1400,
      settings: {
        slidesToShow: 3
      }
    },{
      breakpoint:768,
      settings: {
        slidesToShow: 2
      }
    },{
      breakpoint:576,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.arrows').click(function(){
  $(this).prev().slick('slickNext');
});
$(".toggle-menu").click(function() {
$(".main-menu").toggleClass("show3")
});
$(".close3").click(function() {
$(".main-menu").removeClass("show3")
});

$('.card-header .btn').click(function(){
   if ($(this).parent().hasClass('act')) {
    $(this).parent().removeClass('act');
   } else {
    $(this).parent().addClass('act');
   }
});
$('.hide-btn').click(function(){
  $('.block-text').removeClass('hide');
  $('.hide-btn').addClass('hide');
});

$(".soc").click(function () {
  $(".soc").removeClass("active"),
  $(this).addClass("active"),
  $(this).parent().parent().find(".sposob").val($(this).data("sposob"));
});

$(window).scroll(function() {
if ($(this).scrollTop() > 1275) {
$('nav.main-nav').addClass('visible');
} else {
$('nav.main-nav').removeClass('visible');
}
});
$(".main-nav").on("click", "a", function(e) {
e.preventDefault(),
$(".main-nav a").removeClass("active"),
$(this).addClass("active"),
$(".main-menu").removeClass("show3");
var t = $(this).attr("href"),
s = $(t).offset().top - 100;
$("body,html").animate({
scrollTop: s
}, 1e3)
});


$("body").on("focusin", "input[type=tel]", (function() {
    $(this).inputmask({
        mask: ["+79999999999", "+799999999999"],
        greedy: !1
    })
}
));














//YaMapsShown = false;

//$(document).ready(function (){

 //$(window).scroll(function() {
    //if (!YaMapsShown){
     //if($(window).scrollTop() + $(window).height() > $(document).height() - 400) {
      showYaMaps();
      YaMapsShown = true;
     //}
    //}
// });

//});
function showYaMaps(){
 var script   = document.createElement("script");
 script.type  = "text/javascript";
 script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A16af7991adbc1e3a2ebc02d7b1bfe69950d3100e370c313e7160e26ca82b3995&amp;width=100%25&amp;height=761&amp;lang=ru_RU&amp;scroll=false";
 document.getElementById("YaMaps").appendChild(script);
}

$('.smen').click(function() {
    var smena = $(this).data('smena');
    var x = 'Забронировать место на смене: ' + smena;
     $('#exampleModal').find('#fr').val(x);
});
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
$(".modal").on("show.bs.modal", function(e) {
    $("header").css("padding-right", window.innerWidth - document.documentElement.clientWidth)
}), $(".modal").on("hidden.bs.modal", function(e) {
    $("header").css("padding-right", "0")
});

$(".modal").on("show.bs.modal", function(e) {
    $('.main-nav').css("padding-right", window.innerWidth - document.documentElement.clientWidth)
}), $(".modal").on("hidden.bs.modal", function(e) {
    $('.main-nav').css("padding-right", "0")
});



//Сейчас работаем

var date = new Date();
var hourr = date.getHours();
var week = date.getDay();

if (hourr < 11 || hourr > 20) {
      $('.worknow').addClass('none');
      $('.online').addClass('none');
}
else {
      $('.worknow').removeClass('none');
      $('.online').removeClass('none');
}
