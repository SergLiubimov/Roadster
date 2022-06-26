$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        fade:true,
        autoplay: true,
        autoplaySpeed: 2000,
        
    });



    $('.header__btn').on('click', function(){
        $('.menu').addClass('active');
    });

    $('.close-btn').on('click', function(){
        $('.menu').removeClass('active');
    });
   
});