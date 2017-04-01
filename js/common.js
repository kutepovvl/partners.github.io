$(function() {
    
    $(".slider").slick({    
        autoplay: true,
        autoplaySpeed: 4000, 
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: true,
        speed: 400, 
        dots: true,
        cssEase: 'linear', 
        adaptiveHeight: true, 
        arrows: true, 
        prevArrow: "<div class='arrow-wrap arrow-wrap-left'><i class='fa fa-angle-left'></i></div>",
        nextArrow: "<div class='arrow-wrap arrow-wrap-right'><i class='fa fa-angle-right'></i></div>"
    });
    
    $(".hamburger").click(function() {
        $(this).toggleClass("is-active");
        $(".navbar-menu").slideToggle();
    });
    
    $(".carousel-wrap").slick({    
        autoplay: true,
        autoplaySpeed: 3000, 
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: true,
        speed: 400, 
        dots: true,
        cssEase: 'linear', 
        adaptiveHeight: true, 
        arrows: true, 
        prevArrow: "<div class='arrow-wrap arrow-wrap-left'><i class='fa fa-angle-left'></i></div>",
        nextArrow: "<div class='arrow-wrap arrow-wrap-right'><i class='fa fa-angle-right'></i></div>"
    });
    
    $('.feautures-item').equalHeights();
    
    
    $(window).scroll(function(){
      var docscroll= $(document).scrollTop();
      if(docscroll>$(window).height()){
        $('.navbar').addClass('fixed');
      }else{
        $('.navbar').removeClass('fixed') };
    });

});
