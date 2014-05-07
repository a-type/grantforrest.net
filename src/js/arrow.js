function scrollDown() {
    if ($(window).scrollTop() < 100) {
        $.scrollTo(headerHeight - 160, 1000, {axis: 'y'});
    }
}

function dropFocus() {
    $("#arrowLink").blur();
}

$(window).load(function() {
    function pulseArrow() {}
    pulseArrow = function() {
        if (userScrolled) {
            $("#arrow").stop().animate({opacity: 0}, 1000);
            return;
        }
        else if ($("#arrow").css("opacity") < 1) {
            $("#arrow").stop().animate({opacity: 1}, 2000, pulseArrow);
        } else {
            $("#arrow").stop().animate({opacity: 0}, 2000, pulseArrow);
        }
        //$.scrollTo(0, 2000, {easing: 'elasout', axis: 'y'});
    }
    pulseArrow();  
});
