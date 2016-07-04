$(function(){

    // response content

    $('.gallery-section').each(function(index, el) {
        var images = $(this).find('img').clone();
        $('.gallery-section-slider').append(images);
    });

    $('.header-content-buttons_reg').each(function(index, el) {
        var button = $(this).clone();
        $('.top-menu').prepend(button);
    });


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

	// place gallery lightbox

    $('.place-content_gallery a').magnificPopup({
	  type: 'image',
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
	    }}

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
	    items: 6,
	    mouseDrag: false,
        responsive:{
            0:{
                items: 1.5,
                margin: false
            },
            400:{
                items: 2,
                margin: false
            },
            560:{
                items: 3,
                margin: false
            },
            768:{
                items: 4,
                margin: false
            },
            900:{
                items: 5,
                margin: false
            },
            1080:{
                items: 6,
                margin: false
            },
            1180:{
                margin: 29
            }
        }
	});

	// dates animates

	$('.js-programm-date').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInDown', 
		offset: 100 
    });

    $('.programm-content-tour-date_title_mark').viewportChecker({
        classToAdd: 'pulse', 
		offset: 100 
    });

	// graduates slider

	$('.js-graduates-list').owlCarousel({
	    margin: 0,
	    items: 4,
	    nav: true,
	    mouseDrag: false,
        responsive:{
            0:{
                items: 1.5,
                nav: false,
                margin: 35
            },
            500:{
                items: 2
            },
            768:{
                items: 3
            },
            900:{
                items: 4
            }
        }
	});

    // gallery slider

    $('.gallery-section-slider').owlCarousel({
        margin: 20,
        items: 1.5,
        loop: true,
        nav: false,
        center: true,
        mouseDrag: false,
        responsive:{
            0:{
                margin: 10,
                items: 1
            },
            768:{
                margin: 20
            }
        }
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

    // modal video

    $(".js-video-button").click(function(){
    	$('.js-video-modal').addClass('active');
        var source = $(this).attr('video-source');
        $('.js-video-modal iframe').attr('src', source);
    });

    $('.js-video-modal-closed').click(function(event) {
    	$('.js-video-modal').removeClass('active');
    	$('.js-video-modal iframe').attr('src', '');
    });

    // scroll elements

    $('.js-top-button-1').bind('click', function (e) {
       $('.top-menu').removeClass('active');
       var scroll = $(".about-content").offset().top - 92;
       $('body,html').animate({
            scrollTop: scroll
        }, 500);
        return false;  
    });

    $('.js-top-button-2').bind('click', function (e) {
       $('.top-menu').removeClass('active');
       var scroll = $(".reviews-section").offset().top - 92;
       $('body,html').animate({
            scrollTop: scroll
        }, 500);
        return false;  
    });

    $('.js-top-button-3').bind('click', function (e) {
        $('.top-menu').removeClass('active');
       var scroll = $(".graduates-section").offset().top - 92;
       $('body,html').animate({
            scrollTop: scroll
        }, 500);
        return false;  
    });

    $('.js-top-button-4').bind('click', function (e) {
        $('.top-menu').removeClass('active');
       var scroll = $(".layout-footer").offset().top;
       $('body,html').animate({
            scrollTop: scroll
        }, 500);
        return false;  
    });

    $('.js-register-button').bind('click', function (e) {
       var scroll = $(".register-section").offset().top - 92;
       $('body,html').animate({
            scrollTop: scroll
        }, 500);
        return false;  
    });

    $('.js-info-button-1').bind('click', function (e) {
       var scroll = $(".users-info").offset().top - 92;
       $('body,html').animate({
            scrollTop: scroll
        }, 500);
        return false;  
    });

    $('.js-info-button-2').bind('click', function (e) {
       var scroll = $(".programm-content").offset().top - 92;
       $('body,html').animate({
            scrollTop: scroll
        }, 500);
        return false;  
    });

    $('.js-info-button-3').bind('click', function (e) {
       var scroll = $(".place-content").offset().top - 92;
       $('body,html').animate({
            scrollTop: scroll
        }, 500);
        return false;  
    });

    $('.js-info-button-4').bind('click', function (e) {
       var scroll = $(".price-section").offset().top - 92;
       $('body,html').animate({
            scrollTop: scroll
        }, 500);
        return false;  
    });

    $('.js-about-scroll-button').bind('click', function (e) {
       var scroll = $(".about-content").offset().top - 92;
       $('body,html').animate({
            scrollTop: scroll
        }, 500);
        return false;  
    });

    $('.top-menu .js-register-button').click(function(event) {
        $('.top-menu').removeClass('active');
    });



    // modals open

    $('.modal-popup-content, .modal-popup-top').click(function(event) {
       event.stopPropagation();
    });

    $('.js-all-speakers-button').click(function(event) {
    	$('.js-modal-speakers').addClass('active');
        $('body').addClass('no-scroll');
        return false;
    });

    $('.js-all-mentors-button').click(function(event) {
    	$('.js-modal-mentors').addClass('active');
        $('body').addClass('no-scroll');
        return false;
    });

    $('.js-all-reviews-button').click(function(event) {
    	$('.js-modal-reviews').addClass('active');
        $('body').addClass('no-scroll');
        return false;
    });

    $('.js-all-graduates-button').click(function(event) {
    	$('.js-modal-graduates').addClass('active');
        $('body').addClass('no-scroll');
        return false;
    });

    $('.modal-popup-top_closed-button').click(function(event) {
    	$(this).closest('.modal-content').removeClass('active');
        $('body').removeClass('no-scroll');
    });

    $('.modal-content').click(function(event) {
        $(this).removeClass('active');
        $('body').removeClass('no-scroll');
    });

    // open tablet menu

    $('.js-tablet-menu-button').click(function(event) {
        $('.top-menu').toggleClass('active');
    });








    


    
    

	


	 
   







    


    









    

























});




$(window).load(function(){

	// about parallax

	$(window).stellar({
		horizontalOffset: 0
	});

	

    









});