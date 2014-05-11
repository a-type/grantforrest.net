function showModalImg(eventObject) {
    var imgPath = eventObject.currentTarget.src;
    var img = $("#modal-img");
    var w, h;
    if (eventObject.currentTarget.naturalHeight < eventObject.currentTarget.naturalWidth) {
        w = Math.min($("#modal-img-overlay").width(), eventObject.currentTarget.naturalWidth);
        h = w * (eventObject.currentTarget.naturalHeight / eventObject.currentTarget.naturalWidth);
    } else {
        h = Math.min($("#modal-img-overlay").height(), eventObject.currentTarget.naturalHeight);
        w = h * (eventObject.currentTarget.naturalWidth / eventObject.currentTarget.naturalHeight);
    }
    img.attr("src", imgPath);
    img.css("width", w);
    img.css("height", h);
    img.css("margin-top", h / -2);
    img.css("margin-left", w / -2);
    $("#modal-img-overlay").css("opacity", 0.0).show().animate({opacity: 1.0}, 200);
}

function showPortfolioContent(eventObject) {
    var pageContent = $(eventObject.currentTarget).siblings(".portfolio-content")[0],
        offset = $("#sectionHeaderOuter").outerHeight() + $("#sectionHeaderOuter").offset().top;;
    if ($(pageContent).is("a")) {
        var target = $(pageContent).attr("href");
        window.open(target, "_blank");
    } else {
        var top = 0;
        var mq = window.matchMedia("(min-width: 40em)");
        if (mq.matches) {
            top = Math.max(0, $(window).scrollTop() - offset);
            $("#portfolio-modal-whiteout").css("top", offset);
        } else {
            top = Math.max(offset, $(window).scrollTop() + $("#blackbar").outerHeight() + parseInt($("#blackbar").css("top").split("px")[0]));
        }
        
        var content = $(pageContent).clone();
        content.removeClass("hidden");
        var modalContent = $("#portfolio-modal-content");
        modalContent.empty();
        modalContent.append(content);
        modalContent.find(".article-img").click(showModalImg);
        modalContent.find(".article-img-half").click(showModalImg);
        var modalHeader = $("#portfolio-modal-header");
        var contentHeader = $(eventObject.currentTarget).find(".article-jumbo").find("h2").text();
        modalHeader.text(contentHeader);
        $("#portfolio-modal-whiteout").css({opacity: 0.0, height: $("body").height()}).show().animate({opacity: 1.0}, 400);
        $("#portfolio-modal").css("top", top);
    }
}

function hidePortfolioContent(eventObject) {
    $("#portfolio-modal-whiteout").animate({opacity: 0.0}, 200, "swing", function() {$(this).hide()});
}

function initModal() {
    $("#modal-img-overlay").click(
        function() {
            $(this).animate({opacity: 0.0}, 200, "swing", function() {$(this).hide() });
        }
    );
    $(".jumbo-link").click(showPortfolioContent);
    $("#portfolio-modal-dismiss").click(hidePortfolioContent);
}