$(document).ready(function() {
    // Open or close heder buttons list on small screens
    $(".hamburger-icon").click(function(event) {
        event.stopPropagation();
        $(".header-buttons").toggleClass("show");
    });

    // Close heder buttons list when click outside
    $(window).click(function() {
        $(".header-buttons").removeClass("show");
    });

    // Handle event when click on heart icon
    $('.events-btn.heart').click(function() {
        if ( $(this).hasClass('favorite') ) {
            $(this).removeClass('favorite');
            $('.message-field').hide();
        }
        else {
            $(this).addClass('favorite');
            $('.message-field').hide();
            $(this).prev().show();
        }
    });

    // Handle event when click on comment icon
    $('.events-btn.comment').click(function() {
        if ( $(this).prev().is(':visible') ) {
            $('.message-field').hide();
        }
        else {
            $('.message-field').hide();
            $(this).prev().show();
        }
    });

    /* Convert browser select to bootstrap select */
    $('select').selectpicker();
});
