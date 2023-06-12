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

//div element containing local timezone
const timezoneContainer = document.getElementById("timezone");
const timezoneSpanElement = timezoneContainer.querySelector('span');

//get svg image path and create object
const imageUrl = '/assets/images/gear.svg';
const svgImage = document.createElement('img');
svgImage.src = imageUrl;
svgImage.alt = 'gear-icon';
svgImage.width = 8;
svgImage.height = 8;
svgImage.setAttribute('aria-label', 'gear-icon');

//create container for svg Image
const svgContainer = document.createElement('div');
svgContainer.appendChild(svgImage);

//create container for time
svgContainer.innerHTML += ` Local time ${time} `;
svgContainer.appendChild(svgImage);

//create container for gmt
svgContainer.innerHTML += ` GMT (+1:00)`;

timezoneSpanElement.innerHTML = '';
timezoneSpanElement.appendChild(svgContainer);

export {getCurrentTimezoneInTimezone};