$(function () {
  $("#nav-placeholder").load("nav.html");
  $("#footer-placeholder").load("footer.html");
  
  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    speed: 500,
    cssEase: 'linear'
  });
});
