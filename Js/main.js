

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

// Works owlCarousel
$('.works .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: true,
    autoplayHoverPause: true,
    nav: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            dots: true
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

 // YouTubePopUp
 $("a.vid").YouTubePopUp();

  // Team owlCarousel
  $('.team .owl-carousel').owlCarousel({
    loop: true
    , margin: 30
    , mouseDrag: true
    , autoplay: false
    , autoplayTimeout: 5000
    , dots: true
    , nav: false
    , navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>']
    , autoplayHoverPause:true
    , responsiveClass: true
    , responsive: {
        0: {
            items: 1,
            nav: false
        , }
        , 600: {
            items: 2,
            nav: false
        }
        , 1000: {
            items: 3
        }
    }
});

