$(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    // link will target id and scroll
    $('select').niceSelect();

    $(".magnafic-btn").magnificPopup({
      type: "video",
    });




    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });

    $(".reviews-item").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: false,
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 2,
        },
        992: {
          items: 2,
        },
        1200: {
          items: 2,
        },
      },
    });

    // scrollbar
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1) {
        $('.main-menu').addClass('sticky');
      } else {
        $('.main-menu').removeClass('sticky');
      }
    })

    // scroll top to bottom
    $(window).scroll(function () {
      if ($(this).scrollTop() > 160) {
        $('.scrollUp').fadeIn();
      } else {
        $('.scrollUp').fadeOut();
      }
    })
    $(".scrollUp").click(function () {
      $("html ,body").animate({
        scrollTop: 0
      });
    });

    new WOW().init();

    //  How It Stacks Up Probucket
    $(".item").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: false,
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });

  });

  $(window).on("load", function () {
    /*Preloader*/
    $('.preloder').fadeOut();
  });

});