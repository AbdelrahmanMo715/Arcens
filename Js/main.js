
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 1,
        dots : true,
        autoplay : true
    });
  });

  // Navbar scrolling background
  $(window).on("scroll", function () {
    let bodyScroll = $(window).scrollTop(),
        navbar = $(".navbar"),
        logo = $(".navbar .logo> img");
    if (bodyScroll > 100) {
        navbar.addClass("nav-scroll");
        logo.attr('src', '../assets/logo/logo-dark.png');
    } else {
        navbar.removeClass("nav-scroll");
        logo.attr('src', '../assets/logo//logo-light.png');
    }
});

// Close navbar-collapse when a clicked
$(".navbar-nav .dropdown-item a").on('click', function () {
    $(".navbar-collapse").removeClass("show");
});