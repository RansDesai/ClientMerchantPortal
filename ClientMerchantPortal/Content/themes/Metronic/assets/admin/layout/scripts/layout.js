/**
Core script to handle the entire theme and core functions
**/
var Layout = function () {

    var layoutImgPath = '/Content/themes/Metronic/assets/admin/layout/img/';

    var layoutCssPath = '/Content/themes/Metronic/assets/admin/layout/css/';

    var resBreakpointMd = Metronic.getResponsiveBreakpoint('md');

    var allowHoverOver = true;

    var selectedMenuItemWhenClosed;

    //* BEGIN:CORE HANDLERS *//
    // this function handles responsive layout on screen size resize or mobile device rotate.
     
    // Set proper height for sidebar and content. The content and sidebar height must be synced always.
    var handleSidebarAndContentHeight = function () {
        var content = $('.page-content');
        var sidebar = $('.page-sidebar'); 
        var sidebarScroll = $('#sidebarScroll');
        var slimScrollDiv = $('.slimScrollDiv');
        var body = $('body');
        var height;
        var sidebarHeight;

        //if (body.hasClass("page-sidebar-closed")) {
        //    $('.searchIcons').addClass('hide');
        //}
        //else {
        //    $('.searchIcons').removeClass('hide');
        //}

        if (body.hasClass("page-footer-fixed") === true && body.hasClass("page-sidebar-fixed") === false) {
            var available_height = Metronic.getViewPort().height - $('.page-footer').outerHeight() - $('.page-header').outerHeight();
            if (content.height() < available_height) {
                content.attr('style', 'min-height:' + available_height + 'px');
            }
        } else {
            if (body.hasClass('page-sidebar-fixed')) {
                height = _calculateFixedSidebarViewportHeight();
                if (body.hasClass('page-footer-fixed') === false) {
                    height = height - $('.page-footer').outerHeight();
                }
            } else {
                var headerHeight = $('.page-header').outerHeight();
                var footerHeight = $('.page-footer').outerHeight();

                if (Metronic.getViewPort().width < resBreakpointMd) {
                    height = Metronic.getViewPort().height - headerHeight - footerHeight;
                } else {
                    height = sidebar.height() + 20;
                }

                if ((height + headerHeight + footerHeight) <= Metronic.getViewPort().height) {
                    height = Metronic.getViewPort().height - headerHeight - footerHeight - 20; //oz hack added minus 40!!!! //tom hack to -20px 19/10/15
                }
            }
            content.attr('style', 'min-height:' + height + 'px');
            //sidebarHeight = _calculateFixedSidebarViewportHeight() - 20;
            sidebarHeight = _calculateFixedSidebarViewportHeight() + 20;
            var sidebarScrollHeight = sidebarScroll.height();
            if ($.cookie && $.cookie('sidebar_closed') === '1' || $('body').hasClass('page-sidebar-closed')) {
                if (sidebarScrollHeight != sidebarHeight)
                    sidebarScroll.css({ 'position': 'relative', 'overflow': 'visible', 'width': 'auto', 'height': +sidebarHeight + 'px' });

                slimScrollDiv.css({ 'overflow': 'visible' });
                sidebar.css({ 'position': 'relative' });
            }
            else {
                if (sidebarScrollHeight != sidebarHeight)
                    sidebarScroll.css({ 'position': 'relative', 'overflow': 'hidden', 'width': 'auto', 'height': +sidebarHeight + 'px' });

                slimScrollDiv.css({ 'overflow': 'hidden' });
                sidebar.css({ 'position': 'fixed' });
            }
        }
    };

    // Handle sidebar menu links
    var handleSidebarMenuActiveLink = function (mode, el) {
        var url = location.toString().toLowerCase();
        var urlLast2 = url.slice(-2);

        //Oz set dashboard on load to active
        //menu.find("li > a").each(function () {
        //    var hrefPath = $(this).attr("href").toLowerCase();
        //    if (urlLast2 == hrefPath) {
        //        $(this).click();
        //        return;
        //    }
        //});

        var menu = $('.page-sidebar-menu');

        if (mode === 'click' || mode === 'set') {
            el = $(el);
        } else if (mode === 'match') {
            menu.find("li > a").each(function () {
                var path = $(this).attr("href").toLowerCase();
                // url match condition         
                if (path.length > 1 && url.substr(1, path.length - 1) == path.substr(1)) {
                    el = $(this);
                    return;
                }
            });
        }

        if (!el || el.length == 0) {
            return;
        }

        //console.log('el', el);
        if (el && el.attr('href') && (el.attr('href').toLowerCase() === 'javascript:;' || el.attr('href').toLowerCase() === '#')) {
            return;
        }

        var slideSpeed = parseInt(menu.data("slide-speed"));
        var keepExpand = menu.data("keep-expanded");

        // disable active states
        menu.find('li.active').removeClass('active');
        menu.find('li > a > .selected').remove();

        if (menu.hasClass('page-sidebar-menu-hover-submenu') === false) {
            menu.find('li.open').each(function () {
                if ($(this).children('.sub-menu').length === 0) {
                    $(this).removeClass('open');
                    $(this).find('> a > .arrow.open').removeClass('open');
                }
            });
        } else {
            menu.find('li.open').removeClass('open');
        }

        el.parents('li').each(function () {
            var hasSubMenu = $(this).next().hasClass('sub-menu');
            $(this).addClass('active');
            $(this).find('> a > span.arrow').addClass('open');

            if ($(this).parent('ul.page-sidebar-menu').length === 1) {
                $(this).find('> a').append('<span class="selected"></span>');
            }

            if ($(this).children('ul.sub-menu').length === 1) {
                $(this).addClass('open');
            }

        });

        if (mode === 'click') {
            if (Metronic.getViewPort().width < resBreakpointMd && $('.page-sidebar').hasClass("in")) { // close the menu on mobile view while laoding a page 
                $('.page-header .responsive-toggler').click();
            }
        }
    };

    // Handle sidebar menu
    var handleSidebarMenu = function () {

        // handle sidebar link click
        jQuery('.page-sidebar').on('click', 'li > a', function (e) {

            if ($('.page-sidebar-menu').hasClass('page-sidebar-menu-closed')) {
                selectedMenuItemWhenClosed = $(this);
                return;
            }

            var hasSubMenu = $(this).next().hasClass('sub-menu');
            var parent = $(this).parent().parent();

            if (Metronic.getViewPort().width >= resBreakpointMd && $(this).parents('.page-sidebar-menu-hover-submenu').length === 1) { // exit of hover sidebar menu
                return;
            }

            if (hasSubMenu === false) {
                if (Metronic.getViewPort().width < resBreakpointMd && $('.page-sidebar').hasClass("in")) { // close the menu on mobile view while laoding a page 
                    $('.page-header .responsive-toggler').click();
                }
                return;
            }

            if ($(this).next().hasClass('sub-menu always-open')) {
                return;
            }

            var the = $(this);
            var menu = $('.page-sidebar-menu');
            var sub = jQuery(this).next();

            var autoScroll = menu.data("auto-scroll");
            var slideSpeed = parseInt(menu.data("slide-speed"));
            var keepExpand = menu.data("keep-expanded");

            if (keepExpand !== true) {
                parent.children('li.open').children('a').children('.arrow').removeClass('open');
                parent.children('li.open').children('.sub-menu:not(.always-open)').slideUp(slideSpeed);
                parent.children('li.open').removeClass('open');
            }

            var slideOffeset = -200;

            if (sub.is(":visible")) {
                jQuery('.arrow', jQuery(this)).removeClass("open");
                jQuery(this).parent().removeClass("open");
                handleSidebarAndContentHeight();
                //sub.slideUp(slideSpeed, function () {
                //    if (autoScroll === true && $('body').hasClass('page-sidebar-closed') === false) {
                //        if ($('body').hasClass('page-sidebar-fixed')) {
                //            menu.slimScroll({
                //                'scrollTo': (the.position()).top
                //            });
                //        } else {
                //            Metronic.scrollTo(the, slideOffeset);
                //        }
                //    }
                //    
                //});
            } else if (hasSubMenu) {
                jQuery('.arrow', jQuery(this)).addClass("open");
                jQuery(this).parent().addClass("open");
                sub.slideDown(slideSpeed, function () {
                    if (autoScroll === true && $('body').hasClass('page-sidebar-closed') === false) {
                        if ($('body').hasClass('page-sidebar-fixed')) {
                            //menu.slimScroll({
                            //    'scrollTo': (the.position()).top
                            //});
                        } else {
                            Metronic.scrollTo(the, slideOffeset);
                        }
                    }
                    handleSidebarAndContentHeight();
                });
            }

            e.preventDefault();
        });

        // handle submenu links within sidebar menu
        jQuery('.page-sidebar').on('touchstart', 'li > ul > li > a', function (e) {

            if ($('body').hasClass('page-sidebar-closed')) {
                localStorage.setItem('MinMenuTouch', true);
                //$('li.open').children('ul.sub-menu').attr("style", "display: none !Important");
                //$('li.open').removeClass('open');
            }
            else {
                localStorage.setItem('MinMenuTouch', false);
            }
        });

        // handle ajax links within sidebar menu
        jQuery('.page-sidebar').on('click', ' li > a.ajaxify', function (e) {
            e.preventDefault();
            Metronic.scrollTop();

            var url = $(this).attr("href");
            var menuContainer = jQuery('.page-sidebar ul');
            var pageContent = $('.page-content');
            var pageContentBody = $('.page-content .page-content-body');

            menuContainer.children('li.active').removeClass('active');
            menuContainer.children('arrow.open').removeClass('open');

            $(this).parents('li').each(function () {
                $(this).addClass('active');
                $(this).children('a > span.arrow').addClass('open');
            });
            $(this).parents('li').addClass('active');

            if (Metronic.getViewPort().width < resBreakpointMd && $('.page-sidebar').hasClass("in")) { // close the menu on mobile view while laoding a page 
                $('.page-header .responsive-toggler').click();
            }

            Metronic.startPageLoading();

            var the = $(this);

            $.ajax({
                type: "GET",
                cache: false,
                url: url,
                dataType: "html",
                success: function (res) {
                    if (the.parents('li.open').length === 0) {
                        $('.page-sidebar-menu > li.open > a').click();
                    }

                    Metronic.stopPageLoading();
                    pageContentBody.html(res);
                    Layout.fixContentHeight(); // fix content height
                    Metronic.initAjax(); // initialize core stuff
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    Metronic.stopPageLoading();
                    pageContentBody.html('<h4>Could not load the requested content.</h4>');
                }
            });
        });

        // handle ajax link within main content
        jQuery('.page-content').on('click', '.ajaxify', function (e) {
            e.preventDefault();
            Metronic.scrollTop();

            var url = $(this).attr("href");
            var pageContent = $('.page-content');
            var pageContentBody = $('.page-content .page-content-body');

            Metronic.startPageLoading();

            if (Metronic.getViewPort().width < resBreakpointMd && $('.page-sidebar').hasClass("in")) { // close the menu on mobile view while laoding a page 
                $('.page-header .responsive-toggler').click();
            }

            $.ajax({
                type: "GET",
                cache: false,
                url: url,
                dataType: "html",
                success: function (res) {
                    Metronic.stopPageLoading();
                    pageContentBody.html(res);
                    Layout.fixContentHeight(); // fix content height
                    Metronic.initAjax(); // initialize core stuff
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    pageContentBody.html('<h4>Could not load the requested content.</h4>');
                    Metronic.stopPageLoading();
                }
            });
        });

        // handle sidebar hover effect        
        handleFixedSidebarHoverEffect();

        // handle the search bar close
        $('.page-sidebar').on('click', '.sidebar-search .remove', function (e) {
            e.preventDefault();
            $('.sidebar-search').removeClass("open");
        });

        // handle the search query submit on enter press
        $('.page-sidebar .sidebar-search').on('keypress', 'input.form-control', function (e) {
            if (e.which == 13) {
                $('.sidebar-search').submit();
                return false; //<---- Add this line
            }
        });

        // handle the search submit(for sidebar search and responsive mode of the header search)
        $('.sidebar-search .submit').on('click', function (e) {
            e.preventDefault(); 
            if ($('body').hasClass("page-sidebar-closed")) {
                if ($('.sidebar-search').hasClass('open') === false) {
                    if ($('.page-sidebar-fixed').length === 1) {
                        $('.page-sidebar .sidebar-toggler').click(); //trigger sidebar toggle button
                    }
                    //$('.sidebar-search').addClass("open"); RESPONSIVE MENU JUST REDIRECTS TO QUICKSEARCH
                } else {
                    $('.sidebar-search').submit();
                }
            } else {
                $('.sidebar-search').submit();
            }
        });

        // handle close on body click
        if ($('.sidebar-search').length !== 0) {
            $('.sidebar-search .input-group').on('click', function (e) {
                e.stopPropagation();
            });

            $('body').on('click', function () {
                if ($('.sidebar-search').hasClass('open')) {
                    $('.sidebar-search').removeClass("open");
                }
            });
        }
    };

    // Helper function to calculate sidebar height for fixed sidebar layout.
    var _calculateFixedSidebarViewportHeight = function () {
        var sidebarHeight = Metronic.getViewPort().height - $('.page-header').outerHeight();
        if ($('body').hasClass("page-footer-fixed")) {
            sidebarHeight = sidebarHeight - $('.page-footer').outerHeight();
        }

        return sidebarHeight;
    };

    // Handles fixed sidebar
    var handleFixedSidebar = function () {
        var menu = $('.page-sidebar-menu');

        Metronic.destroySlimScroll(menu);

        if ($('.page-sidebar-fixed').length === 0) {
            handleSidebarAndContentHeight();
            return;
        }

        if (Metronic.getViewPort().width >= resBreakpointMd) {
            menu.attr("data-height", _calculateFixedSidebarViewportHeight());
            Metronic.initSlimScroll(menu);
            handleSidebarAndContentHeight();
        }
    };

    // Handles sidebar toggler to close/hide the sidebar.
    var handleFixedSidebarHoverEffect = function () {
        var body = $('body');
        var hoverDelay,
            pageSidebar = $('.page-sidebar');

            // DW - NEW  RNP-4821
        if (body.hasClass('page-sidebar-fixed')) {
            $('.page-sidebar').on('click', function () {
                if (body.hasClass('page-sidebar-closed')) {
                    if ($('.page-sidebar-menu').hasClass('page-sidebar-menu-closed')) {
                        body.find('.page-sidebar-menu').removeClass('page-sidebar-menu-closed');
                        $('.page-sidebar').addClass("temp-class");
                        $('.searchIcons').removeClass('hide'); //Oz add to handle search icons

                        if (selectedMenuItemWhenClosed) {
                            selectedMenuItemWhenClosed.click();
                            selectedMenuItemWhenClosed = null;
                        }
                    }
                }
            }).on('mouseleave', function () {
                if (body.hasClass('page-sidebar-closed')) {
                    if (!$('.page-sidebar-menu').hasClass('page-sidebar-menu-closed') && !$(".quick_search_input_group input").is(":focus")) {
                        
                        //Close all opened menu items 
                        $('.page-sidebar-menu').children('li.open').children('a').children('.arrow').removeClass('open');
                        $('.page-sidebar-menu').children('li.open').children('.sub-menu:not(.always-open)').slideUp("300");
                        //$('.page-sidebar-menu').children('li.open').removeClass('open');
                        //$('.page-sidebar-menu').children('li.active').removeClass('active');

                        //Close all opened sub-menu items 
                        $('.sub-menu').children('li.open').children('a').children('.arrow').removeClass('open');
                        $('.sub-menu').children('li.open').children('.sub-menu:not(.always-open)').slideUp("300");
                        //$('.sub-menu').children('li.open').removeClass('open');
                        //$('.sub-menu').children('li.active').removeClass('active');

                        //Hide search icons
                        $('.searchIcons').addClass('hide'); //DW - show while using fixed sidebar
                        body.find('.page-sidebar-menu').addClass('page-sidebar-menu-closed');

                        //Remove class that sets width to 235
                        $('.page-sidebar').removeClass("temp-class");

                        selectedMenuItemWhenClosed = null;
                    }
                }
            });
        }

        // DW - OLD CODE FOR FIXED LAYOUT
        //if (body.hasClass('page-sidebar-fixed')) {
        //    $('.page-sidebar').on('mouseenter', function () {
        //        if (body.hasClass('page-sidebar-closed') && body.hasClass('page-sidebar-fixed')) {

        //            hoverDelay = setTimeout(function () {
        //                body.find('.page-sidebar-menu').removeClass('page-sidebar-menu-closed');
        //                $('.searchIcons').removeClass('hide'); //Oz add to handle search icons
        //            }, 500);

        //        }
        //    }).on('mouseleave', function () {
        //        if (body.hasClass('page-sidebar-closed') && body.hasClass('page-sidebar-fixed')) {

        //            $('.searchIcons').addClass('hide'); //DW - show while using fixed sidebar
        //            body.find('.page-sidebar-menu').addClass('page-sidebar-menu-closed');

        //            clearTimeout(hoverDelay);
        //        }
        //    });
        //}
    };

    // Handles sidebar toggler
    var handleSidebarToggler = function () {
        var body = $('body');
        if ($.cookie && $.cookie('sidebar_closed') === '1' && Metronic.getViewPort().width >= resBreakpointMd) {
            $('body').addClass('page-sidebar-closed');
            $('.page-sidebar-menu').addClass('page-sidebar-menu-closed');
        }

        // handle sidebar show/hide
        $('body').on('click', '.sidebar-toggler', function (e) {
            var sidebar = $('.page-sidebar');
            var sidebarMenu = $('.page-sidebar-menu');
            var slimScrollDiv = $('.slimScrollDiv');
            var sidebarScroll = $('#sidebarScroll');
            $(".sidebar-search", sidebar).removeClass("open");

            if (body.hasClass("page-sidebar-closed")) {
                body.removeClass("page-sidebar-closed");
                sidebarMenu.removeClass("page-sidebar-menu-closed");
                sidebar.css({ 'position': 'fixed' });
                slimScrollDiv.css({ 'overflow': 'hidden' });
                sidebarScroll.css({ 'overflow': 'hidden' });
                $('.searchIcons').removeClass('hide'); //Oz add to handle search icons
                if ($.cookie) {
                    $.cookie('sidebar_closed', '0', { expires: 30 });
                }
                if ($('#filterSection') != undefined) {
                    $('#filterSection').removeClass('no_sidebar');
                    $('#filterSection').addClass('has_sidebar');
                }
            } else {

                var slideSpeed = parseInt(sidebarMenu.data("slide-speed"));
                var keepExpand = sidebarMenu.data("keep-expanded");

                if (keepExpand !== true) {
                    sidebarMenu.children('li.open').children('a').children('.arrow').removeClass('open');
                    sidebarMenu.children('li.open').children('.sub-menu:not(.always-open)').slideUp(slideSpeed);
                    sidebarMenu.children('li.open').removeClass('open');
                }

                //DW - RNP-4821
                //Remove class that sets width to 235
                $('.page-sidebar').removeClass("temp-class");

                //DW - RNP-4821
                //Close all opened menu items 
                $('.page-sidebar-menu').children('li.open').children('a').children('.arrow').removeClass('open');
                $('.page-sidebar-menu').children('li.open').children('.sub-menu:not(.always-open)').slideUp("300");
                $('.page-sidebar-menu').children('li.open').removeClass('open');
                $('.page-sidebar-menu').children('li.active').removeClass('active');

                //DW - RNP-4821
                //Close all opened sub-menu items 
                $('.sub-menu').children('li.open').children('a').children('.arrow').removeClass('open');
                $('.sub-menu').children('li.open').children('.sub-menu:not(.always-open)').slideUp("300");
                $('.sub-menu').children('li.open').removeClass('open');
                $('.sub-menu').children('li.active').removeClass('active');

                body.addClass("page-sidebar-closed");

                sidebarMenu.addClass("page-sidebar-menu-closed");
                sidebar.css({ 'position': 'relative' });
                slimScrollDiv.css({ 'overflow': 'visible' });
                sidebarScroll.css({ 'overflow': 'visible' });
                $('.searchIcons').addClass('hide'); //Oz add to handle search icons                //DW - show while using fixed sidebar
                if (body.hasClass("page-sidebar-fixed")) {

                    //allowHoverOver = false;
                    //sidebarMenu.trigger("mouseleave");

                    //sidebarMenu.trigger("mouseenter");

                    //body.addClass("page-sidebar-closed-temp");


                    //setTimeout(function () {
                    //    body.removeClass("page-sidebar-closed-temp");
                    //}, 500);

                    //setTimeout(function () {
                    //    allowHoverOver = true;
                    //}, 2000);


                }
                if ($.cookie) {
                    $.cookie('sidebar_closed', '1', { expires: 30 });
                }
                if ($('#filterSection') != undefined) {
                    $('#filterSection').removeClass('has_sidebar');
                    $('#filterSection').addClass('no_sidebar');
                }
            }

            //setTimeout(function () { $(window).trigger('resize'); }, 500);
            $(window).trigger('resize');

        });
    };

    // Handles the horizontal menu
    var handleHorizontalMenu = function () {
        //handle tab click
        $('.page-header').on('click', '.hor-menu a[data-toggle="tab"]', function (e) {
            e.preventDefault();
            var nav = $(".hor-menu .nav");
            var active_link = nav.find('li.current');
            $('li.active', active_link).removeClass("active");
            $('.selected', active_link).remove();
            var new_link = $(this).parents('li').last();
            new_link.addClass("current");
            new_link.find("a:first").append('<span class="selected"></span>');
        });

        // handle search box expand/collapse        
        $('.page-header').on('click', '.search-form', function (e) {
            $(this).addClass("open");
            $(this).find('.form-control').focus();

            $('.page-header .search-form .form-control').on('blur', function (e) {
                $(this).closest('.search-form').removeClass("open");
                $(this).unbind("blur");
            });
        });

        // handle hor menu search form on enter press
        $('.page-header').on('keypress', '.hor-menu .search-form .form-control', function (e) {
            if (e.which == 13) {
                $(this).closest('.search-form').submit();
                return false;
            }
        });

        // handle header search button click
        $('.page-header').on('mousedown', '.search-form.open .submit', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).closest('.search-form').submit();
        });

        // handle hover dropdown menu for desktop devices only
        $('[data-hover="megamenu-dropdown"]').not('.hover-initialized').each(function () {
            $(this).dropdownHover();
            $(this).addClass('hover-initialized');
        });

        $(document).on('click', '.mega-menu-dropdown .dropdown-menu', function (e) {
            e.stopPropagation();
        });
    };

    // Handles Bootstrap Tabs.
    var handleTabs = function () {
        // fix content height on tab click
        $('body').on('shown.bs.tab', 'a[data-toggle="tab"]', function () {
            handleSidebarAndContentHeight();
        });
    };

    // Handles the go to top button at the footer
    var handleGoTop = function () {
        var offset = 300;
        var duration = 500;

        if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {  // ios supported
            $(window).bind("touchend touchcancel touchleave", function (e) {
                if ($(this).scrollTop() > offset) {
                    $('.scroll-to-top').fadeIn(duration);
                } else {
                    $('.scroll-to-top').fadeOut(duration);
                }
            });
        } else {  // general 
            $(window).scroll(function () {
                if ($(this).scrollTop() > offset) {
                    $('.scroll-to-top').fadeIn(duration);
                } else {
                    $('.scroll-to-top').fadeOut(duration);
                }
            });
        }

        $('.scroll-to-top').click(function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        });
    };

    // Hanlde 100% height elements(block, portlet, etc)
    var handle100HeightContent = function () {

        var target = $('.full-height-content');
        var height;

        height = Metronic.getViewPort().height -
            $('.page-header').outerHeight(true) -
            $('.page-footer').outerHeight(true) -
            $('.page-title').outerHeight(true) -
            $('.page-bar').outerHeight(true);

        if (target.hasClass('portlet')) {
            var portletBody = target.find('.portlet-body');

            if (Metronic.getViewPort().width < resBreakpointMd) {
                Metronic.destroySlimScroll(portletBody.find('.full-height-content-body')); // destroy slimscroll 
                return;
            }

            height = height -
                target.find('.portlet-title').outerHeight(true) -
                parseInt(target.find('.portlet-body').css('padding-top')) -
                parseInt(target.find('.portlet-body').css('padding-bottom')) - 2;

            if (target.hasClass("full-height-content-scrollable")) {
                height = height - 35;
                portletBody.find('.full-height-content-body').css('height', height);
                Metronic.initSlimScroll(portletBody.find('.full-height-content-body'));
            } else {
                portletBody.css('min-height', height);
            }
        } else {
            if (Metronic.getViewPort().width < resBreakpointMd) {
                Metronic.destroySlimScroll(target.find('.full-height-content-body')); // destroy slimscroll 
                return;
            }

            if (target.hasClass("full-height-content-scrollable")) {
                height = height - 35;
                target.find('.full-height-content-body').css('height', height);
                Metronic.initSlimScroll(target.find('.full-height-content-body'));
            } else {
                target.css('min-height', height);
            }
        }
    };
    //* END:CORE HANDLERS *//

    return {
        // Main init methods to initialize the layout
        //IMPORTANT!!!: Do not modify the core handlers call order.

        initHeader: function () {
            handleHorizontalMenu(); // handles horizontal menu    
        },

        setSidebarMenuActiveLink: function (mode, el) {
            handleSidebarMenuActiveLink(mode, el);
        },

        initSidebar: function () {
            //layout handlers
            handleFixedSidebar(); // handles fixed sidebar menu
            handleSidebarMenu(); // handles main menu
            handleSidebarToggler(); // handles sidebar hide/show

            if ($('body').hasClass("page-sidebar-closed")) {
                $('.searchIcons').addClass('hide');
            }
            else {
                $('.searchIcons').removeClass('hide');
            }

            if (Metronic.isAngularJsApp()) {
                // handleSidebarMenuActiveLink('match'); // init sidebar active links 
            }

            //Metronic.addResizeHandler(handleFixedSidebar); // reinitialize fixed sidebar on window resize
        },

        initContent: function () {
            handle100HeightContent(); // handles 100% height elements(block, portlet, etc)
            handleTabs(); // handle bootstrah tabs

            Metronic.addResizeHandler(handleSidebarAndContentHeight); // recalculate sidebar & content height on window resize
            Metronic.addResizeHandler(handle100HeightContent); // reinitialize content height on window resize 
        },

        initFooter: function () {
            handleGoTop(); //handles scroll to top functionality in the footer
        },

        init: function () {
            this.initHeader();
            this.initSidebar();
            this.initContent();
            this.initFooter();
        },

        //public function to fix the sidebar and content height accordingly
        fixContentHeight: function () {
            handleSidebarAndContentHeight();
        },

        initFixedSidebarHoverEffect: function () {
            handleFixedSidebarHoverEffect();
        },

        initFixedSidebar: function () {
            handleFixedSidebar();
        },

        getLayoutImgPath: function () {
            return Metronic.getAssetsPath() + layoutImgPath;
        },

        getLayoutCssPath: function () {
            return Metronic.getAssetsPath() + layoutCssPath;
        }
    };

}();