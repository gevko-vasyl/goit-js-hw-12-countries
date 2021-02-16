import countryListHbs from '../templates/country-list.hbs';
import refs from '../js/refs';

function countryListMarkup(country) {
    const markup = countryListHbs(country);
    refs.countryList.insertAdjacentHTML('beforeend', markup);
};

export default countryListMarkup;