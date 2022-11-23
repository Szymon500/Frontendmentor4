$(document).ready(function(){
    $('.opinions__box').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000,
        arrows:false,
        dots:true,
        dotClass:'slick-dots',
        mobileFirst:true,
        responsive:[
            {
                breakpoint:976,
                settings:{
                    slidesToShow:3
                
                }
            }
        ]
    });
  });