$("#html-abbr-opt").hide();
$("#css-abbr-opt").hide();

$(function() {


    $('#show-html-abbr').on( "mouseenter", function() {
        $("#html-abbr-opt").animate({
            width: "toggle"
        });

    });

    $('#show-html-abbr').on( "mouseleave", function() {
        $("#html-abbr-opt").hide();

    });

    $('#show-css-abbr').on( "mouseenter", function() {
        $("#css-abbr-opt").animate({
            width: "toggle"
        });

    });

    $('#show-css-abbr').on( "mouseleave", function() {
        $("#css-abbr-opt").hide();

    });

});