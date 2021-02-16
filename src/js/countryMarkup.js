import countryHbs from '../templates/country.hbs';
import refs from '../js/refs';

function countryMarkup(country) {
    const markup = countryHbs(country);
    refs.countryContainer.insertAdjacentHTML('beforeend', markup);
};

export default countryMarkup;