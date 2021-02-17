import error from '../js/notifications';

function fetchCountry(countryName) {
    return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(country => country.ok ? country.json() : country = [])
        .catch(
            error({
                text: 'Something went wrong',
                delay: 300,
            })
        );
        
};

export default fetchCountry;