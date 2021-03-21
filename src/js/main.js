// Fixed contacts on scroll
window.onscroll = () => {
    const headerContacts = document.querySelector('.contacts');
    const svgIconInsta = document.querySelector('#icon-insta');
    const svgIconLocation = document.querySelector('#icon-location');
    const Y = window.scrollY;

    if(Y > 50) {
        headerContacts.classList.add('contacts--sticky');
        svgIconInsta.style.cssText = "fill: #000000";
        svgIconLocation.style.cssText = "fill: #000000";
    } else if(Y < 50) {
        headerContacts.classList.remove('contacts--sticky');
        svgIconInsta.style.fill = "#FFFFFF";
        svgIconLocation.style.fill = "#FFFFFF";
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