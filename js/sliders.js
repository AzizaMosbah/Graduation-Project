/*---------------------------- Sliders ----------------------------*/

// var wow = new WOW({
//   mobile: false, // trigger animations on mobile devices (default is true)
// });
// wow.init();

$(document).ready(function () {
  $(".screenshot-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    dots: true,
    items: 1,
  });

  // slick slider active
  // $(".main_home_slider").slick({
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   prevArrow: "<i class='fa fa-angle-left nextprevleft'></i>",
  //   nextArrow: "<i class='fa fa-angle-right nextprevright'></i>",
  // });

  // $(".testimonial-carousel").owlCarousel({
  //   autoplay: true,
  //   smartSpeed: 1000,
  //   loop: true,
  //   center: true,
  //   dots: false,
  //   nav: true,
  //   navText: [
  //     '<i class="fa-solid fa-chevron-left"></i>',
  //     '<i class="fa-solid fa-chevron-right"></i>',
  //   ],
  //   responsive: {
  //     0: {
  //       items: 1,
  //       margin: 3,
  //     },
  //     768: {
  //       items: 2,
  //       margin: 3,
  //     },
  //     1200: {
  //       items: 3,
  //       margin: 3,
  //     },
  //   },
  // });

});



$(document).ready(function () {
  $('#dentistCarousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000, // 3 seconds
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      },
      1300: {
        items: 4
      },
      1500: {
        items: 5
      }
    }
  });

  $('#radiologyCarousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000, // 3 seconds
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      },
      1300: {
        items: 4
      },
      1500: {
        items: 5
      }
    }
  });
});