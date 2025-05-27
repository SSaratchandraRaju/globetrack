import { fetchWeather } from './api/weather.js';
import { fetchCountryInfo } from './api/countries.js';
import { fetchImage } from './api/unsplash.js';
import { renderCard } from './ui/renderCard.js';
import { openModal, closeModal } from './ui/modal.js';
import { saveJournalEntry, getJournalEntries, deleteJournalEntry } from './storage/journalStorage.js';
import { applyTheme, setupThemeToggle } from './ui/themeToggle.js';

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultsSection = document.getElementById('results-section');
const journalContainer = document.getElementById('journal-entries');
const modal = document.getElementById('modal');
const noteInput = document.getElementById('note-input');
const saveNoteBtn = document.getElementById('save-note');
const cancelNoteBtn = document.getElementById('cancel-note');

let currentLocation = '';

/* Search Handler */
async function handleSearch() {
    const location = searchInput.value.trim();
    if (!location) return;

    currentLocation = location;
    resultsSection.innerHTML = '';


    try {
        const weatherData = await fetchWeather(location);

        const countryData = await fetchCountryInfo(weatherData.countryCode);


        const imageUrl = await fetchImage(location);

        renderCard(weatherData, countryData, imageUrl, resultsSection);
    } catch (error) {
        resultsSection.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    }
}

/* Journal Entry Handler */
function handleSaveNote() {
    const note = noteInput.value.trim();
    if (!note) return;

    saveJournalEntry(currentLocation, note);
    noteInput.value = '';
    closeModal();
    loadJournalEntries();
}

function loadJournalEntries() {
    journalContainer.innerHTML = '';
    const entries = getJournalEntries();

    entries.forEach((entry, index) => {
        const div = document.createElement('div');
        div.className = 'journal-entry';
        div.innerHTML = `
      <p><strong>${entry.location}</strong></p>
      <p>${entry.note}</p>
      <div class="journal-actions">
        <button data-index="${index}" class="delete-btn">Delete</button>
      </div>
    `;
        journalContainer.appendChild(div);
    });

    // Attach delete events
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            const index = e.target.dataset.index;
            deleteJournalEntry(index);
            loadJournalEntries();
        });
    });
}

/* Event Listeners */
searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') handleSearch();
});

document.getElementById('theme-toggle').addEventListener('click', setupThemeToggle);
saveNoteBtn.addEventListener('click', handleSaveNote);
cancelNoteBtn.addEventListener('click', closeModal);
resultsSection.addEventListener('click', e => {
    if (e.target.classList.contains('add-note-btn')) {
        openModal();
    }
});

/* Init */
applyTheme();
loadJournalEntries();
