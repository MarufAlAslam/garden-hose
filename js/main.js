$('.testimonial-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="btn btn-prev"><i class="fa fa-angle-left text-success"></i></button>',
    nextArrow: '<button class="btn btn-next"><i class="fa fa-angle-right text-success"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  $('.verified-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: '<button class="btn btn-prev"><i class="fa fa-angle-left text-success"></i></button>',
    nextArrow: '<button class="btn btn-next"><i class="fa fa-angle-right text-success"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  
  $('.brandImgSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: '<button class="btn btn-prev"><i class="fa fa-angle-left text-success"></i></button>',
    nextArrow: '<button class="btn btn-next"><i class="fa fa-angle-right text-success"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.steps button').click(function(){
      $('.steps button').removeClass('active')
      $(this).addClass('active')
  })

  $('.day1').click(function(){
      $('.day').hide(400)
      $('.day-1').show(400)
      $('.dayImg').hide(400)
      $('.day1Img').show(400)
  })

  $('.day2').click(function(){
    $('.day').hide(400)
    $('.day-2').show(400)
    $('.dayImg').hide(400)
      $('.day2Img').show(400)
})

$('.day3').click(function(){
    $('.day').hide(400)
    $('.day-3').show(400)
    $('.dayImg').hide(400)
      $('.day3Img').show(400)
})

$('.day4').click(function(){
    $('.day').hide(400)
    $('.day-4').show(400)
    $('.dayImg').hide(400)
      $('.day4Img').show(400)
})

$('.day5').click(function(){
    $('.day').hide(400)
    $('.day-5').show(400)
    $('.dayImg').hide(400)
      $('.day5Img').show(400)
})

$('.day6').click(function(){
    $('.day').hide(400)
    $('.day-6').show(400)
    $('.dayImg').hide(400)
      $('.day6Img').show(400)
})

$('.day7').click(function(){
    $('.day').hide(400)
    $('.day-7').show(400)
    $('.dayImg').hide(400)
      $('.day7Img').show(400)
})


$(".scrollDown").click(function() {
  $('html, body').animate({
      scrollTop: $(".featured").offset().top
  }, 500);
});

$('.oneBtn').click(function(){
  $('.one').show(300)
  $('.two').hide(300)
  $('.three').hide(300)
})

$('.twoBtn').click(function(){
  $('.one').hide(300)
  $('.two').show(300)
  $('.three').hide(300)
})

$('.threeBtn').click(function(){
  $('.one').hide(300)
  $('.two').hide(300)
  $('.three').show(300)
})


$('.navbar-toggler').click(function(){
  $('#navbarSupportedContent').css("transform","translateX(0)")
})

$('.closerNav').click(function(){
  $('#navbarSupportedContent').css("transform","translateX(-100%)")
})
var btnActive = 0
$('.acc .btn ').click(function(){
  $('.content').hide(300)
  $(this).parent().children('.content').toggle(300)
  if(btnActive % 2 == 0){
    $(this).addClass('active')
    btnActive++
  }
  else{
    $(this).removeClass('active')
    btnActive++
  }
})