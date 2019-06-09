$(document).ready(function() {
    // 點產品介紹，出現下拉式選單
    $('.dropdown').click(function(event){
        event.stopPropagation();
        $('.dropdown__open').slideToggle();
        $('.dropdown').toggleClass('active'); 
    });

    // 點任一處，關閉下拉式選單，並把 .dropdown 選單恢復白底
    $('html').click(function(){
        $('.dropdown__open').hide();
        // $('.dropdown').toggleClass('active');
        if($('.dropdown__open').css('display','none')){
        $('.dropdown').removeClass('active');
        }
    });
  
  
    // scroll body to 0px on click
		$('.back_to_top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			// return false;
		});

  // lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        });

  // 輪播片
   var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
      },
    });
});