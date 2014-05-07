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
    var pageContent = $(eventObject.currentTarget).siblings(".portfolio-content")[0];
    if ($(pageContent).is("a")) {
        var target = $(pageContent).attr("href");
        window.open(target, "_blank");
    } else {
        var content = $(pageContent).clone();
        content.removeClass("hidden");
        var modalContent = $("#portfolio-modal-content");
        modalContent.empty();
        modalContent.append(content);
        modalContent.find(".article-img").click(showModalImg);
        modalContent.find(".article-img-half").click(showModalImg);
        var modalHeader = $("#portfolio-modal-header");
        modalHeader.text($(eventObject).find("h2").text());
        $("#portfolio-modal").css("opacity", 0.0).show().animate({opacity: 1.0}, 400);
    }
}

$(window).load(function() {
    $("#modal-img-overlay").click(
        function() {
            $(this).animate({opacity: 0.0}, 200, "swing", function() {$(this).hide() });
        }
    );
    $(".jumbo-link").click(showPortfolioContent);
    $("#portfolio-modal-dismiss").click(function() { $("#portfolio-modal").animate({opacity: 0.0}, 200, "swing", function() {$(this).hide()}); });
});