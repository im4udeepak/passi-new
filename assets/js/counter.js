(function ($) {
    'use strict';
    // Counter To Count Number Visit
    let a = 0;
    $(window).scroll(function () {
        if ($('#counter')) {
            let oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('h4.counter').each(function () {
                    let $this = $(this);
                    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                a = 1;
            }
        }
    });
})(jQuery);