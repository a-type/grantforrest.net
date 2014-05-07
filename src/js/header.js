var headerHeight = 320,
    userScrolled = false,
    lastScrollTop = 0,
    scrollingUp = false;

$(window).load(function() {
    
    var theWindow = $(window);
    var header = $("#header");
    headerHeight = theWindow.innerHeight() * 0.95;
    
    function resizeBg() {
        var mq = window.matchMedia("(min-width: 40em)");
        if (mq.matches) {
            $('.fullscreen').each(function (index, element) {
                $(this).height(theWindow.innerHeight());
            });
            $("#sectionBuffer").height(0);
        } else {
            $(".fit-image").each(function (index, element){
                var aspectRatio = $(this).width() / $(this).height();
                if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
                    $(this).height(theWindow.height());
                    $(this).width(aspectRatio * theWindow.height());
                } else {
                    $(this).height(aspectRatio / theWindow.width());
                    $(this).width(theWindow.width());
                }
                $(this).css("margin-left", 0);
            });
            $('.fullscreen').each(function (index, element) {
                $(this).height(theWindow.innerHeight() * 0.95);
            });
            headerHeight = header.outerHeight();
            $("#sectionBuffer").height(headerHeight);
        }
    }

    theWindow.resize(resizeBg).trigger("resize");
    
    var mq = window.matchMedia("(min-width: 40em)");
    if (!mq.matches) {
        $("#sectionBuffer").height(headerHeight);
        $("#blackbar").css("top", headerHeight);
    }
    
    function floatHeader() {
        var mq = window.matchMedia("(min-width: 40em)");
        if (mq.matches) {

        } else {
            var scrollTop = theWindow.scrollTop();
            if (scrollTop > lastScrollTop)
                scrollingUp = false;
            else if (scrollTop < lastScrollTop)
                scrollingUp = true;
            if (scrollTop > 0) {
                userScrolled = true;
                //$(".fixed-header").addClass("affix");
                var min = $(window).height() > 320 ? 160 : 40;
                min = scrollTop > 1200 && !scrollingUp ? 0 : min;
                var headerCollapsedHeight = Math.max(headerHeight - scrollTop, min);
                header.height(headerCollapsedHeight); //ANIMATE HEIGHT
                //header.animate({height: headerCollapsedHeight}, 500);
                $("#blackbar").css("top", headerCollapsedHeight);
                //header.stop().animate({ height: headerCollapsedHeight }, 10);
                //$("#sectionBuffer").animate({ height: headerHeight }, 100);
                $(".fit-image").each(function (index, element){
                    var aspectRatio = $(this).width() / $(this).height();
                    if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
                        $(this).height(theWindow.height());
                        $(this).width(aspectRatio * theWindow.height());
                    } else {
                        $(this).height(aspectRatio / theWindow.width());
                        $(this).width(theWindow.width());
                    }
                    $(this).css("margin-left", 0);
                });
            } else {
                //$(".fixed-header").removeClass("affix");
                header.height(headerHeight);
                $("#blackbar").css("top", headerHeight);
            }
            lastScrollTop = scrollTop;
        }
    } 
    setInterval(floatHeader, 20);
});