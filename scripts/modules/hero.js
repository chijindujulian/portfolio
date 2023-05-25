

function heroTimezone() {

    const timezoneContainer = document.getElementById("timezone");
    const heroContainer = document.getElementById("hero");

    /*if (window.matchMedia(('min-width:300px')).matches) {
        heroContainer.appendChild(timezoneContainer);
    } else {
        const header = document.getElementsByClassName('header');
        header.appendChild(timezoneContainer);
    }*/

    heroContainer.appendChild(timezoneContainer);

}

heroTimezone();

export { heroTimezone };