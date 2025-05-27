const modal = document.getElementById('modal');

export function openModal() {
  modal.classList.remove('hidden');
  document.getElementById('note-input').focus();
}

export function closeModal() {
  modal.classList.add('hidden');
}
