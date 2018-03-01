jQuery(function($) {
	"use strict";

	//1. Main Slideshow - Owl Carousel Plugin
	$("#main-slideshow").owlCarousel({
		items: 1, //items per page
		autoplay: true, //automatic play true/flase
		autoplayTimeout: 9000, //slide duration in miliseconds
		loop: true, //infinite loop
		smartSpeed: 600, //slidespeed in miniseconds
		animateIn: 'fadeIn', //slidein animation
		animateOut: 'fadeOut', //slideout animation
		dots: false, //dot navigation display
		nav: true, //arrow navigation button display
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'] //navigation text
	});

    $(document).ready(function () {
    $('#myCarousel').carousel({
        interval: 10000
    })
    $('.fdi-Carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        }
        else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
});

	//2. Urgent Causes - Isotope Plugin

    jQuery(window).load(function() {
        jQuery('#preloader').fadeOut(300);

        //2.1 Isotope Filters
        $('.urgent-causes').isotope({
    		// options
    		itemSelector: '.isotope-item',
    		layoutMode: 'fitRows'
    	});

        //2.2 Isotope Masonry Layout
    	$('.isotope-nav li').click(function() {
            $('.isotope-nav li.active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $('.urgent-causes').isotope({
                filter: selector,
                itemSelector: '.isotope-item',
                layoutMode: 'fitRows',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
        	});
            return false;
        });
        //2.2 Isotope Masonry Layout

        $('.gallery').isotope({
            layoutMode: 'fitRows'
        })
    });

    //2.1 Urgent Causes (Carousel) - Owl Carousel Plugin
    $("#causes-carousel").owlCarousel({
        items: 4, //items per page
        autoplay: true, //automatic play true/flase
        autoplayTimeout: 9000, //slide duration in miliseconds
        loop: true, //infinite loop
        smartSpeed: 600, //slidespeed in miniseconds
        animateIn: 'fadeIn', //slidein animation
        animateOut: 'fadeOut', //slideout animation
        dots: false, //dot navigation display
        nav: true, //arrow navigation button display
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'], //navigation text

        //Responsive layout
        responsive:{
            0:{
                items:1, //Items view in Mobile Device
            },
            600:{
                items:3, //Items view in Tab Device
            },
            1000:{
                items:4, //Items view in Large
            }
        }
    });

	//3. Upcomming Event - Countdown Plugin
    $("#countdown").countdown({
        date: "31 december 2019 12:00:00",
        format: "on"
    });

    //4. Clients - Owl Carousel Plugin
    $('#client-slider').owlCarousel({
    	items: 5, //items per page
		autoplay: true, //automatic play true/flase
		autoplayTimeout: 9000, //slide duration in miliseconds
		loop: true, //infinite loop
		smartSpeed: 600, //slidespeed in miniseconds
		animateIn: 'fadeIn', //slidein animation
		animateOut: 'fadeOut', //slideout animation
		dots: false, //dot navigation display
		nav: true, //arrow navigation button display
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'], //navigation text

        //Responsive layout
        responsive:{
            0:{
                items:1, //Items view in Mobile Device
            },
            600:{
                items:3, //Items view in Tab Device
            },
            1000:{
                items:5, //Items view in Large
            }
        }
    });

    //5. Twitter Feed - Tweetie Plugin
    $('#twitter-feed .tweet').twittie({
    	username: 'ithemeslab',
        dateFormat: '%b. %d, %Y',
        template: '<div class="tweet-icon"><i class="fa fa-twitter fa-2x"></i></div><div class="tweet-date">{{date}}</div><div class="tweet-content">{{tweet}}</div>',
        count: 1,
        loadingText: 'Loading!'
    });

    //6. Footer Gallery - Fancybox Plugin
    $(".fancybox").fancybox();

    //7 Latest posts - Owl Carousel Plugin
    $("#blog-carousel").owlCarousel({
        items: 2, //items per page
        autoplay: true, //automatic play true/flase
        autoplayTimeout: 9000, //slide duration in miliseconds
        loop: true, //infinite loop
        smartSpeed: 600, //slidespeed in miniseconds
        animateIn: 'fadeIn', //slidein animation
        animateOut: 'fadeOut', //slideout animation
        dots: true, //dot navigation display
        nav: false, //arrow navigation button display

        //Responsive layout
        responsive:{
            0:{
                items:1, //Items view in Mobile Device
            },
            600:{
                items:2, //Items view in Tab Device
            },
            1000:{
                items:2, //Items view in Large
            }
        }
    });

    //Hover Dropdown Menu
    $('.navbar .dropdown').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

    }, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
    });
    $('.navbar .dropdown > a').click(function(){
    location.href = this.href;
    });

    //Accordion
    $('#st-accordion, #st-accordion1, #st-accordion2').accordion({
        oneOpenedItem   : true,
        open            : 0
    });

    //timer
    $(".fact-box, .fact-box1, .fact-box2, .fact-box3").appear(function(){
        var datacount = $(this).attr('data-count');
        $(this).find('.timer').delay(6000).countTo({
            from: 0,
            to: datacount,
            speed: 5000,
            refreshInterval: 50,
        });
    });

    //easy pie chart
    $('.chart').each(function(){
        var $chart = $(this);
        var $color = $(this).data('color');
        $chart.easyPieChart({
            animate: 2000,
            barColor: $color,
            barColor2: $color,
            lineCap: 'square',
            lineWidth: 5,
            scaleColor: false,
            size: 120,
        });
    });


    //About slider
    $("#about-slider").owlCarousel({
        items: 1, //items per page
        autoplay: true, //automatic play true/flase
        autoplayTimeout: 9000, //slide duration in miliseconds
        loop: true, //infinite loop
        smartSpeed: 600, //slidespeed in miniseconds
        animateIn: 'fadeIn', //slidein animation
        animateOut: 'fadeOut', //slideout animation
        dots: true, //dot navigation display
        nav: false, //arrow navigation button display
    });

    //Tabs
    $('#aboutTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    //Tooltip
    $('.tooltips').tooltipster({
        theme: 'tooltipster-riana',
    });

	//text rotator
	$("#js-rotating").Morphext({
		// The [in] animation type. Refer to Animate.css for a list of available animations.
		animation: "fadeInDown",
		// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
		separator: ",",
		// The delay between the changing of each phrase in milliseconds.
		speed: 4000,
		complete: function () {
			// Called after the entrance animation is executed.
		}
	});

    //Back to top
    $('#back-to-top').on('click', function(){
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });

});
