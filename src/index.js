import './styles.css';
import debounce from 'lodash.debounce';
import refs from './js/refs';
import fetchCountry from './js/fetchCountries';
import countryListMarkup from './js/countryListMarkup';
import countryMarkup from './js/countryMarkup';
import error from './js/notifications';


refs.input.addEventListener('input', debounce(search, 500));

function search(event) {
    const countryName = event.target.value;
    refs.countryList.innerHTML = '';
    refs.countryContainer.innerHTML = '';

    fetchCountry(countryName).then(country => {
        if (country.length === 1) {
            countryMarkup(country);
            return;
        };
        if (country.length <= 10) {
            countryListMarkup(country);
            return;
        };
        if (country.length > 10) {
            error({
                text: 'Too many matches found. Please enter a more specific query!',
                delay: 1000
            });
            return;
        };
    });
};

