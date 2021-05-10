// Fixed contacts on scroll
window.onscroll = () => {
    const headerContacts = document.querySelector('.contacts');
    const svgIconInsta = document.querySelector('#icon-insta');
    const svgIconLocation = document.querySelector('#icon-location');
    const logoSvg = document.querySelector('.logo-svg .logo-text');
    const Y = window.scrollY;
    const navAside = document.querySelector('.nav-aside');

    if (!navAside.classList.contains('nav-aside--open')) {
        if (Y > 50) {
            headerContacts.classList.add('contacts--sticky');
            svgIconInsta.style.cssText = "fill: #000000";
            svgIconLocation.style.cssText = "fill: #000000";
            logoSvg.classList.add('logo-text--dark');
        } else if (Y < 50) {
            headerContacts.classList.remove('contacts--sticky');
            svgIconInsta.style.fill = "#FFFFFF";
            svgIconLocation.style.fill = "#FFFFFF";
            logoSvg.classList.remove('logo-text--dark');
        }
    }


}

// Animation

let animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if (pageYOffset > (animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);

}

function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
        top: rect.top + scrollTop, left: rect.left + scrollLeft
    }
}

// Navigation

window.onload = function () {
    var navToggleButton = $('.nav-toggle');
    var navToggleSvg = $('#nav-toggle');
    var navList = $('.nav-aside');
    var navListOpen = 'nav-aside--open';
    var navLink = $('.nav__link');
    var mobile = $('.contacts');
    var menuFixed = 'contacts--mob-fixed';
    var logoSvg = $('.logo-svg .logo-text');
    var subMenu = $('.nav-sub__list');
    var navMobile = $('.nav-mobile');

    navToggleButton.on('click', function (e) {
        e.preventDefault();
        navList.toggleClass(navListOpen);
        mobile.toggleClass(menuFixed);
        logoSvg.toggleClass('logo-text--dark');
        navMobile.toggleClass('nav-mobile--bg-white');

        navButtonToggle();
    });

    navLink.on('click', function () {

        if (navToggleSvg.hasClass("active")) {
            navButtonToggle();
        };

        if (subMenu.hasClass('nav-sub__list--open')) {
            subMenu.removeClass('nav-sub__list--open');
        };

        navList.removeClass(navListOpen);
        mobile.removeClass(menuFixed);
        logoSvg.removeClass('logo-text--dark');
        navMobile.removeClass('nav-mobile--bg-white');
    });

    function navButtonToggle() {
        if (navToggleSvg.hasClass("active")) {
            navToggleSvg.removeClass("active");
        } else {
            navToggleSvg.addClass("active");
        }
    };


    // Slider
    $('.header__slider').slick({
        lazyLoad: 'ondemand',
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 2000,
        easing: 'ease-in'
    });

    $('.comments__slider').slick({
        lazyLoad: 'progressive',
        arrows: true,
        dots: false,
        autoplay: true,
        speed: 1000,
        easing: 'ease-in',
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: true,
        centerPadding: '40px',

        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1070,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: "unslick"
            }
        ]
    });

    $('.sertificates__wrapper').magnificPopup({
        delegate: '.aspect-ratio-box-inside', // child items selector, by clicking on it popup will open
        type: 'image'
        // other options
    });


    // Плавная прокрутка

    $(".nav-helper a,a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
        highlightSelector: ".nav-helper a"
    });

    // Раскрывающийся список

    let btnQuestion = document.querySelectorAll('.collapsible');

    for (let i = 0; i < btnQuestion.length; i++) {
        btnQuestion[i].addEventListener('click', function () {
            this.classList.toggle('_active');

            let content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.borderBottom = 'none';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.borderBottom = '1px solid rgba(0, 0, 0, 1)';
            }
        })
    }



    // let isMobile = {
    //     Android: function () { return navigator.userAgent.match(/Android/i); },
    //     BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    //     iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    //     Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    //     Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    //     any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
    // };
    let body = document.querySelector('body');
    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) || (viewportWidth < 992)) {
        body.classList.add('touch');

        let menuItem = document.querySelectorAll('.nav-aside--pad>.nav__list>.nav__item');

        for (let i = 0; i < menuItem.length; i++) {
            if (menuItem[i].querySelector('.nav-sub__list')) {
                let plusButon = document.createElement('span');
                plusButon.className = 'plus menu__plus';
                menuItem[i].firstElementChild.after(plusButon);
            }
        }

        let plusButton = document.querySelectorAll('.plus');
        let menuLinks = document.querySelectorAll('.nav__link');

        for (i = 0; i < plusButton.length; i++) {
            let subMenu = plusButton[i].nextElementSibling;
            let thisButton = plusButton[i];

            plusButton[i].addEventListener('click', function () {
                subMenu.classList.toggle('nav-sub__list--open');
                thisButton.classList.toggle('active');
            });
        }
        for (i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', function () {

                for (i = 0; i < plusButton.length; i++) {
                    if (plusButton[i].classList.contains('active')) {
                        plusButton[i].classList.remove('active');
                    }
                }
            });
        }

    } else {
        body.classList.add('mouse');
    }
};