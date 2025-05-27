export async function fetchCountryInfo(code) {
  const endpoint = `https://restcountries.com/v3.1/alpha/${code}`;

  const response = await fetch(endpoint);
  if (!response.ok) throw new Error('Country data not found');

  const data = await response.json();
  const country = data[0];

  return {
    name: country.name.common,
    capital: country.capital ? country.capital[0] : 'N/A',
    population: country.population.toLocaleString(),
    region: country.region || 'N/A',
    flag: country.flags?.svg || '',
    languages: country.languages
      ? Object.values(country.languages).join(', ')
      : 'N/A',
    currencies: country.currencies
      ? Object.values(country.currencies)
          .map((c) => `${c.name} (${c.symbol})`)
          .join(', ')
      : 'N/A',
    timezones: country.timezones
      ? country.timezones.join(', ')
      : 'N/A',
  };
}
