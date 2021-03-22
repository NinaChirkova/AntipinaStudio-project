// Fixed contacts on scroll
window.onscroll = () => {
    const headerContacts = document.querySelector('.contacts');
    const svgIconInsta = document.querySelector('#icon-insta');
    const svgIconLocation = document.querySelector('#icon-location');
    const logoSvg = document.querySelector('.logo-svg .logo-text');
    const Y = window.scrollY;
    const navAside = document.querySelector('.nav-aside');

    if(!navAside.classList.contains('nav-aside--open')) {
        if(Y > 50) {
            headerContacts.classList.add('contacts--sticky');
            svgIconInsta.style.cssText = "fill: #000000";
            svgIconLocation.style.cssText = "fill: #000000";
            logoSvg.classList.add('logo-text--dark');
        } else if(Y < 50) {
            headerContacts.classList.remove('contacts--sticky');
            svgIconInsta.style.fill = "#FFFFFF";
            svgIconLocation.style.fill = "#FFFFFF";
            logoSvg.classList.remove('logo-text--dark');
        }
    }

    
}

// Animation

let animItems = document.querySelectorAll('.anim-item');

if(animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for(let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if(pageYOffset > (animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if(!animItem.classList.contains('_anim-no-hide')) {
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

window.onload = function() {
    var navToggleButton = $('.nav-toggle');
    var navToggleSvg = $('#nav-toggle');
	var navList = $('.nav-aside');
	var navListOpen = 'nav-aside--open';
	var navLink = $('.nav__link');
	var mobile = $('.contacts');
	var menuFixed = 'contacts--mob-fixed';
    var logoSvg = $('.logo-svg .logo-text');
	
	navToggleButton.on('click', function(e) {
		e.preventDefault();
		navList.toggleClass(navListOpen);
		mobile.toggleClass(menuFixed);
        logoSvg.toggleClass('logo-text--dark');

		navButtonToggle();
	});

	navLink.on('click', function() {

		if(navToggleSvg.hasClass("active"))  {
	      navButtonToggle();
	    } 
	   
		navList.removeClass(navListOpen);
		mobile.removeClass(menuFixed);
        logoSvg.removeClass('logo-text--dark');

	});

	function navButtonToggle() {
		if(navToggleSvg.hasClass("active"))  {
	      navToggleSvg.removeClass("active");
	    } else {
	      navToggleSvg.addClass("active");
	    }
	}
};