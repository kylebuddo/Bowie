$(document).ready(function() {
	
	// make the buy tickets stick

	var buyBarTop = $('.buy-holder').offset().top;
 
	var stickyBar = function(){

		var scrollTop = $(window).scrollTop();
		      
		if (scrollTop > buyBarTop) { 
    		$('.buy-holder').addClass('sticky');
		} 
		else 
		{
    		$('.buy-holder').removeClass('sticky'); 
		}
	};

	// run that shit
 
	$(window).scroll(function() {
    	stickyBar();
	});
 
	
	// make the text section fade in and move into position

	$(window).scroll(function(){

		var textBoxTop = $('.slide-in').offset().top;

		var windowScroll = $(this).scrollTop();
		

			if (windowScroll > textBoxTop - ($(window).height() / 1.3)) {

				var offset = Math.min(150, windowScroll - textBoxTop + ($(window).height() - 111));

				$('.cuddleme').css({'transform' : 'translateY(-' + offset + 'px)'});

				var opacityOffset = (windowScroll - textBoxTop + 500) / (windowScroll /2);


				$('.cuddleme').css({'opacity' : opacityOffset });

			}

		

	});



});