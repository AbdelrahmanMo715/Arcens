const repoName = "Arcens";
document.querySelectorAll('a.nav-link').forEach(link => {
  if (window.location.hostname === "abdelrahmanmo715.github.io") {
    link.href = `/${repoName}/${link.getAttribute("href")}`;
  }
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
        logo.attr('src', '../assets/logo/logo-light.png');
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

 // Testimonials owlCarousel
 $('.testimonials .owl-carousel').owlCarousel({
    loop:true,
    margin: 30,
    mouseDrag:true,
    autoplay: false,
    autoplayTimeout: 7000,
    dots: true,
    nav: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 1,
        },
        1000:{
            items: 2,
        }
    }
}); 

// Blog 2 owlCarousel 
$('.blog2 .owl-carousel').owlCarousel({
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
            dots: true
        , }
        , 600: {
            items: 2,
            dots: true
        }
        , 1000: {
            items: 3
        }
    }
});

// Clients owlCarousel
$('.clients .owl-carousel').owlCarousel({
    loop: true
    , margin: 30
    , mouseDrag: true
    , autoplay: true
    , autoplayTimeout: 5000
    , dots: false
    , nav: false
    , navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>']
    , responsiveClass: true
    , responsive: {
        0: {
            margin: 15
            , items: 2
        }
        , 600: {
            items: 3
        }
        , 1000: {
            items: 5
        }
    }
});

 // Scroll back to top
 var progressPath = document.querySelector('.progress-wrap path');
 var pathLength = progressPath.getTotalLength();
 progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
 progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
 progressPath.style.strokeDashoffset = pathLength;
 progressPath.getBoundingClientRect();
 progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
 var updateProgress = function () {
     var scroll = $(window).scrollTop();
     var height = $(document).height() - $(window).height();
     var progress = pathLength - (scroll * pathLength / height);
     progressPath.style.strokeDashoffset = progress;
 }
 updateProgress();
 $(window).scroll(updateProgress);
 var offset = 150;
 var duration = 550;
 jQuery(window).on('scroll', function () {
     if (jQuery(this).scrollTop() > offset) {
         jQuery('.progress-wrap').addClass('active-progress');
     } else {
         jQuery('.progress-wrap').removeClass('active-progress');
     }
 });
 jQuery('.progress-wrap').on('click', function (event) {
     event.preventDefault();
     jQuery('html, body').animate({
         scrollTop: 0
     }, duration);
     return false;
 }) 
 


