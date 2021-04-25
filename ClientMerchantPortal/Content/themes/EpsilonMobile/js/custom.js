

//window.onload(function () {
//	//$("#status").fadeOut(); // will first fade out the loading animation
//	//$("#preloader").delay(100).fadeOut("slow"); // will fade out the white DIV that covers the website.
//	//$("#status").addClass('hide-status'); // will first fade out the loading animation
//	//$("#preloader").addClass('hide-preloader'); // will fade out the white DIV that covers the website.
//});


$( document ).ready(function() {
    
    //DEMO Toggles
    //Delete this section
    
    $('.header-dark-toggle').click(function(){          $(this).parent().find('a').removeClass('active-page-setting');        $(this).addClass('active-page-setting');        $('#header-fixed').removeClass('header-light');               $('#header-fixed').addClass('header-dark');         $('.header-menu').removeClass('header-menu-light');      $('.header-menu').addClass('header-menu-dark');        return false;    });    
    $('.header-light-toggle').click(function(){         $(this).parent().find('a').removeClass('active-page-setting');        $(this).addClass('active-page-setting');        $('#header-fixed').removeClass('header-dark');                $('#header-fixed').addClass('header-light');        $('.header-menu').removeClass('header-menu-dark');       $('.header-menu').addClass('header-menu-light');       return false;    });    
    $('.footer-dark-toggle').click(function(){          $(this).parent().find('a').removeClass('active-page-setting');        $(this).addClass('active-page-setting');        $('#footer-fixed').removeClass('footer-light');               $('#footer-fixed').addClass('footer-dark');         $('.footer').removeClass('footer-light');                 $('.footer').addClass('footer-dark');   return false;    });          
    $('.footer-light-toggle').click(function(){         $(this).parent().find('a').removeClass('active-page-setting');        $(this).addClass('active-page-setting');        $('#footer-fixed').removeClass('footer-dark');                $('#footer-fixed').addClass('footer-light');        $('.footer').removeClass('footer-dark');                $('.footer').addClass('footer-light'); return false;    });    
    $('.sidebars-dark-toggle').click(function(){        $(this).parent().find('a').removeClass('active-page-setting');        $(this).addClass('active-page-setting');        $('.snap-drawer').removeClass('sidebar-light-clean');         $('.snap-drawer').removeClass('sidebar-light');     $('.snap-drawer').removeClass('sidebar-dark-clean');     $('.snap-drawer').addClass('sidebar-dark');            return false;    });        
    $('.sidebars-light-toggle').click(function(){       $(this).parent().find('a').removeClass('active-page-setting');        $(this).addClass('active-page-setting');        $('.snap-drawer').removeClass('sidebar-light-clean');         $('.snap-drawer').removeClass('sidebar-dark');      $('.snap-drawer').removeClass('sidebar-dark-clean');     $('.snap-drawer').addClass('sidebar-light');           return false;    });    
    $('.sidebars-light-icon-toggle').click(function(){  $(this).parent().find('a').removeClass('active-page-setting');        $(this).addClass('active-page-setting');        $('.snap-drawer').removeClass('sidebar-light');               $('.snap-drawer').removeClass('sidebar-dark');      $('.snap-drawer').removeClass('sidebar-dark-clean');     $('.snap-drawer').addClass('sidebar-light-clean');     return false;    });    
    $('.sidebars-dark-icon-toggle').click(function(){   $(this).parent().find('a').removeClass('active-page-setting');        $(this).addClass('active-page-setting');        $('.snap-drawer').removeClass('sidebar-light-clean');         $('.snap-drawer').removeClass('sidebar-dark');      $('.snap-drawer').removeClass('sidebar-light');          $('.snap-drawer').addClass('sidebar-dark-clean');      return false;    });        

    $('.disable-footer-menu').click(function(){
        $('#footer-fixed').addClass('disabled');
        $('.footer-clear').addClass('disabled');
    });    
    
    $('.enable-footer-menu').click(function(){
        $('#footer-fixed').removeClass('disabled');
        $('.footer-clear').removeClass('disabled');
    });    
    
    $('.disable-header-menu').click(function(){
        $('.header-menu').addClass('disabled');
        $('.open-header-menu').addClass('disabled');

    });    
    
    $('.enable-header-menu').click(function(){
        $('.header-menu').removeClass('disabled');
        $('.open-header-menu').removeClass('disabled');
    });
    
    $('.change-colors a').click(function(){
       $(this).parent().find('a').removeClass('submenu-item-active');
       $(this).addClass('submenu-item-active');
    });
    
    //Delete Untill Here//
    
    
    //Menu Settings
    
    $('.open-header-menu, .close-header-menu').click(function(){
       $('.header-menu').toggleClass('header-menu-active'); 
       $('.open-header-menu').toggleClass('header-rotate');
    });
    
    $('.close-header-menu').click(function(){
       $('.header-menu').removeClass('header-menu-active'); 
    });
    
    $('.show-submenu').click(function(){
       $(this).parent().find('.submenu').toggleClass('submenu-active'); 
       $(this).toggleClass('submenu-active');     
	   return false;  
    });
    
    
    //Fast Click - Removing 300ms delay when clicking for instant response time
    
    //$(function() {
    //    FastClick.attach(document.body);
    //});

    /*Image Sliders*/

    //Note. Every image slider must be placed within the timeout function.//
    //Image sliders put a lot of load on mobile devices and slow the performance of other animations//
    //But adding a timeout event, even for a microsecond gives a great boost in performance (41% boost to be exact)
    
    //setTimeout(function() {
    //    //Simple Slider
        
    //    var owl = $('.simple-slider');
    //    owl.owlCarousel({
    //        animateOut: 'fadeOut',
    //        animateIn: 'fadeIn',
    //        items:1,
    //        loop:true,
    //        margin:5,
    //        autoplay:true,
    //        autoplayTimeout:3000,
    //        autoplayHoverPause:true
    //    });
        
    //    //Coverpage Slider

    //    $('.coverpage-slider').owlCarousel({
    //        loop:true,
    //        margin:0,
    //        nav:false,
    //        dots:true,
    //        items:1
    //    });

    //    //Demo Slider inside Quotes

    //    $('.demo-slider').owlCarousel({
    //        loop:true,
    //        margin:200,
    //        nav:false,
    //        autoHeight:true,
    //        responsive:{
    //            0:{
    //                items:1
    //            },
    //            600:{
    //                items:2
    //            }
    //        }
    //    });

    //    $('.next-demo').click(function() {$('.demo-slider').trigger('next.owl.carousel');	return false;}); 
    //    $('.prev-demo').click(function() {$('.demo-slider').trigger('prev.owl.carousel');	return false;});
        
    //    //Homepage Slider No Transitions
    //    $('.circle-slider').owlCarousel({
    //        autoplay:true,
    //        autoplayTimeout:5000,
    //        autoplayHoverPause:true,
    //        loop:true,
    //        margin:10,
    //        nav:false,
    //        dots:false,
    //        responsive:{
    //            0:{
    //                items:1
    //            },
    //            600:{
    //                items:2
    //            }
    //        }
    //    });        
        
    //    //Store Slider
        
    //    //Homepage Slider No Transitions
    //    $('.store-slider').owlCarousel({
    //        autoplay:true,
    //        autoplayTimeout:5000,
    //        autoplayHoverPause:true,
    //        loop:true,
    //        margin:30,
    //        nav:false,
    //        dots:false,
    //        responsive:{
    //            0:{
    //                items:1
    //            },
    //            768:{
    //                items:2
    //            }
    //        }
    //    });        
        
    //    $('.product-slider').owlCarousel({
    //        autoplay:true,
    //        autoplayTimeout:5000,
    //        autoplayHoverPause:true,
    //        loop:true,
    //        margin:30,
    //        nav:false,
    //        dots:false,
    //        items:1
    //    });
        
    //    //Homepage Slider No Transitions
    //    $('.homepage-slider-no-transition').owlCarousel({
    //        autoplay:true,
    //        autoplayTimeout:5000,
    //        autoplayHoverPause:true,
    //        loop:true,
    //        margin:10,
    //        nav:false,
    //        dots:false,
    //        items:1
    //    });
        
    //    //Homepage Slider With Transition
    //    $('.homepage-slider-transition').owlCarousel({
    //        autoplay:true,
    //        autoplayTimeout:5000,
    //        autoplayHoverPause:true,
    //        animateOut: 'fadeOut',
    //        animateIn: 'fadein',
    //        loop:true,
    //        margin:10,
    //        nav:false,
    //        dots:false,
    //        items:1
    //    });
                
        
    //    //Homepage Slider With Transition 2
    //    $('.homepage-slider-transition-2').owlCarousel({
    //        autoplay:true,
    //        autoplayTimeout:5000,
    //        autoplayHoverPause:true,
    //        animateOut: 'slideOutDown',
    //        animateIn: 'slideInUp',
    //        loop:true,
    //        margin:10,
    //        nav:false,
    //        dots:false,
    //        items:1
    //    });
                
        
    //    //Homepage Slider With Transition 2
    //    $('.homepage-slider-transition-3').owlCarousel({
    //        autoplay:true,
    //        autoplayTimeout:5000,
    //        autoplayHoverPause:true,
    //        animateOut: 'rollOut',
    //        animateIn: 'rollIn',
    //        loop:true,
    //        margin:10,
    //        nav:false,
    //        dots:false,
    //        items:1
    //    });
        
    //    $('.homepage-cover-slider').owlCarousel({
    //        autoplay:true,
    //        autoplayTimeout:5000,
    //        autoplayHoverPause:true,
    //        animateOut: 'fadeOut',
    //        animateIn: 'fadeIn',
    //        loop:true,
    //        margin:10,
    //        nav:false,
    //        dots:false,
    //        items:1
    //    });
        
    //    $('.next-home-slider').click(function() {$('.homepage-slider-transition, .homepage-slider-transition-2, .homepage-slider-transition-3, .homepage-slider-no-transition').trigger('next.owl.carousel');	return false;}); 
    //    $('.prev-home-slider').click(function() {$('.homepage-slider-transition, .homepage-slider-transition-2, .homepage-slider-transition-3, .homepage-slider-no-transition').trigger('prev.owl.carousel');	return false;});
        
        
    //    //Staff Slider No Transition
    //    $('.staff-slider-no-transition').owlCarousel({
    //        autoplay:true,
    //        autoplayTimeout:5000,
    //        autoplayHoverPause:true,
    //        lazyLoad:true,
    //        loop:true,
    //        margin:10,
    //        nav:false,
    //        dots:false,
    //        responsive:{
    //            0:{
    //                items:1
    //            },
    //            600:{
    //                items:2
    //            },
    //            1000:{
    //                items:3
    //            }
    //        }
    //    });
        
    //    //Staff Slider With Transition
    //    $('.staff-slider-transition').owlCarousel({
    //        autoplay:true,
    //        autoplayTimeout:5000,
    //        autoplayHoverPause:true,
    //        animateOut: 'fadeOut',
    //        animateIn: 'fadeIn',
    //        lazyLoad:true,
    //        loop:true,
    //        margin:10,
    //        nav:false,
    //        dots:false,
    //        responsive:{
    //            0:{
    //                items:1
    //            },
    //            600:{
    //                items:2
    //            },
    //            1000:{
    //                items:3
    //            }
    //        }
    //    });
        
    //    $('.next-staff-slider').click(function() {$('.staff-slider-no-transition, .staff-slider-transition').trigger('next.owl.carousel');	return false;}); 
    //    $('.prev-staff-slider').click(function() {$('.staff-slider-no-transition, .staff-slider-transition').trigger('prev.owl.carousel');	return false;});
        
        
    //    //Quote Slider No Transition
    //    $('.quote-slider-no-transition').owlCarousel({
    //        autoplay:true,
    //        autoplayTimeout:5000,
    //        autoplayHoverPause:true,
    //        lazyLoad:true,
    //        loop:true,
    //        margin:70,
    //        nav:false,
    //        dots:false,
    //        responsive:{
    //            0:{
    //                items:1
    //            },
    //            600:{
    //                items:1
    //            },
    //            1000:{
    //                items:1
    //            }
    //        }
    //    });        
        
    //    //Quote Slider No Transition
    //    $('.quote-slider-transition').owlCarousel({
    //        autoHeight:true,
    //        autoplay:true,
    //        autoplayTimeout:5000,
    //        autoplayHoverPause:true,
    //        animateOut: 'fadeOut',
    //        animateIn: 'fadeIn',
    //        lazyLoad:true,
    //        loop:true,
    //        margin:10,
    //        nav:false,
    //        dots:false,
    //        responsive:{
    //            0:{
    //                items:1
    //            },
    //            600:{
    //                items:1
    //            },
    //            1000:{
    //                items:1
    //            }
    //        }
    //    });
        
    //    $('.next-quote-slider').click(function() {$('.quote-slider-no-transition, .quote-slider-transition').trigger('next.owl.carousel');	return false;}); 
    //    $('.prev-quote-slider').click(function() {$('.quote-slider-no-transition, .quote-slider-transition').trigger('prev.owl.carousel');	return false;});
        
    //    //Placing the Dots if Needed
    //    function slider_dots(){
    //        var dots_width = (-($('.owl-dots').width()/2));
    //        $('.owl-dots').css('position', 'absolute');
    //        $('.owl-dots').css('left', '50%');
    //        $('.owl-dots').css('margin-left', dots_width);   
    //    }      
    //    slider_dots();

    //}, 1);

	//Detect if iOS WebApp Engaged and permit navigation without deploying Safari
	(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")
            
    //Lazy Load | Preloading Image

    //$(function() {
    //    $(".preload-image").lazyload({
    //        threshold : 200,
    //        effect : "fadeIn"
    //    });
    //    $("img.lazy").show().lazyload();
    //});
    
    //Page Chapters Activation
    
    $('.show-page-chapters, .hide-chapters').click(function(){
       $('.page-chapters').toggleClass('page-chapters-active'); 
    });
    
    $('.page-chapters a').click(function(){
        $('.page-chapters a').removeClass('active-chapter');
        $(this).addClass('active-chapter');
    });
    
    //SiteMap Effect
    $('.sitemap-box a').hover(
        function() {
            $( this ).find('i').addClass('scale-hover');
        }, function() {
            $( this ).find('i').removeClass('scale-hover');
        }
    );
	    
    //Tabs
    
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('active-tab');
		$('.tab-content').slideUp(200);

		$(this).addClass('active-tab');
		$("#"+tab_id).slideToggle(200);
	})
    
    //Accordion
    
    $('.accordion').find('.accordion-toggle').click(function(){
        //Expand or collapse this panel
        $(this).next().slideDown(250);
        $('.accordion').find('i').removeClass('rotate-180');
        $(this).find('i').addClass('rotate-180');

        //Hide the other panels
        $(".accordion-content").not($(this).next()).slideUp(200);
    });
        
    //Classic Toggles
    
    $('.toggle-title').click(function(){
        $(this).parent().find('.toggle-content').slideToggle(200); 
        $(this).find('i').toggleClass('rotate-toggle');
        return false;
    });
    
    //Notifications
    
    $('.static-notification-close').click(function(){
       $(this).parent().slideUp(200); 
        return false;
    });    
    
    $('.tap-dismiss').click(function(){
       $(this).slideUp(200); 
        return false;
    });
    
    //Modal Launchers
    
    $('.modal-close').click(function(){return false;});
    
	$('.simple-modal').click(function() {
		$('.simple-modal-content').modal();
	});	
    
    $('.social-login-modal').click(function() {
		$('.social-login-modal-content').modal();
	});    
    
    $('.simple-login-modal').click(function() {
		$('.simple-login-modal-content').modal();
	});    
    
    $('.social-profile-modal').click(function() {
		$('.social-profile-modal-content').modal();
	});
    
    //Sharebox Settings
        
    $('.show-share-bottom, .show-share-box').click(function(){
        $('.share-bottom').toggleClass('active-share-bottom'); 
        $.modal.close()
        return false;
    });    
    
    $('.close-share-bottom').click(function(){
       $('.share-bottom').removeClass('active-share-bottom'); 
        return false;
    });
    
    //Fixed Notifications

    //top
    $('.close-top-notification').click(function(){
       $('.top-notification').slideUp(200);
        return false;
    });
    
    $('.show-top-notification-1').click(function(){
        $('.top-notification, .bottom-notification, .timeout-notification').slideUp(200);
        $('.top-notification-1').slideDown(200);
    });    
    
    $('.show-top-notification-2').click(function(){
        $('.top-notification, .bottom-notification, .timeout-notification').slideUp(200);
        $('.top-notification-2').slideDown(200);
    });    
    
    $('.show-top-notification-3').click(function(){
        $('.top-notification, .bottom-notification, .timeout-notification').slideUp(200);
        $('.top-notification-3').slideDown(200);
    });    
    
    //bottom
    $('.close-bottom-notification').click(function(){
       $('.bottom-notification').slideUp(200);
        clearTimeout(notification_timer);
        return false;
    });
    
    $('.show-bottom-notification-1').click(function(){
        $('.top-notification, .bottom-notification, .timeout-notification').slideUp(200);
        $('.bottom-notification-1').slideDown(200);
        return false;
    });    
    
    $('.show-bottom-notification-2').click(function(){
        $('.top-notification, .bottom-notification, .timeout-notification').slideUp(200);
        $('.bottom-notification-2').slideDown(200);
        return false;
    });    
    
    $('.show-bottom-notification-3').click(function(){
        $('.top-notification, .bottom-notification, .timeout-notification').slideUp(200);
        $('.bottom-notification-3').slideDown(200);
        return false;
    });
    
    //Timeout
    
    $('.timer-notification').click(function(){
        var notification_timer;
        notification_timer = setTimeout(function(){ $('.timeout-notification').slideUp(250); },5000);
    });
    
    //Switches
    
    $('.switch-1').click(function(){
       $(this).toggleClass('switch-1-on'); 
        return false;
    });
    
    $('.switch-2').click(function(){
       $(this).toggleClass('switch-2-on'); 
        return false;
    });
    
    $('.switch-3').click(function(){
       $(this).toggleClass('switch-3-on'); 
        return false;
    });
    
    $('.switch, .switch-icon').click(function(){
        $(this).parent().find('.switch-box-content').slideToggle(200); 
        $(this).parent().find('.switch-box-subtitle').slideToggle(200);
        return false;
    });
    
    //Reminders & Checklists & Tasklists
    
    $('.reminder-check-square').click(function(){
       $(this).toggleClass('reminder-check-square-selected'); 
        return false;
    });    
    
    $('.reminder-check-round').click(function(){
       $(this).toggleClass('reminder-check-round-selected'); 
        return false;
    });
    
    $('.checklist-square').click(function(){
       $(this).toggleClass('checklist-square-selected');
        return false;
    });    
    
    $('.checklist-round').click(function(){
       $(this).toggleClass('checklist-round-selected');
        return false;
    });
    
    $('.tasklist-incomplete').click(function(){
       $(this).removeClass('tasklist-incomplete'); 
       $(this).addClass('tasklist-completed'); 
    });    
    
    $('.tasklist-item').click(function(){
       $(this).toggleClass('tasklist-completed'); 
    });
    
    //Activity Item Toggle
    
    $('.activity-item').click(function(){
       $(this).find('.activity-item-detail').slideToggle(200); 
    });
    
    //Detecting Mobiles//
    
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    
    if(isMobile.any()) {
        //Settings for all mobiles
        $('head').append('<link />');
    } 
    
    if( !isMobile.any() ){
        $('.show-blackberry, .show-ios, .show-windows, .show-android').hide(0);
        $('show-no-detection').show(0);
        
        $('#content').bind('mousewheel', function(event) {
          event.preventDefault();
          var scrollTop = this.scrollTop;
          this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -2));
          //console.log(event.deltaY, event.deltaFactor, event.originalEvent.deltaMode, event.originalEvent.wheelDelta);
        });
        $("#content").css("overflow-y","hidden");
    }
    
    if(isMobile.Android()) {
        $('.show-android').show(0);
        $('.show-blackberry, .show-ios, .show-windows').hide(0);
    }
        
    if(isMobile.BlackBerry()) {
        $('.show-blackberry').show(0);
        $('.show-android, .show-ios, .show-windows').hide(0);
    }
        
    if(isMobile.iOS()) {
        $('.show-ios').show(0);
        $('.show-blackberry, .show-android, .show-windows').hide(0);
    }
        
    if(isMobile.Windows()) {
        $('.show-windows').show(0);
        $('.show-blackberry, .show-ios, .show-android').hide(0);
    }
    
    $('.back-to-top-badge, .back-to-top').click(function() {
		$('#content').animate({
			scrollTop:0
		}, 500, 'easeInOutQuad');
		return false;
	});
    
    //Show Back To Home When Scrolling
        
    $('#content').on('scroll', function () {
        var total_scroll_height = $('#content')[0].scrollHeight
        var inside_header = ($(this).scrollTop() <= 150);
        var passed_header = ($(this).scrollTop() >= 0); //250
        var footer_reached = ($(this).scrollTop() >= (total_scroll_height - ($(window).height() +100 )));
        
        if (inside_header == true) {
            $('.back-to-top-badge').removeClass('back-to-top-badge-visible');
        } else if (passed_header == true)  {
            $('.back-to-top-badge').addClass('back-to-top-badge-visible');
        } 
        if (footer_reached == true){            
            $('.back-to-top-badge').removeClass('back-to-top-badge-visible');
        }
    });
    
    //Make contianer fullscreen//    
         
    function create_paddings(){
        var no_padding = $(window).width();
        function mobile_paddings(){
            //$('.content').css('padding-left', '20px');   
            //$('.content').css('padding-right', '20px');   
            $('.container-fullscreen, .image-fullscreen').css('margin-left', '-20px');
            $('.container-fullscreen, .image-fullscreen').css('width', no_padding +2);    
        }
        
        function tablet_paddings(){
            $('.content').css('padding-left', '50px');   
            $('.content').css('padding-right', '50px');  
            $('.container-fullscreen, .image-fullscreen').css('margin-left', '-50px');
            $('.container-fullscreen, .image-fullscreen').css('width', no_padding +2);              
        }
        
        if($(window).width() < 766){
            mobile_paddings()
        }        
        if($(window).width() > 766){
            tablet_paddings()
        }
    }

    $(window).resize(function() {  
        create_paddings();
    });
    
    create_paddings();
        
    //Set inputs to today's date by adding class set-day
    
    //var set_input_now = new Date();
    //var set_input_month = (set_input_now.getMonth() + 1);               
    //var set_input_day = set_input_now.getDate();
    //if(set_input_month < 10) 
    //    set_input_month = "0" + set_input_month;
    //if(set_input_day < 10) 
    //    set_input_day = "0" + set_input_day;
    //var set_input_today = set_input_now.getFullYear() + '-' + set_input_month + '-' + set_input_day;
    //$('.set-today').val(set_input_today);
        
    
    //Portfolios and Gallerties
    
    $('.adaptive-one').click(function(){
        $('.portfolio-switch').removeClass('active-adaptive');
        $(this).addClass('active-adaptive');
        $('.portfolio-adaptive').removeClass('portfolio-adaptive-two portfolio-adaptive-three');
        $('.portfolio-adaptive').addClass('portfolio-adaptive-one');
        return false;
    });    
    
    $('.adaptive-two').click(function(){
        $('.portfolio-switch').removeClass('active-adaptive');
        $(this).addClass('active-adaptive');
        $('.portfolio-adaptive').removeClass('portfolio-adaptive-one portfolio-adaptive-three');
        $('.portfolio-adaptive').addClass('portfolio-adaptive-two'); 
        return false;
    });    
    
    $('.adaptive-three').click(function(){
        $('.portfolio-switch').removeClass('active-adaptive');
        $(this).addClass('active-adaptive');
        $('.portfolio-adaptive').removeClass('portfolio-adaptive-two portfolio-adaptive-one');
        $('.portfolio-adaptive').addClass('portfolio-adaptive-three'); 
        return false;
    });
    
    //Wide Portfolio
    
    $('.show-wide-text').click(function(){
        $(this).parent().find('.wide-text').slideToggle(200); 
        return false;
    });
    
    $('.portfolio-close').click(function(){
       $(this).parent().parent().find('.wide-text').slideToggle(200);
        return false;
    });
    
    //$('.show-gallery, .show-gallery-1, .show-gallery-2, .show-gallery-3, .show-gallery-4, .show-gallery-5, .add-gallery a').swipebox();
    
    //function apply_gallery_justification(){
    //    var screen_widths = $(window).width();
    //    if( screen_widths < 768){ 
    //        $('.gallery-justified').justifiedGallery({
    //            rowHeight : 70,
    //            maxRowHeight : 370,
    //            margins : 5,
    //            fixedHeight:false
    //        });
    //    };

    //    if( screen_widths > 768){
    //        $('.gallery-justified').justifiedGallery({
    //            rowHeight : 150,
    //            maxRowHeight : 370,
    //            margins : 5,
    //            fixedHeight:false
    //        });
    //    };
    //};
    //apply_gallery_justification();
    
    //Filterable Gallery
    
    var selectedClass = "";
    $(".filter-category").click(function(){
        $('.portfolio-filter-categories a').removeClass('selected-filter');
        $(this).addClass('selected-filter');
        selectedClass = $(this).attr("data-rel");
        $(".portfolio-filter-wrapper").show(250);
        $(".portfolio-filter-wrapper div").not("."+selectedClass).delay(100).hide(250);
        setTimeout(function() {
            $("."+selectedClass).show(250);
            $(".portfolio-filter-wrapper").show(250);
        }, 0);
    });
    
    //Fullscreen Map
    
    $('.map-text, .map-overlay').click(function(){
       $('.map-text, .map-overlay').fadeOut(200); 
       $('.deactivate-map').fadeIn(200); 
    });    
    
    $('.deactivate-map').click(function(){
       $('.map-text, .map-overlay').fadeIn(200); 
       $('.deactivate-map').fadeOut(200); 
    });
    
    function generate_map(){
        var map_width = $(window).width();
        var map_height = $(window).height();
        
        $('.map-fullscreen iframe').css('width', map_width);
        $('.map-fullscreen iframe').css('height', map_height);
    };
    generate_map();
    
    //-------------------Generate Cover Screen Elements--------------------//
    //Global Settings for Fullscreen Pages, PageApps and Coverscreen Slider//
    
    function align_cover_elements(){
        var cover_width = $(window).width();
        var cover_height = $(window).height();
        var cover_vertical = -($('.cover-center').height())/2;
        var cover_horizontal = -($('.cover-center').width())/2;
        
        $('.cover-screen').css('width', cover_width);
        $('.cover-screen').css('height', cover_height);
        $('.cover-screen .overlay').css('width', cover_width);
        $('.cover-screen .overlay').css('height', cover_height);
        
        $('.cover-center').css('margin-left', cover_horizontal);      
        $('.cover-center').css('margin-top', cover_vertical + 30);     
        $('.cover-left').css('margin-top', cover_vertical);   
        $('.cover-right').css('margin-top', cover_vertical);       
        
        $('.homepage-cover, .homepage-cover-slider').css('height', cover_height);
        $('.homepage-cover, .homepage-cover-slider').css('width', cover_width +1);
        
    };
    align_cover_elements();        
    
    //Resize Functions//
    
    $(window).resize(function(){
        //apply_gallery_justification();  
        //align_cover_elements();
        //generate_map();
    });
    
    
    //Add To HomeScreen
    /*
    addToHomescreen({
        skipFirstVisit: false,
        detectHomescreen:true,
        maxDisplayCount: 140,
        startDelay:1,
        autostart:true,
        lifespan:0
    });
	*/
    
    //Swipebox Image Gallery//
    //SVG Usage is not recommended due to poor compatibility with older Android / Windows Mobile Devices//
    
	//$(".swipebox").swipebox({
	//	useCSS : true, 
	//	hideBarsDelay : 3000 // 0 to always show caption and action bar
	//});
    
    //Sidebar Activation for pages with proper functions
    
    if($('body').hasClass('dual-sidebar')){   dual_sidebar();   }
    if($('body').hasClass('left-sidebar')){   left_sidebar();   }
    if($('body').hasClass('right-sidebar')){  right_sidebar();  }
    if($('body').hasClass('no-sidebar')){     no_sidebar();     }
        
    function dual_sidebar(){
        var snapper = new Snap({
            element: document.getElementById('content'),
            elementMirror: document.getElementById('header-fixed'),
            elementMirror2: document.getElementById('footer-fixed'),
            disable: 'none',
            tapToClose: true,
            touchToDrag: true,
            maxPosition: 266,
            minPosition: -266
        });
        $('.close-sidebar').click(function(){snapper.close(); return false;});
        $('.open-left-sidebar').click(function() {
            //$(this).toggleClass('remove-sidebar');
            if( snapper.state().state=="left" ){
                snapper.close();
            } else {
                snapper.open('left');
            }
            return false;
        });	
        //$('.open-right-sidebar').click(function() {
        //    //$(this).toggleClass('remove-sidebar');
        //    if( snapper.state().state=="right" ){
        //        snapper.close();
        //    } else {
        //        snapper.open('right');
        //    }
        //    return false;
        //});
        snapper.on('open', function(){$('.back-to-top-badge').removeClass('back-to-top-badge-visible');});
        snapper.on('drag', function(){$('.back-to-top-badge').removeClass('back-to-top-badge-visible');});
    };    
    
    function left_sidebar(){
        var snapper = new Snap({
            element: document.getElementById('content'),
            elementMirror: document.getElementById('header-fixed'),
            elementMirror2: document.getElementById('footer-fixed'),
            disable: 'right',
            tapToClose: true,
            //touchToDrag: true,
            touchToDrag: false,
            maxPosition: 266,
            minPosition: -266
        });  
        $('.close-sidebar').click(function () { snapper.close(); return false; });

        //$('body').click('.menu-item', function () {
        //    snapper.close(); return false;
        //});
        $('body').on("click", '.menu-item:not(.menu-item-anchor)', function () {
            snapper.close(); return false;
        });

        $('.open-left-sidebar').click(function() {
            //$(this).toggleClass('remove-sidebar');
            if( snapper.state().state=="left" ){
                snapper.close();
            } else {
                snapper.open('left');
            }
            return false;
        });	
        snapper.on('open', function(){$('.back-to-top-badge').removeClass('back-to-top-badge-visible');});
        snapper.on('drag', function(){$('.back-to-top-badge').removeClass('back-to-top-badge-visible');});
    };    
    
    function right_sidebar(){
        var snapper = new Snap({
            element: document.getElementById('content'),
            elementMirror: document.getElementById('header-fixed'),
            elementMirror2: document.getElementById('footer-fixed'),
            disable: 'left',
            tapToClose: true,
            touchToDrag: true,
            maxPosition: 266,
            minPosition: -266
        });     
        $('.close-sidebar').click(function(){snapper.close(); return false;});
        //$('.open-right-sidebar').click(function() {
        //    //$(this).toggleClass('remove-sidebar');
        //    if( snapper.state().state=="right" ){
        //        snapper.close();
        //    } else {
        //        snapper.open('right');
        //    }
        //    return false;
        //});
        snapper.on('open', function(){$('.back-to-top-badge').removeClass('back-to-top-badge-visible');});
        snapper.on('drag', function(){$('.back-to-top-badge').removeClass('back-to-top-badge-visible');});
    };     
        
    function no_sidebar(){
        var snapper = new Snap({
            element: document.getElementById('content'),
            elementMirror: document.getElementById('header-fixed'),
            elementMirror2: document.getElementById('footer-fixed'),
            disable: 'none',
            tapToClose: false,
            touchToDrag: false
        });        
    }; 
        
});

(function ($) {
    /*
     * Snap.js
     *
     * Copyright 2013, Jacob Kelley - http://jakiestfu.com/
     * Released under the MIT Licence
     * http://opensource.org/licenses/MIT
     *
     * Github:  http://github.com/jakiestfu/Snap.js/
     * Version: 1.9.3 (with elementMirror for fixed navigation bars)
     */
    /*jslint browser: true*/
    /*global define, module, ender*/
    (function (win, doc) {
        'use strict';
        var Snap = Snap || function (userOpts) {
            var settings = {
                element: null,
                elementMirror: null,
                elementMirror2: null,
                dragger: null,
                disable: 'none',
                addBodyClasses: true,
                hyperextensible: true,
                resistance: 0.5,
                flickThreshold: 50,
                transitionSpeed: 0.3,
                easing: 'ease',
                maxPosition: 266,
                minPosition: -266,
                tapToClose: true,
                touchToDrag: true,
                slideIntent: 40, // degrees
                minDragDistance: 5
            },
            cache = {
                simpleStates: {
                    opening: null,
                    towards: null,
                    hyperExtending: null,
                    halfway: null,
                    flick: null,
                    translation: {
                        absolute: 0,
                        relative: 0,
                        sinceDirectionChange: 0,
                        percentage: 0
                    }
                }
            },
            eventList = {},
            utils = {
                hasTouch: ('ontouchstart' in doc.documentElement || win.navigator.msPointerEnabled),
                eventType: function (action) {
                    var eventTypes = {
                        down: (utils.hasTouch ? 'touchstart' : 'mousedown'),
                        move: (utils.hasTouch ? 'touchmove' : 'mousemove'),
                        up: (utils.hasTouch ? 'touchend' : 'mouseup'),
                        out: (utils.hasTouch ? 'touchcancel' : 'mouseout')
                    };
                    return eventTypes[action];
                },
                page: function (t, e) {
                    return (utils.hasTouch && e.touches.length && e.touches[0]) ? e.touches[0]['page' + t] : e['page' + t];
                },
                klass: {
                    has: function (el, name) {
                        return (el.className).indexOf(name) !== -1;
                    },
                    add: function (el, name) {
                        if (!utils.klass.has(el, name) && settings.addBodyClasses) {
                            el.className += " " + name;
                        }
                    },
                    remove: function (el, name) {
                        if (settings.addBodyClasses) {
                            el.className = (el.className).replace(name, "").replace(/^\s+|\s+$/g, '');
                        }
                    }
                },
                dispatchEvent: function (type) {
                    if (typeof eventList[type] === 'function') {
                        return eventList[type].call();
                    }
                },
                vendor: function () {
                    var tmp = doc.createElement("div"),
                        prefixes = 'webkit Moz O ms'.split(' '),
                        i;
                    for (i in prefixes) {
                        if (typeof tmp.style[prefixes[i] + 'Transition'] !== 'undefined') {
                            return prefixes[i];
                        }
                    }
                },
                transitionCallback: function () {
                    return (cache.vendor === 'Moz' || cache.vendor === 'ms') ? 'transitionend' : cache.vendor + 'TransitionEnd';
                },
                canTransform: function () {
                    settings.element
                    return typeof settings.element.style[cache.vendor + 'Transform'] !== 'undefined';
                },
                deepExtend: function (destination, source) {
                    var property;
                    for (property in source) {
                        if (source[property] && source[property].constructor && source[property].constructor === Object) {
                            destination[property] = destination[property] || {};
                            utils.deepExtend(destination[property], source[property]);
                        } else {
                            destination[property] = source[property];
                        }
                    }
                    return destination;
                },
                angleOfDrag: function (x, y) {
                    var degrees, theta;
                    // Calc Theta
                    theta = Math.atan2(-(cache.startDragY - y), (cache.startDragX - x));
                    if (theta < 0) {
                        theta += 2 * Math.PI;
                    }
                    // Calc Degrees
                    degrees = Math.floor(theta * (180 / Math.PI) - 180);
                    if (degrees < 0 && degrees > -180) {
                        degrees = 360 - Math.abs(degrees);
                    }
                    return Math.abs(degrees);
                },
                events: {
                    addEvent: function addEvent(element, eventName, func) {
                        if (element.addEventListener) {
                            return element.addEventListener(eventName, func, false);
                        } else if (element.attachEvent) {
                            return element.attachEvent("on" + eventName, func);
                        }
                    },
                    removeEvent: function addEvent(element, eventName, func) {
                        if (element.addEventListener) {
                            return element.removeEventListener(eventName, func, false);
                        } else if (element.attachEvent) {
                            return element.detachEvent("on" + eventName, func);
                        }
                    },
                    prevent: function (e) {
                        if (e.preventDefault) {
                            e.preventDefault();
                        } else {
                            e.returnValue = false;
                        }
                    }
                },
                parentUntil: function (el, attr) {
                    var isStr = typeof attr === 'string';
                    while (el.parentNode) {
                        if (isStr && el.getAttribute && el.getAttribute(attr)) {
                            return el;
                        } else if (!isStr && el === attr) {
                            return el;
                        }
                        el = el.parentNode;
                    }
                    return null;
                }
            },
            action = {
                translate: {
                    get: {
                        matrix: function (index) {

                            if (!utils.canTransform()) {
                                return parseInt(settings.element.style.left, 10);
                            } else {
                                var matrix = win.getComputedStyle(settings.element)[cache.vendor + 'Transform'].match(/\((.*)\)/),
                                    ieOffset = 8;
                                if (matrix) {
                                    matrix = matrix[1].split(',');
                                    if (matrix.length === 16) {
                                        index += ieOffset;
                                    }
                                    return parseInt(matrix[index], 10);
                                }
                                return 0;
                            }
                        }
                    },
                    easeCallback: function () {
                        settings.element.style[cache.vendor + 'Transition'] = '';
                        settings.elementMirror.style[cache.vendor + 'Transition'] = '';
                        settings.elementMirror2.style[cache.vendor + 'Transition'] = '';
                        cache.translation = action.translate.get.matrix(4);
                        cache.easing = false;
                        clearInterval(cache.animatingInterval);

                        if (cache.easingTo === 0) {
                            utils.klass.remove(doc.body, 'snapjs-right');
                            utils.klass.remove(doc.body, 'snapjs-left');
                        }

                        utils.dispatchEvent('animated');
                        utils.events.removeEvent(settings.element, utils.transitionCallback(), action.translate.easeCallback);
                    },
                    easeTo: function (n) {

                        if (!utils.canTransform()) {
                            cache.translation = n;
                            action.translate.x(n);
                        } else {
                            cache.easing = true;
                            cache.easingTo = n;

                            settings.element.style[cache.vendor + 'Transition'] = 'all ' + settings.transitionSpeed + 's ' + settings.easing;
                            settings.elementMirror.style[cache.vendor + 'Transition'] = 'all ' + settings.transitionSpeed + 's ' + settings.easing;
                            settings.elementMirror2.style[cache.vendor + 'Transition'] = 'all ' + settings.transitionSpeed + 's ' + settings.easing;

                            cache.animatingInterval = setInterval(function () {
                                utils.dispatchEvent('animating');
                            }, 1);

                            utils.events.addEvent(settings.element, utils.transitionCallback(), action.translate.easeCallback);
                            action.translate.x(n);
                        }
                        if (n === 0) {
                            settings.element.style[cache.vendor + 'Transform'] = '';
                            settings.elementMirror.style[cache.vendor + 'Transform'] = '';
                            settings.elementMirror2.style[cache.vendor + 'Transform'] = '';
                        }
                    },
                    x: function (n) {
                        if ((settings.disable === 'left' && n > 0) ||
                            (settings.disable === 'right' && n < 0)
                        ) { return; }

                        if (!settings.hyperextensible) {
                            if (n === settings.maxPosition || n > settings.maxPosition) {
                                n = settings.maxPosition;
                            } else if (n === settings.minPosition || n < settings.minPosition) {
                                n = settings.minPosition;
                            }
                        }

                        n = parseInt(n, 10);
                        if (isNaN(n)) {
                            n = 0;
                        }

                        if (utils.canTransform()) {
                            var theTranslate = 'translate3d(' + n + 'px, 0,0)';
                            settings.element.style[cache.vendor + 'Transform'] = theTranslate;
                            settings.elementMirror.style[cache.vendor + 'Transform'] = theTranslate;
                            settings.elementMirror2.style[cache.vendor + 'Transform'] = theTranslate;
                        } else {
                            settings.element.style.width = (win.innerWidth || doc.documentElement.clientWidth) + 'px';
                            settings.elementMirror.style.width = (win.innerWidth || doc.documentElement.clientWidth) + 'px';
                            settings.elementMirror2.style.width = (win.innerWidth || doc.documentElement.clientWidth) + 'px';

                            settings.element.style.left = n + 'px';
                            settings.elementMirror.style.left = n + 'px';
                            settings.elementMirror2.style.left = n + 'px';
                            settings.element.style.right = '';
                            settings.elementMirror.style.right = '';
                            settings.elementMirror2.style.right = '';

                        }
                    }
                },
                drag: {
                    listen: function () {
                        cache.translation = 0;
                        cache.easing = false;
                        utils.events.addEvent(settings.element, utils.eventType('down'), action.drag.startDrag);
                        utils.events.addEvent(settings.element, utils.eventType('move'), action.drag.dragging);
                        utils.events.addEvent(settings.element, utils.eventType('up'), action.drag.endDrag);
                    },
                    stopListening: function () {
                        utils.events.removeEvent(settings.element, utils.eventType('down'), action.drag.startDrag);
                        utils.events.removeEvent(settings.element, utils.eventType('move'), action.drag.dragging);
                        utils.events.removeEvent(settings.element, utils.eventType('up'), action.drag.endDrag);
                    },
                    startDrag: function (e) {
                        // No drag on ignored elements
                        var target = e.target ? e.target : e.srcElement,
                            ignoreParent = utils.parentUntil(target, 'data-snap-ignore');

                        if (ignoreParent) {
                            utils.dispatchEvent('ignore');
                            return;
                        }


                        if (settings.dragger) {
                            var dragParent = utils.parentUntil(target, settings.dragger);

                            // Only use dragger if we're in a closed state
                            if (!dragParent &&
                                (cache.translation !== settings.minPosition &&
                                cache.translation !== settings.maxPosition
                            )) {
                                return;
                            }
                        }

                        utils.dispatchEvent('start');
                        settings.element.style[cache.vendor + 'Transition'] = '';
                        settings.elementMirror.style[cache.vendor + 'Transition'] = '';
                        settings.elementMirror2.style[cache.vendor + 'Transition'] = '';
                        cache.isDragging = true;
                        cache.hasIntent = null;
                        cache.intentChecked = false;
                        cache.startDragX = utils.page('X', e);
                        cache.startDragY = utils.page('Y', e);
                        cache.dragWatchers = {
                            current: 0,
                            last: 0,
                            hold: 0,
                            state: ''
                        };
                        cache.simpleStates = {
                            opening: null,
                            towards: null,
                            hyperExtending: null,
                            halfway: null,
                            flick: null,
                            translation: {
                                absolute: 0,
                                relative: 0,
                                sinceDirectionChange: 0,
                                percentage: 0
                            }
                        };
                    },
                    dragging: function (e) {
                        if (cache.isDragging && settings.touchToDrag) {

                            var thePageX = utils.page('X', e),
                                thePageY = utils.page('Y', e),
                                translated = cache.translation,
                                absoluteTranslation = action.translate.get.matrix(4),
                                whileDragX = thePageX - cache.startDragX,
                                openingLeft = absoluteTranslation > 0,
                                translateTo = whileDragX,
                                diff;

                            // Shown no intent already
                            if ((cache.intentChecked && !cache.hasIntent)) {
                                return;
                            }

                            if (settings.addBodyClasses) {
                                if ((absoluteTranslation) > 0) {
                                    utils.klass.add(doc.body, 'snapjs-left');
                                    utils.klass.remove(doc.body, 'snapjs-right');
                                } else if ((absoluteTranslation) < 0) {
                                    utils.klass.add(doc.body, 'snapjs-right');
                                    utils.klass.remove(doc.body, 'snapjs-left');
                                }
                            }

                            if (cache.hasIntent === false || cache.hasIntent === null) {
                                var deg = utils.angleOfDrag(thePageX, thePageY),
                                    inRightRange = (deg >= 0 && deg <= settings.slideIntent) || (deg <= 360 && deg > (360 - settings.slideIntent)),
                                    inLeftRange = (deg >= 180 && deg <= (180 + settings.slideIntent)) || (deg <= 180 && deg >= (180 - settings.slideIntent));
                                if (!inLeftRange && !inRightRange) {
                                    cache.hasIntent = false;
                                } else {
                                    cache.hasIntent = true;
                                }
                                cache.intentChecked = true;
                            }

                            if (
                                (settings.minDragDistance >= Math.abs(thePageX - cache.startDragX)) || // Has user met minimum drag distance?
                                (cache.hasIntent === false)
                            ) {
                                return;
                            }

                            utils.events.prevent(e);
                            utils.dispatchEvent('drag');

                            cache.dragWatchers.current = thePageX;
                            // Determine which direction we are going
                            if (cache.dragWatchers.last > thePageX) {
                                if (cache.dragWatchers.state !== 'left') {
                                    cache.dragWatchers.state = 'left';
                                    cache.dragWatchers.hold = thePageX;
                                }
                                cache.dragWatchers.last = thePageX;
                            } else if (cache.dragWatchers.last < thePageX) {
                                if (cache.dragWatchers.state !== 'right') {
                                    cache.dragWatchers.state = 'right';
                                    cache.dragWatchers.hold = thePageX;
                                }
                                cache.dragWatchers.last = thePageX;
                            }
                            if (openingLeft) {
                                // Pulling too far to the right
                                if (settings.maxPosition < absoluteTranslation) {
                                    diff = (absoluteTranslation - settings.maxPosition) * settings.resistance;
                                    translateTo = whileDragX - diff;
                                }
                                cache.simpleStates = {
                                    opening: 'left',
                                    towards: cache.dragWatchers.state,
                                    hyperExtending: settings.maxPosition < absoluteTranslation,
                                    halfway: absoluteTranslation > (settings.maxPosition / 2),
                                    flick: Math.abs(cache.dragWatchers.current - cache.dragWatchers.hold) > settings.flickThreshold,
                                    translation: {
                                        absolute: absoluteTranslation,
                                        relative: whileDragX,
                                        sinceDirectionChange: (cache.dragWatchers.current - cache.dragWatchers.hold),
                                        percentage: (absoluteTranslation / settings.maxPosition) * 100
                                    }
                                };
                            } else {
                                // Pulling too far to the left
                                if (settings.minPosition > absoluteTranslation) {
                                    diff = (absoluteTranslation - settings.minPosition) * settings.resistance;
                                    translateTo = whileDragX - diff;
                                }
                                cache.simpleStates = {
                                    opening: 'right',
                                    towards: cache.dragWatchers.state,
                                    hyperExtending: settings.minPosition > absoluteTranslation,
                                    halfway: absoluteTranslation < (settings.minPosition / 2),
                                    flick: Math.abs(cache.dragWatchers.current - cache.dragWatchers.hold) > settings.flickThreshold,
                                    translation: {
                                        absolute: absoluteTranslation,
                                        relative: whileDragX,
                                        sinceDirectionChange: (cache.dragWatchers.current - cache.dragWatchers.hold),
                                        percentage: (absoluteTranslation / settings.minPosition) * 100
                                    }
                                };
                            }
                            action.translate.x(translateTo + translated);
                        }
                    },
                    endDrag: function (e) {
                        if (cache.isDragging) {
                            utils.dispatchEvent('end');
                            var translated = action.translate.get.matrix(4);

                            // Tap Close
                            if (cache.dragWatchers.current === 0 && translated !== 0 && settings.tapToClose) {
                                utils.dispatchEvent('close');
                                utils.events.prevent(e);
                                action.translate.easeTo(0);
                                cache.isDragging = false;
                                cache.startDragX = 0;
                                return;
                            }

                            // Revealing Left
                            if (cache.simpleStates.opening === 'left') {
                                // Halfway, Flicking, or Too Far Out
                                if ((cache.simpleStates.halfway || cache.simpleStates.hyperExtending || cache.simpleStates.flick)) {
                                    if (cache.simpleStates.flick && cache.simpleStates.towards === 'left') { // Flicking Closed
                                        action.translate.easeTo(0);
                                    } else if (
                                        (cache.simpleStates.flick && cache.simpleStates.towards === 'right') || // Flicking Open OR
                                        (cache.simpleStates.halfway || cache.simpleStates.hyperExtending) // At least halfway open OR hyperextending
                                    ) {
                                        action.translate.easeTo(settings.maxPosition); // Open Left
                                    }
                                } else {
                                    action.translate.easeTo(0); // Close Left
                                }
                                // Revealing Right
                            } else if (cache.simpleStates.opening === 'right') {
                                // Halfway, Flicking, or Too Far Out
                                if ((cache.simpleStates.halfway || cache.simpleStates.hyperExtending || cache.simpleStates.flick)) {
                                    if (cache.simpleStates.flick && cache.simpleStates.towards === 'right') { // Flicking Closed
                                        action.translate.easeTo(0);
                                    } else if (
                                        (cache.simpleStates.flick && cache.simpleStates.towards === 'left') || // Flicking Open OR
                                        (cache.simpleStates.halfway || cache.simpleStates.hyperExtending) // At least halfway open OR hyperextending
                                    ) {
                                        action.translate.easeTo(settings.minPosition); // Open Right
                                    }
                                } else {
                                    action.translate.easeTo(0); // Close Right
                                }
                            }
                            cache.isDragging = false;
                            cache.startDragX = utils.page('X', e);
                        }
                    }
                }
            },
            init = function (opts) {
                if (opts.element) {
                    utils.deepExtend(settings, opts);
                    cache.vendor = utils.vendor();
                    action.drag.listen();
                }
            };
            /*
             * Public
             */
            this.open = function (side) {
                utils.dispatchEvent('open');
                utils.klass.remove(doc.body, 'snapjs-expand-left');
                utils.klass.remove(doc.body, 'snapjs-expand-right');

                if (side === 'left') {
                    cache.simpleStates.opening = 'left';
                    cache.simpleStates.towards = 'right';
                    utils.klass.add(doc.body, 'snapjs-left');
                    utils.klass.remove(doc.body, 'snapjs-right');
                    action.translate.easeTo(settings.maxPosition);
                } else if (side === 'right') {
                    cache.simpleStates.opening = 'right';
                    cache.simpleStates.towards = 'left';
                    utils.klass.remove(doc.body, 'snapjs-left');
                    utils.klass.add(doc.body, 'snapjs-right');
                    action.translate.easeTo(settings.minPosition);
                }
            };
            this.close = function () {
                utils.dispatchEvent('close');
                action.translate.easeTo(0);
            };
            this.expand = function (side) {
                var to = win.innerWidth || doc.documentElement.clientWidth;

                if (side === 'left') {
                    utils.dispatchEvent('expandLeft');
                    utils.klass.add(doc.body, 'snapjs-expand-left');
                    utils.klass.remove(doc.body, 'snapjs-expand-right');
                } else {
                    utils.dispatchEvent('expandRight');
                    utils.klass.add(doc.body, 'snapjs-expand-right');
                    utils.klass.remove(doc.body, 'snapjs-expand-left');
                    to *= -1;
                }
                action.translate.easeTo(to);
            };

            this.on = function (evt, fn) {
                eventList[evt] = fn;
                return this;
            };
            this.off = function (evt) {
                if (eventList[evt]) {
                    eventList[evt] = false;
                }
            };

            this.enable = function () {
                utils.dispatchEvent('enable');
                action.drag.listen();
            };
            this.disable = function () {
                utils.dispatchEvent('disable');
                action.drag.stopListening();
            };

            this.settings = function (opts) {
                utils.deepExtend(settings, opts);
            };

            this.state = function () {
                var state,
                    fromLeft = action.translate.get.matrix(4);
                if (fromLeft === settings.maxPosition) {
                    state = 'left';
                } else if (fromLeft === settings.minPosition) {
                    state = 'right';
                } else {
                    state = 'closed';
                }
                return {
                    state: state,
                    info: cache.simpleStates
                };
            };
            init(userOpts);
        };
        if ((typeof module !== 'undefined') && module.exports) {
            module.exports = Snap;
        }
        if (typeof ender === 'undefined') {
            this.Snap = Snap;
        }
        if ((typeof define === "function") && define.amd) {
            define("snap", [], function () {
                return Snap;
            });
        }
    }).call(this, window, document);
}(jQuery));// JavaScript Document

//(function ($) {
//    /*
//     * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
//     *
//     * @codingstandard ftlabs-jsv2
//     * @copyright The Financial Times Limited [All Rights Reserved]
//     * @license MIT License (see LICENSE.txt)
//     */

//    !function () { "use strict"; function t(e, o) { function i(t, e) { return function () { return t.apply(e, arguments) } } var r; if (o = o || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = o.touchBoundary || 10, this.layer = e, this.tapDelay = o.tapDelay || 200, this.tapTimeout = o.tapTimeout || 700, !t.notNeeded(e)) { for (var a = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], c = this, s = 0, u = a.length; u > s; s++) c[a[s]] = i(c[a[s]], c); n && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function (t, n, o) { var i = Node.prototype.removeEventListener; "click" === t ? i.call(e, t, n.hijacked || n, o) : i.call(e, t, n, o) }, e.addEventListener = function (t, n, o) { var i = Node.prototype.addEventListener; "click" === t ? i.call(e, t, n.hijacked || (n.hijacked = function (t) { t.propagationStopped || n(t) }), o) : i.call(e, t, n, o) }), "function" == typeof e.onclick && (r = e.onclick, e.addEventListener("click", function (t) { r(t) }, !1), e.onclick = null) } } var e = navigator.userAgent.indexOf("Windows Phone") >= 0, n = navigator.userAgent.indexOf("Android") > 0 && !e, o = /iP(ad|hone|od)/.test(navigator.userAgent) && !e, i = o && /OS 4_\d(_\d)?/.test(navigator.userAgent), r = o && /OS [6-7]_\d/.test(navigator.userAgent), a = navigator.userAgent.indexOf("BB10") > 0; t.prototype.needsClick = function (t) { switch (t.nodeName.toLowerCase()) { case "button": case "select": case "textarea": if (t.disabled) return !0; break; case "input": if (o && "file" === t.type || t.disabled) return !0; break; case "label": case "iframe": case "video": return !0 } return /\bneedsclick\b/.test(t.className) }, t.prototype.needsFocus = function (t) { switch (t.nodeName.toLowerCase()) { case "textarea": return !0; case "select": return !n; case "input": switch (t.type) { case "button": case "checkbox": case "file": case "image": case "radio": case "submit": return !1 } return !t.disabled && !t.readOnly; default: return /\bneedsfocus\b/.test(t.className) } }, t.prototype.sendClick = function (t, e) { var n, o; document.activeElement && document.activeElement !== t && document.activeElement.blur(), o = e.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n) }, t.prototype.determineEventType = function (t) { return n && "select" === t.tagName.toLowerCase() ? "mousedown" : "click" }, t.prototype.focus = function (t) { var e; o && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus() }, t.prototype.updateScrollParent = function (t) { var e, n; if (e = t.fastClickScrollParent, !e || !e.contains(t)) { n = t; do { if (n.scrollHeight > n.offsetHeight) { e = n, t.fastClickScrollParent = n; break } n = n.parentElement } while (n) } e && (e.fastClickLastScrollTop = e.scrollTop) }, t.prototype.getTargetElementFromEventTarget = function (t) { return t.nodeType === Node.TEXT_NODE ? t.parentNode : t }, t.prototype.onTouchStart = function (t) { var e, n, r; if (t.targetTouches.length > 1) return !0; if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], o) { if (r = window.getSelection(), r.rangeCount && !r.isCollapsed) return !0; if (!i) { if (n.identifier && n.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1; this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e) } } return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0 }, t.prototype.touchHasMoved = function (t) { var e = t.changedTouches[0], n = this.touchBoundary; return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n ? !0 : !1 }, t.prototype.onTouchMove = function (t) { return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0 }, t.prototype.findControl = function (t) { return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea") }, t.prototype.onTouchEnd = function (t) { var e, a, c, s, u, l = this.targetElement; if (!this.trackingClick) return !0; if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0; if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0; if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, a = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, r && (u = t.changedTouches[0], l = document.elementFromPoint(u.pageX - window.pageXOffset, u.pageY - window.pageYOffset) || l, l.fastClickScrollParent = this.targetElement.fastClickScrollParent), c = l.tagName.toLowerCase(), "label" === c) { if (e = this.findControl(l)) { if (this.focus(l), n) return !1; l = e } } else if (this.needsFocus(l)) return t.timeStamp - a > 100 || o && window.top !== window && "input" === c ? (this.targetElement = null, !1) : (this.focus(l), this.sendClick(l, t), o && "select" === c || (this.targetElement = null, t.preventDefault()), !1); return o && !i && (s = l.fastClickScrollParent, s && s.fastClickLastScrollTop !== s.scrollTop) ? !0 : (this.needsClick(l) || (t.preventDefault(), this.sendClick(l, t)), !1) }, t.prototype.onTouchCancel = function () { this.trackingClick = !1, this.targetElement = null }, t.prototype.onMouse = function (t) { return this.targetElement ? t.forwardedTouchEvent ? !0 : t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1) : !0 : !0 }, t.prototype.onClick = function (t) { var e; return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail ? !0 : (e = this.onMouse(t), e || (this.targetElement = null), e) }, t.prototype.destroy = function () { var t = this.layer; n && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1) }, t.notNeeded = function (t) { var e, o, i, r; if ("undefined" == typeof window.ontouchstart) return !0; if (o = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) { if (!n) return !0; if (e = document.querySelector("meta[name=viewport]")) { if (-1 !== e.content.indexOf("user-scalable=no")) return !0; if (o > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0 } } if (a && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), i[1] >= 10 && i[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) { if (-1 !== e.content.indexOf("user-scalable=no")) return !0; if (document.documentElement.scrollWidth <= window.outerWidth) return !0 } return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction ? !0 : (r = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], r >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === t.style.touchAction || "manipulation" === t.style.touchAction ? !0 : !1) }, t.attach = function (e, n) { return new t(e, n) }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () { return t }) : "undefined" != typeof module && module.exports ? (module.exports = t.attach, module.exports.FastClick = t) : window.FastClick = t }();
//}(jQuery));
















