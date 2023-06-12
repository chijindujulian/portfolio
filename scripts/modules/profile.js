
//get svg image path and create object
const imgElement = document.createElement('img')
imgElement.src = '/assets/images/gear.svg';
imgElement.alt = 'gear-icon';
const svgImage = document.createElement('object');
svgImage.setAttribute('type', 'image/svg+xml');
svgImage.setAttribute('data', imgElement);
svgImage.setAttribute('aria-label', 'gear-icon')
svgImage.data = imgElement;


const imageUrl = '/assets/images/gear.svg';
const imgElement = document.createElement('img');
imgElement.src = imageUrl;
imgElement.alt = 'gear-icon';
imgElement.setAttribute('aria-label', 'gear-icon');