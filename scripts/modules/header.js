//import timezone data

Intl.DateTimeFormat().resolvedOptions().timeZone;

function getCurrentTimezoneInTimezone(timeZone) {
    const options = {
        timeZone: timeZone,
        hour12:false,
        hour: 'numeric',
        minute: 'numeric',
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);
    const currentTime = formatter.format(new Date());

    return currentTime;
}

const timeZone = 'Africa/Lagos';
const currentTime = getCurrentTimezoneInTimezone(timeZone);
const time = (`${currentTime}`);

//div element containg local timezone
const timezoneContainer = document.getElementById("timezone");
const timezoneSpanElement = timezoneContainer.querySelector('span');

//get svg image path and create object
const imageUrl = '/assets/images/gear.svg';
const svgImage = document.createElement('object');
svgImage.data = imageUrl;

//create container for svg Image
const svgContainer = document.createElement('div');
svgContainer.appendChild(svgImage);

//create container for time
svgContainer.innerHTML += ` Nigerian time ${time} `;
svgContainer.appendChild(svgImage);

//create container for gmt
svgContainer.innerHTML += ` GMT (+1:00)`;

timezoneSpanElement.innerHTML = '';
timezoneSpanElement.appendChild(svgContainer);

export {getCurrentTimezoneInTimezone};