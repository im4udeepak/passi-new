(function ($) {
    'use strict';
    // Preloader
    $(document).ready(function () {
        if(!localStorage.getItem("closeModal")){
            $('#exampleModal').modal('show');
        }
        let closeModal = document.getElementById("closeModal");
        closeModal.addEventListener("click", function () {
            localStorage.setItem("closeModal", true);
            $('#exampleModal').modal('hide');
        });
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
    function openIframeModal(url, title) {
        // Set the src attribute of the iframe
        $("#iframeContent").attr("src", url);
        $("#modalLabel").html(title);
        // Open the modal
        $("#myModal").modal("show");
    }

    // Event listener for the button click
    $(".modal-btn").click(function () {
        // Read the data-src attribute from the button
        var iframeSrc = $(this).data("src");
        var iframeTitle = $(this).data("title");

        // Open the modal with the specified iframe source URL
        openIframeModal(iframeSrc, iframeTitle);
    });
    $(".close").click(function () {
        $("#myModal").modal("hide");
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