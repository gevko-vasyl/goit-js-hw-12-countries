
function fetchCountry(countryName) {
    return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(country => country.json());
};

export default fetchCountry;