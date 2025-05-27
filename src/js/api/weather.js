const API_KEY = 'c10f1fd5c24dbf597922126fa4919b8c';

export async function fetchWeather(location) {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    location
  )}&appid=${API_KEY}&units=metric`;

  const response = await fetch(endpoint);


  if (!response.ok) {
    const errorText = await response.text();
    console.error('❌ Weather API error:', errorText);
    throw new Error('Weather data not found');
  }


  const data = await response.json();

  return {
    city: data.name,
    temperature: data.main.temp,
    condition: data.weather[0].main,
    humidity: data.main.humidity,
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    countryCode: data.sys.country,
  };
}
