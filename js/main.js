/*
Template Name:Iftv HTML Template
Author       : The UX Lab
Version      : 1.0
*/
(function ($) {

    $('.jpcontainer-1 .jp-play')
        .click(function () {
            $('.jpcontainer-1 .equlizer').addClass('block');
            $('.jpcontainer-2 .equlizer,.jpcontainer-3 .equlizer,.jpcontainer-4 .equlizer,.jpco' +
                    'ntainer-5 .equlizer,.jpcontainer-6 .equlizer,.jpcontainer-7 .equlizer').removeClass('block');
        })

    $('.jpcontainer-2 .jp-play').click(function () {
        $('.jpcontainer-2 .equlizer').addClass('block');
        $('.jpcontainer-1 .equlizer,.jpcontainer-3 .equlizer,.jpcontainer-4 .equlizer,.jpco' +
                'ntainer-5 .equlizer,.jpcontainer-6 .equlizer,.jpcontainer-7 .equlizer').removeClass('block');

    })
    $('.jpcontainer-3 .jp-play').click(function () {
        $('.jpcontainer-3 .equlizer').toggleClass('block');
        $('.jpcontainer-2 .equlizer,.jpcontainer-1 .equlizer,.jpcontainer-4 .equlizer,.jpco' +
                'ntainer-5 .equlizer,.jpcontainer-6 .equlizer,.jpcontainer-7 .equlizer').removeClass('block');

    })
    $('.jpcontainer-4 .jp-play').click(function () {
        $('.jpcontainer-4 .equlizer').toggleClass('block');
        $('.jpcontainer-2 .equlizer,.jpcontainer-3 .equlizer,.jpcontainer-1 .equlizer,.jpco' +
                'ntainer-5 .equlizer,.jpcontainer-6 .equlizer,.jpcontainer-7 .equlizer').removeClass('block');

    })
    $('.jpcontainer-5 .jp-play').click(function () {
        $('.jpcontainer-5 .equlizer').toggleClass('block');
        $('.jpcontainer-2 .equlizer,.jpcontainer-3 .equlizer,.jpcontainer-4 .equlizer,.jpco' +
                'ntainer-1 .equlizer,.jpcontainer-6 .equlizer,.jpcontainer-7 .equlizer').removeClass('block');

    })
    $('.jpcontainer-6 .jp-play').click(function () {
        $('.jpcontainer-6 .equlizer').toggleClass('block');
        $('.jpcontainer-2 .equlizer,.jpcontainer-3 .equlizer,.jpcontainer-4 .equlizer,.jpco' +
                'ntainer-5 .equlizer,.jpcontainer-1 .equlizer,.jpcontainer-7 .equlizer').removeClass('block');

    })
    $('.jpcontainer-7 .jp-play').click(function () {
        $('.jpcontainer-7 .equlizer').toggleClass('block');
        $('.jpcontainer-2 .equlizer,.jpcontainer-3 .equlizer,.jpcontainer-4 .equlizer,.jpco' +
                'ntainer-5 .equlizer,.jpcontainer-6 .equlizer,.jpcontainer-1 .equlizer').removeClass('block');

    })

    $('.jp-stop').click(function () {
        $('.equlizer').removeClass("block");
    })

    // //--------------------------------------------------------------Expired
    $('[data-countdown]').each(function () {
        var $deadline = new Date($(this).data('countdown')).getTime();

        // var $dataDays = $(this).children('[data-days]');

        var x = setInterval(function () {

            var regDone = $(".reg-done");
            regDone
                .add()
                .hide();

            var now = new Date().getTime();
            var t = $deadline - now;

            var days = Math.floor(t / (1000 * 60 * 60 * 24));

            if (days < 7) {
                days = '7' + days;
                $(".registration").hide();
                regDone
                    .add()
                    .show();
            }

        }, 1000);
    })
    // /------------------------------------------expired end
    // -----------------------------------------------------------------------------
    // --------------------
    // -----------------------------------------------------------------------------
    // - -----------------------
    function showModel() {
        $('#popup').show();
    }
    setTimeout(showModel, 20000);

    function showModel2() {
        $('#addpop').show();
        $('body').addClass('active_body');

    }
    setTimeout(showModel2, 10000);

    function showModel3() {
        $('#addpop').hide();
        $('body').removeClass('active_body');
    }
    setTimeout(showModel3, 18000);

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-home-bottom').fadeIn();
        } else {
            $('.back-home-bottom').fadeOut();
        }
    });
    // //Click event to scroll to top $('.back-home-bottom').click(function () {
    // $('html, body').animate({         scrollTop: 0     }, 800);     return false;
    // });

    $(document).ready(function () {

        setTimeout(function () {
            $('body').addClass('loaded');
            $('h1').css('color', '#222222');
        }, 3000);

    });

    // Portfolio Masonary
    var $grid = $('.grid-active').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1
        }
    });
    // Portfolio Filter items on button click
    $('.grid-filter').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
    });

    // change is-checked class on buttons
    $('.grid-filter').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'li', function () {
            $buttonGroup
                .find('.is-checked')
                .removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    $(".header-area .header-right ul li .search-click").click(function () {
        $(".custom-search-input").toggleClass('search-show');
        $(".button-home").toggleClass('hidden');
    });

})(jQuery);

// Responsive Menu
document.addEventListener("DOMContentLoaded", () => {
    const menu = new MmenuLight(document.querySelector("#menu"), "(max-width: 991px)");

    const navigator = menu.navigation({selectedClass: 'Selected', slidingSubmenus: true, theme: 'dark', title: 'Menu'});
    const drawer = menu.offcanvas({position: 'left'});

    document
        .querySelector('a[href="#menu"]')
        .addEventListener('click', (evnt) => {
            evnt.preventDefault();
            drawer.open();
        });
});

// Features Slider
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: true
    },
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
    }
});

var mySwiper = new Swiper('.tranding-slider-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
    },
    breakpoints: {
        0: {
            navigation: {
                nextEl: false,
                prevEl: false
            }
        },

        768: {
            navigation: true
        }
    }
});

// Online Store Slider
var onlineswiper = new Swiper('.online-store-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
        rotate: 45,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    },
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
    }
});

// Horizontal Click and Drag Scrolling with JS
function dragslider($className) {
    const slider = document.querySelector($className);
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider
            .classList
            .add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider
            .classList
            .remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider
            .classList
            .remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) 
            return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = x - startX; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        console.log(walk);
    });

}
dragslider('.features-slider');
dragslider('.documentary-slider');

const popup = document.querySelectorAll('.popup');
window.onload = function () {
    setTimeout(function () {
        popup.style.display = "none"
    }, 2000)
}

// const slider = document.querySelector('.scrollmenu'); let mouseDown = false;
// let startX,     scrollLeft; let startDragging = function (e) {     mouseDown
// = true;     startX = e.pageX - slider.offsetLeft;     scrollLeft =
// slider.scrollLeft; }; let stopDragging = function (event) {     mouseDown =
// false; }; slider.addEventListener('mousemove', (e) => { e.preventDefault();
// if (!mouseDown) {         return;     }     const x = e.pageX -
// slider.offsetLeft;     const scroll = x - startX; slider.scrollLeft =
// scrollLeft - scroll; }); slider.addEventListener('mousedown', startDragging,
// false); slider.addEventListener('mouseup', stopDragging, false);
// slider.addEventListener('mouseleave', stopDragging, false);

//

// var w_width = $(window).width(); var position_obj = []; var half_w_width =
// w_width / 2; $('.obj').each(function () {
// position_obj.push($(this).offset().left); }); Draggable.create(".wrapper", {
// type: "scrollLeft",     edgeResistance: 0.9,     throwProps: !0, maxDuration:
// 1.2,     minDuration: 1.2,     lockAxis: true,     throwProps: true,
// onThrowUpdate: function () {         var wrapper_left = this.x * (-1) +
// half_w_width;         $(position_obj).each(function (i, val) { obj_c = i + 1;
//             if (val < wrapper_left) { $('.obj').removeClass('active');
// $('#obj_' + obj_c).addClass('active');             } });     }, snap:
// function (e) {         var span_window_w = $(window).width(); return
// -Math.round(Math.round(e / (.3 * span_window_w)) * (.3 * span_window_w)) //
// This changes the threshold for dragging and snapping the obj's     },
// onDragStart: function () {}, onThrowComplete: function () {
// TweenLite.set(".obj", {className: "+=loc"})  } }), TweenMax.set(".wrapper",
// {overflow: "scroll"}), $(".wrapper").scroll(function () {     $(".parallax")
// .each(function () {             var leftOffset = $(this)   .offset() .left;
// var element_w = $(this).width(); leftOffset < w_width && leftOffset +
// element_w > 0 && TweenLite.to($(this), 1.2, { xPercent: (w_width
// - leftOffset) / w_width * $(this).attr("data-velocity"), overwrite: 0     })
// }) })

new Glider(document.querySelector(".glider"), {
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    dots: ".dots",
    arrows: {
        prev: ".glider-prev",
        next: ".glider-next"
    },
    responsive: [
        {
            // If Screen Size More than 768px
            breakpoint: 768,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                duration: 0.5,

                arrows: {
                    prev: ".glider-prev",
                    next: ".glider-next"
                }
            }
        }, {
            // If Screen Size More than 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
                duration: 0.5,
                arrows: {
                    prev: ".glider-prev",
                    next: ".glider-next"
                }
            }
        }
    ]
});

//