(function ($) {
    'use strict';
    // Preloader
    $(document).ready(function () {
        $('#exampleModal').modal('show');
        function hideModal() {
            $('#exampleModal').modal('hide');
            // Call the function recursively after 5 seconds
            setTimeout(showModal, 5000);
        }

        // Function to show modal
        function showModal() {
            $('#exampleModal').modal('show');
            // Call the function to hide modal after 5 seconds
            setTimeout(hideModal, 5000);
        }

        // Initial call to show modal after 1 minute
        setTimeout(showModal, 60000);
    });
    setTimeout(function () {
        $('.preloader').addClass('hidden');
    }, 1000);
    // mobile hamburger menu
    $(".hamburger>.hamburger_btn").on('click', function () {
        $(".header .navigation").toggleClass('open');
        $(this).toggleClass('active');
    });
    // Mobile Menu
    $(".header .menu-item-has-children > a").on('click', function (e) {
        var submenu = $(this).next(".sub-menu");
        e.preventDefault();
        submenu.slideToggle(200);
    });
    // search trigger
    $(".search-trigger").on('click', function (e) {
        e.preventDefault();
        $(".search-form-wrapper").toggleClass('open');
    });
    // banner_slider
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        dotsClass: "slick-dots d-flex container",
    }).slickAnimation();
    $('.about-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        dotsClass: "slick-dots dark d-flex container",
    });
    $('.clients-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        arrows: true,
        dotsClass: "slick-dots dark d-flex container",
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
    $('.slider-one').each(function (index) {
        $(this).slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            arrows: true,
            adaptiveHeight: true,
            dotsClass: "slick-dots dark d-flex container",
        });
    });
    function openIframeModal(url, title) {
        // Set the src attribute of the iframe
        // #toolbar=0&navpanes=0&scrollbar=0
        $("#serviceModalContent").attr("src", url);
        $("#serviceModalLabel").html(title);
        // Open the modal
        $("#serviceModal").modal("show");
    }

    // Event listener for the button click
    $(".openModal").click(function () {
        // Read the data-src attribute from the button
        var iframeSrc = $(this).data("src");
        var iframeTitle = $(this).data("title");

        // Open the modal with the specified iframe source URL
        openIframeModal(iframeSrc, iframeTitle?.replaceAll("_", " "));
    });
    $(".close").click(function () {
        $("#serviceModal").modal("hide");
        openIframeModal("", "");
    });
    // Sticky Header
    var header = $(".can-sticky");
    var footer = $(".ft-sticky");
    var headerHeight = header.innerHeight();
    var FooterHeight = footer.innerHeight();

    function doSticky() {
        if (window.pageYOffset > headerHeight) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
        if (window.pageYOffset > FooterHeight) {
            footer.addClass("d-flex");
        } else {
            footer.removeClass("d-flex");
        }
    }
    doSticky();
    //On scroll events
    $(window).on('scroll', function () {
        doSticky();
    });
    if ($(".back-to-top").length) {
        $(".back-to-top").on("click", function () {
            var target = $(this).attr("data-target");
            // animate
            $("html, body").animate({
                scrollTop: $(target).offset().top,
            },
                1000
            );

            return false;
        });
    };
    let currentYear = document.getElementById("currentYear");
    if (currentYear) {
        currentYear.innerHTML = new Date().getFullYear();
    }
})(jQuery);
