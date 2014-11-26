(function($, window, document) {
    $(".expand-list").click(function() {
        $(this).find(".object").slideToggle();
    });



$(document).ready(function(){


    var $root = $('html, body');
    $('a').click(function() {
        if ($.attr(this, 'href').indexOf("#") != -1 && $.attr(this, 'href') != "#") {
            $root.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 4000);
            return false;
        }
    });
});

    

    /*start animation*/
    $(window).scroll(function() {
        $('.middle-master').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideUp");
            }
        });
        $('.color-belt').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("expandOpen");
            }
        });
    });
    $(window).scroll(function() {
        $('.knowhow').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideUp");
            }
        });
    });
    $(window).scroll(function() {
        $('.bluemaster').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideLeft");
            }
        });
        $('.livein').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideRight");
            }
        });
        $('.first-second-content').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.cantmiss').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.cantmiss-2').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideRight");
            }
        });
    });
    $(window).scroll(function() {
        $('.perfectmen').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideRight");
            }
        });
        $('.testi').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideDown");
            }
        });
        $('.doctorsay').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideDown");
            }
        });
        $('.tri-work').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideDown");
            }
        });
        $('.intro').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideDown");
            }
        });
        $('.core-value').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideUp");
            }
        });
    });
    $('.arrow').mouseover(function() {
        $(this).addClass("hatch");
    });
    $('.arrow').mouseout(function() {
        $(this).removeClass("hatch");
    });
})(jQuery, window, document);
