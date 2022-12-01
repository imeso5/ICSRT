$(document).ready(function(){
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  $('.timer').counterUp({
    delay: 10,
    time: 1000
});


$(document).ready(function(){

  AOS.init();
});

$('.main-menu').slicknav({
  prependTo:".mobile-nav",
  label: '',
  duration: 500,
  easingOpen: "easeOutBounce",
});

jQuery(window).on('scroll', function() {
  if ($(this).scrollTop() > 1) {
    $('.header').addClass("sticky");
  } else {
    $('.header').removeClass("sticky");
  }
});

// $(window).bind('scroll', function() {
//   var navHeight = $(window).height() - 100;
//   if ($(window).scrollTop() > navHeight) {
//     $('.header .header-container').addClass('fixed');
//   } else {
//     $('.header .header-container').removeClass('fixed');
//   }
// });




});

