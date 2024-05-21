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
    $(".main_home_slider").slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: "<i class='fa fa-angle-left nextprevleft'></i>",
      nextArrow: "<i class='fa fa-angle-right nextprevright'></i>",
    });
  
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      loop: true,
      center: true,
      dots: false,
      nav: true,
      navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
          margin: 3, // Adjust margin for mobile view
        },
        768: {
          items: 2,
          margin: 3, // Adjust margin for tablet view
        },
        1200: {
          items: 3,
          margin: 3, // Adjust margin for desktop view
        },
      },
    });
  });
  