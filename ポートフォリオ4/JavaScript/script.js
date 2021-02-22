'use strict';


$(window).scroll(function() {
  sessionStorage.scrollTop = $(this).scrollTop();
});

$(document).ready(function() {
  if (sessionStorage.scrollTop != "undefined") {
    $(window).scrollTop(sessionStorage.scrollTop);
  }
});

$(function(){
  $('.container16-4').click(function(){
    $(this).next().slideToggle();
 //   $('.p-attending__contents-left').not($(this)).next('.container16-5').slideUp();

  });
});



$(document).ready(function() {
  $('.main-text20-2').on('click', function() {
      $(this).next().slideToggle();
  });
});


$(document).ready(function() {
  var pagetop = $('.top-btn');
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
            }
       });
       pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });
  });

  $(function(){
    $('.contact-button, .contact-responsive').on('click', function(){
        var targetTop = $('.container21').offset().top;
        $('html,body').animate({
            scrollTop: targetTop-100
        }, 500);
        return false;
    });
  });