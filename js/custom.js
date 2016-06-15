$(window).load(function(){

	// about parallax

	$(window).stellar({
		horizontalOffset: 0
	});

	

    









});



$(function(){

	// about parallax

	$('.about-content_box > img').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn', 
		offset: 100 
    });


    // dates-slider

    $('.js-dates-slider').bxSlider({
	  mode: 'fade',
	  pager: true,
	  controls: false,
	  auto: true,
	  pause: 3000
	});

	// users slider

	$('.js-users-list').owlCarousel({
	    margin: 29,
	    items: 6,
	    mouseDrag: false
	});

	// dates animates

	$('.js-programm-date').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInDown', 
        repeat: true,
		offset: 100 
    });

    $('.programm-content-tour-date_title_mark').viewportChecker({
        classToAdd: 'pulse', 
        repeat: true,
		offset: 100 
    });


	 
   







    


    









    

























});


