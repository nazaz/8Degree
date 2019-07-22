'use strict';
// search
$(document).ready(function() {
   $('.js-show').click(function(){
        $('.popup-js').addClass('active')
   });

   $('.js-popup-close').click(function(){
    $('.popup-js').removeClass('active').addClass('pop-up-search')
    });

  });
// slider

$(document).ready(function(){
    $('.hero__slider').slick({
      dots: true,
      arrows:true,
      speed:600,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      dotsClass: 'dots-hero',

      customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<span>&#151;</span>'},
    });

  });

  // slider testimonial
  $(document).ready(function(){
    $('.testiomonial__slider').slick({
      dots: true,
      speed:600,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      prevArrow: null,
      nextArrow: null,
      dotsClass: 'dots-testiomonial',
      pauseOnFocus:false,
      pauseOnHover:false,

      customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<span>&#151;</span>'},
    });

  });



  // tab
  $(document).ready(function() {
  $('.js-btn-tab').on('click', function(event){

    event.preventDefault();

    var post = $(this).closest('.js-btn-tab'),
    contentPost = $('.tab'),
    postPosition = post.index();

    contentPost.eq(postPosition)
      .addClass('active')
      .siblings()
      .removeClass('active');

      post.addClass('active-btn')
      .siblings()
      .removeClass('active-btn');
  });
 
   });

  // tab sorting

   
$(document).ready(function() {
  $('.tab-menu__item').on('click', function(event){
    event.preventDefault();

    var item = $(this).closest('.tab-menu__item'),
    contentItem = $('.portfolio-holder__box'),
    itemPosition = item.data('class');
    
    if(itemPosition){
      contentItem.removeClass('active');
      contentItem.filter('.js-' + itemPosition )
      .addClass('active')  
    } else {
      contentItem.addClass('active');
    }

    item.addClass('active-btn')
      .siblings()
      .removeClass('active-btn');
 
  });
 
});

// $(document).ready(function() {
//   $('.tab-menu__item').on('click', function(event){
//     event.preventDefault();
// //   относительно находим
//     var item = $(this).closest('.tab-menu__item'),
//         // скрвать и показывать контент
//     contentItem = $('.portfolio-holder__box'),
// //   найти значение по дата атрибуту класс
//     itemPosition = item.data('class');

// //       удаление класса актив у других
//     contentItem.removeClass('active')
//     //           возращение дата класса  и добовление
//     contentItem.filter('.js-' + itemPosition ).addClass('active')

//   });
 
// });

// btn-up

$('.btn-up').click(function(){
  $('body').animate({'scrollTop':0}, 1000);
  $('html').animate({'scrollTop':0}, 1000);
});
  $(window).scroll(function(){
    var scrol =$(window).height();
    if($(window).scrollTop() > scrol){
      $('.btn-up').addClass('active-scroll');
    }
    else{
    $('.btn-up').removeClass('active-scroll');
  }
  });


  // number +
	
	$(function() {
	
		var target_block = $(".numb1"); // Ищем блок 
		var blockStatus = true;	
		$(window).scroll(function() {	
			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));	
			if(scrollEvent && blockStatus) {	
				blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.	
				var numb_start = $(".numb1").text(); // Получаем начальное число
  
  $({numberValue: 0}).animate({numberValue: numb_start},  {
				
					duration: 2500, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
					easing: "linear",
					
					step: function(val) {
					
						$(".numb1").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию						
					}					
				});				
			}			
		});		
	});

  $(function() {
	
		var target_block = $(".numb2"); // Ищем блок 
		var blockStatus = true;
		
		$(window).scroll(function() {		
			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
			if(scrollEvent && blockStatus) {	
				blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.			
				var numb_start = $(".numb2").text(); // Получаем начальное число
  $({numberValue: 0}).animate({numberValue: numb_start},  {
				
					duration: 2500, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
					easing: "linear",
					
					step: function(val) {
					
						$(".numb2").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию						
					}					
				});				
			}			
		});		
  });
  
  $(function() {
	
		var target_block = $(".numb3"); // Ищем блок 
		var blockStatus = true;
		
		$(window).scroll(function() {
		
			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
			
			if(scrollEvent && blockStatus) {
			
				blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
				
				var numb_start = $(".numb3").text(); // Получаем начальное число
  
  $({numberValue: 0}).animate({numberValue: numb_start},  {
				
					duration: 2000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
					easing: "linear",
					
					step: function(val) {
					
						$(".numb3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию						
					}					
				});				
			}			
		});		
  });
  
  $(function() {
	
		var target_block = $(".numb4"); // Ищем блок 
		var blockStatus = true;
		
		$(window).scroll(function() {
		
			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
			
			if(scrollEvent && blockStatus) {
			
				blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
				
				var numb_start = $(".numb4").text(); // Получаем начальное число
  
  $({numberValue: 0}).animate({numberValue: numb_start},  {
				
					duration: 2500, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
					easing: "linear",
					
					step: function(val) {
					
						$(".numb4").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию						
					}					
				});				
			}			
		});		
	});

// progress skill

$('.schedule__item').each(function(){
$(this).waypoint(function() {
  var progressWidth = $(this).find('.pracentig').data('value')+'%';

  console.log(progressWidth);
  $(this).find('.pracentig').animate({width:progressWidth},2000);         
}, {
offset: '95%'
});
});

// media menu


$(document).ready(function(){
	$(".js-show-menu").click(function(){
    $(".media-menu").toggleClass("active-m"); return false;
	});
});

  
 


	







