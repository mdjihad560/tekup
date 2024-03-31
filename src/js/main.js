(function($) {
  "use strict";
  
  /*------------------------------------------------------------------
  [Table of contents]

tekup PRELOADER JS INIT
tekup SKILLBAR JS INIT
tekup MENU SIDEBAR JS INIT
tekup COUNTER JS INIT
tekup IMAGE ROTATE JS INIT
tekup AUTO SLIDER JS INIT
tekup PROJECT SLIDER JS INIT
tekup PROJECT SLIDER2 JS INIT
tekup MAGNIFIC POPUP JS INIT
tekup IMAGE SWIPE HOVER JS INIT
tekup PRICING TABLE JS INIT
tekup MAP JS
tekup wow js
  
-------------------------------------------------------------------*/
  
  
  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function(){
    return this.length;
  }
  
  
  $(function(){



/*--------------------------------------------------------------
tekup PRELOADER JS INIT
--------------------------------------------------------------*/

  $(".tekup-preloader-wrap").fadeOut(500);

  /*--------------------------------------------------------------
HEADER SEARCH JS INIT
------------------------------------------------------------*/
  $(".tekup-header-search, .tekup-header-search-close, .search-overlay").click(function() {
    $(".tekup-header-search-section, .search-overlay").toggleClass("open");
  });


/*--------------------------------------------------------------
tekup STICKY MENU JS INIT
--------------------------------------------------------------*/
$(window).on('scroll', function(){
  if ($(window).scrollTop() > 50) {
      $('#sticky-menu').addClass('sticky-menu');
  } else {
      $('#sticky-menu').removeClass('sticky-menu');
  }

});

/*--------------------------------------------------------------
tekup MENU SIDEBAR JS INIT
--------------------------------------------------------------*/
$(".tekup-header-barger").on("click", function (e) {
  $(".tekup-sidemenu-column, .offcanvas-overlay").addClass("active");
  event.preventDefault(e);
});
$(".tekup-sidemenu-close, .offcanvas-overlay").on("click", function () {
    $(".tekup-sidemenu-column, .offcanvas-overlay").removeClass("active");
});

/*--------------------------------------------------------------
SKILLBAR JS INIT
------------------------------------------------------------*/

var skillbar = $('.skillbar');
  if (skillbar.is_exist()){
      skillbar.skillBars({
      speed: 8000,
      interval: 100,
    });
}



/*--------------------------------------------------------------
tekup BRAND SLIDER ONE
--------------------------------------------------------------*/
var hero_slider = $('.tekup-hero-slider');
if(hero_slider.is_exist()){
  hero_slider.slick({
  infinite: true,
  slidesToShow: 1, 
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  autoplay: false , 
  speed: 800,
  lazyLoad: 'progressive',
  prevArrow: '<button class="slide-arrow tekup-hero-next"><i class="ri-arrow-left-s-line"></i></button>',
	nextArrow: '<button class="slide-arrow tekup-hero-prev"><i class="ri-arrow-right-s-line"></i></button>',
}).slickAnimation();


}

/*--------------------------------------------------------------
tekup BRAND SLIDER ONE
--------------------------------------------------------------*/
var four_column_slider = $('.tekup-4column-slider');
if(four_column_slider.is_exist()){
  four_column_slider.slick({
  infinite: true,
  slidesToShow: 4, 
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: false , 
  responsive: [
  {
    breakpoint: 1399,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
    }
  },

  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
    }
  },

  ]
});

}


/*--------------------------------------------------------------
tekup BRAND SLIDER ONE
--------------------------------------------------------------*/
var p_slider = $('.tekup-portfolio-slider');
if(p_slider.is_exist()){
  p_slider.slick({
  infinite: true,
  slidesToShow: 3.7, 
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: false , 
  responsive: [
  {
    breakpoint: 1499,
    settings: {
      slidesToShow: 2.7,
    }
  },
  {
    breakpoint: 1199,
    settings: {
      slidesToShow: 2.2,
    }
  },

  {
    breakpoint: 992,
    settings: {
      slidesToShow: 1.5,
    }
  },

  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
    }
  },

  ]
});

}


/*--------------------------------------------------------------
tekup BRAND SLIDER ONE
--------------------------------------------------------------*/
var p_slider = $('.tekup-portfolio-slider2');
if(p_slider.is_exist()){
  p_slider.slick({
  infinite: true,
  slidesToShow: 3, 
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: false , 
  responsive: [
  {
    breakpoint: 1400,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 1199,
    settings: {
      slidesToShow: 2,
    }
  },

  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
    }
  },

  ]
});

}


/*--------------------------------------------------------------
tekup BRAND SLIDER ONE
--------------------------------------------------------------*/
var t_t_slider = $('.tekup-t-two-column-slider');
if(t_t_slider.is_exist()){
  t_t_slider.slick({
  infinite: true,
  slidesToShow: 1, 
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  autoplay: false , 
  speed: 800,
  prevArrow: '<button class="slide-arrow tekup-t-next"><i class="ri-arrow-left-s-line"></i></button>',
	nextArrow: '<button class="slide-arrow tekup-t-prev"><i class="ri-arrow-right-s-line"></i></button>',
})

}


/*--------------------------------------------------------------
tekup BRAND SLIDER ONE
--------------------------------------------------------------*/
var t_t_slider = $('.tekup-testimonial-slider');
if(t_t_slider.is_exist()){
  t_t_slider.slick({
  infinite: true,
  slidesToShow: 1, 
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  autoplay: false , 
  speed: 800,
  prevArrow: '<button class="slide-arrow tekup-t-next"><i class="ri-arrow-left-s-line"></i></button>',
	nextArrow: '<button class="slide-arrow tekup-t-prev"><i class="ri-arrow-right-s-line"></i></button>',
})

}





/*--------------------------------------------------------------
tekup BRAND SLIDER ONE
--------------------------------------------------------------*/
var tekup_brand_slider = $('.tekup-brand-slider');
if(tekup_brand_slider.is_exist()){
  tekup_brand_slider.slick({
  infinite: true,
  slidesToShow: 5, 
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay: true , 
  autoplaySpeed: 0,
  speed: 10000,
  cssEase: 'linear',
  pauseOnHover:true,
  adaptiveHeight: true,
  responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 2,
    }
  },

  ]
});

}



/*--------------------------------------------------------------
tekup BRAND SLIDER ONE
--------------------------------------------------------------*/
var p_slider = $('.tekup-team-slider');
if(p_slider.is_exist()){
  p_slider.slick({
  infinite: true,
  slidesToShow: 6, 
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: false , 
  responsive: [
  {
    breakpoint: 1400,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 1199,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
    }
  },

  {
    breakpoint: 767,
    settings: {
      slidesToShow: 2,
    }
  },

  {
    breakpoint: 575,
    settings: {
      slidesToShow: 1,
    }
  },

  ]
});

}




/*--------------------------------------------------------------
tekup COUNTER JS INIT
--------------------------------------------------------------*/
var tekup_counter = $('#tekup-counter');
  if(tekup_counter.is_exist()){
      var a = 0;
      $(window).scroll(function() {

        var oTop = $(tekup_counter).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.tekup-counter').each(function() {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
                countNum: countTo
              },
              {
                duration: 4000,
                easing: 'swing',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                }
              });
          });
          a = 1;
        }

      });
}



/*--------------------------------------------------------------
tekup MAGNIFIC POPUP JS INIT
------------------------------------------------------------*/
var popup_youtube = $('.video-init');
  if (popup_youtube.is_exist()){
      popup_youtube.magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade'
  });

}



 
  });/*End document ready*/
  
  
  $(window).on("resize", function(){
    
  
  }); // end window resize
  
  
  $(window).on("load" ,function(){



  
  }); // End window LODE

/*--------------------------------------------------------------
tekup MAP JS
------------------------------------------------------------*/
var google_map = $('#map');
if(google_map.is_exist()){
  google.maps.event.addDomListener(window, 'load', init);
  function init() {
    var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        disableDefaultUI: true,
        center: new google.maps.LatLng(40.6700, -73.9400), 
         styles: [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}]
                };
      var mapElement = document.getElementById('map');

      var map = new google.maps.Map(mapElement, mapOptions);

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        // icon: 'assets/images/all-img/contact/map.png',
        title: 'tekup'
      });
      var contentString = '<div id="content">' +
          '<div id="tpw">' +
          '<h3>tekup' +
          '</div>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 280
      });

      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function(){ marker.setAnimation(null); }, 750);  //time it takes for one bounce   

      google.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map, marker);
      });

    }

}

//tekup wow js
var wow = new WOW({
  mobile: false,       // default
  tablet:false
});
wow.init();

// AOS.init({
//   duration: 1200,
// })
  


  })(jQuery);
  
  
  
  
  
  
  