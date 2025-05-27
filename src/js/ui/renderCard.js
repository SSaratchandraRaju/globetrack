export function renderCard(weather, country, imageUrl, container) {
    container.innerHTML = `
    <div class="card">
      ${imageUrl ? `<img src="${imageUrl}" alt="Image of ${country.name}" />` : ''}
      <h3>${country.name} <img src="${country.flag}" alt="Flag of ${country.name}" style="width:24px; vertical-align:middle;"/></h3>
      <p><strong>Capital:</strong> ${country.capital}</p>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Population:</strong> ${country.population}</p>
      <p><strong>Languages:</strong> ${country.languages}</p>
      <p><strong>Currencies:</strong> ${country.currencies}</p>
      <p><strong>Timezones:</strong> ${country.timezones}</p>
    </div>

    <div class="card">
      <h3>Weather in ${weather.city}</h3>
      <img src="${weather.icon}" alt="${weather.condition} icon" />
      <p><strong>Temperature:</strong> ${weather.temperature} °C</p>
      <p><strong>Condition:</strong> ${weather.condition}</p>
      <p><strong>Humidity:</strong> ${weather.humidity}%</p>
    </div>

    <button class="add-note-btn">➕ Add Note</button>
  `;
}
