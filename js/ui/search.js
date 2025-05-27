import { fetchWeatherData, displayWeather } from '../api/weather.js';
import { fetchCountryData, displayCountryInfo } from '../api/countries.js';
import { fetchLocationPhotos, displayPhotos } from '../api/unsplash.js';

export const setupSearch = () => {
    const searchInput = document.getElementById('locationSearch');
    const searchButton = document.getElementById('searchButton');
    const autocompleteResults = document.getElementById('autocompleteResults');
    const journalEntryForm = document.getElementById('journalEntryForm');

    // Debounce function for autocomplete
    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    };

    // Simple autocomplete (could be enhanced with GeoDB Cities API)
    searchInput.addEventListener('input', debounce(async (e) => {
        const query = e.target.value.trim();
        if (query.length < 2) {
            autocompleteResults.innerHTML = '';
            autocompleteResults.classList.remove('active');
            return;
        }

        autocompleteResults.innerHTML = `<div class="autocomplete-item">Search for "${query}"</div>`;
        autocompleteResults.classList.add('active');
    }, 300));

    // Handle search submission
    const handleSearch = async () => {
        const query = searchInput.value.trim();
        if (!query) return;

        // Reset UI
        autocompleteResults.innerHTML = '';
        autocompleteResults.classList.remove('active');

        const [city, country] = query.split(',').map(item => item.trim());

        try {
            // Fetch all data in parallel
            const [weatherData, countryData, photosData] = await Promise.all([
                fetchWeatherData(city, country),
                fetchCountryData(country),
                fetchLocationPhotos(query)
            ]);

            // Display results
            displayWeather(weatherData, 'weatherCard');
            displayCountryInfo(countryData, 'countryCard');
            displayPhotos(photosData, 'photosContainer');

            // Show journal entry form for this location
            journalEntryForm.classList.remove('hidden');
            journalEntryForm.dataset.location = query;
        } catch (error) {
            console.error('Search error:', error);
        }
    };

    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
};