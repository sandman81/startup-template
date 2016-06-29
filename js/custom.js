$(function(){

	// gallery lightbox

    $('.gallery-section-content').magnificPopup({
	  type: 'image',
	  delegate: 'a',
	  fixedContentPos: false,
	  overflowY: 'hidden',
	  gallery:{
	    enabled:true
	  },
	  mainClass: 'mfp-with-zoom', // this class is for CSS animation below
	  callbacks: {
	    buildControls: function() {
	      // re-appends controls inside the main container
	      this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
	    }},
	  zoom: {
	    enabled: true, // By default it's false, so don't forget to enable it
	    duration: 300, // duration of the effect, in milliseconds
	    easing: 'ease-in-out', // CSS transition easing function

	    // The "opener" function should return the element from which popup will be zoomed in
	    // and to which popup will be scaled down
	    // By defailt it looks for an image tag:
	    opener: function(openerElement) {
	      // openerElement is the element on which popup was initialized, in this case its <a> tag
	      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
	      return openerElement.is('img') ? openerElement : openerElement.find('img');
	    }
	  }

	});

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

	// graduates slider

	$('.js-graduates-list').owlCarousel({
	    margin: 0,
	    items: 4,
	    nav: true,
	    mouseDrag: false
	});


	// facts counts 

	$('.facts-section').viewportChecker({
        callbackFunction: function(){
        	$(".js-spincrement").spincrement({
		        from: 0,
		        duration: 3000
		    });

		    $(".js-circle-count-1").circliful({
		        animationStep: 5,
		        foregroundBorderWidth: 20,
		        backgroundBorderWidth: 20,
		        foregroundColor: '#f2b02a',
		        backgroundColor: '#2f67c6',
		        fontColor: 'transparent',
		        percent: 65
		    });

		    $(".js-circle-count-2").circliful({
		        animationStep: 5,
		        foregroundBorderWidth: 20,
		        backgroundBorderWidth: 20,
		        foregroundColor: '#f2b02a',
		        backgroundColor: '#2f67c6',
		        fontColor: 'transparent',
		        percent: 85
		    });

        }
    });


    // modal tabs

	$('.modal-popup-top-tabs').delegate('.modal-popup-top-tabs_button:not(.active)', 'click', function() {
      $(this).addClass('active').siblings().removeClass('active').closest('.modal-popup').find('.modal-popup-content-users').eq($(this).index()).fadeIn(200).siblings('.modal-popup-content-users').hide();
    });


    


    
    

	


	 
   







    


    









    

























});




$(window).load(function(){

	// about parallax

	$(window).stellar({
		horizontalOffset: 0
	});

	

    









});