const STORAGE_KEY = 'wanderlustJournalEntries';

export function getJournalEntries() {
  const entries = localStorage.getItem(STORAGE_KEY);
  return entries ? JSON.parse(entries) : [];
}

export function saveJournalEntry(location, note) {
  const entries = getJournalEntries();
  entries.push({ location, note, date: new Date().toISOString() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function deleteJournalEntry(index) {
  const entries = getJournalEntries();
  if (index >= 0 && index < entries.length) {
    entries.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }
}
