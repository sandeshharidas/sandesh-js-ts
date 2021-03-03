$(document).ready(function(){

    $(".nav-icon").click(function(){
        $(".full-nav").addClass("open");
    });

    $(".nav-close").click(function(){
        $(".full-nav").removeClass("open");
    });

    $(window).scroll(function(){

        var sc = $(window).scrollTop();
        if(sc > 90){
            $(".nav").addClass("sticky");
        }
        else{
            $(".nav").removeClass("sticky");
        }
    });

    $('.bxslider').bxSlider({
        mode: 'horizontal',
        moveSlides: 1,
        slideMargin: 40,
        infineLoop: true,
        miniSlides: 1,
        maxSlides: 1,
        speed: 1200,
    });

    
})