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