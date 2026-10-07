// Contact toggle (front page)
const contactToggle = document.querySelector('[aria-controls="contact"]');
const contact = document.getElementById('contact');
if (contactToggle && contact) {
  contactToggle.addEventListener('click', () => {
    const open = contact.hidden;
    contact.hidden = !open;
    contactToggle.setAttribute('aria-expanded', String(open));
  });
}

// "Ambient designer" definition: eases in, stays 5 seconds, eases out
const definitionToggle = document.querySelector('.define');
const definition = document.getElementById('definition');
const HOLD_MS = 5000;
let hideTimer;
if (definitionToggle && definition) {
  definitionToggle.addEventListener('click', () => {
    clearTimeout(hideTimer);
    definition.classList.add('is-visible');
    hideTimer = setTimeout(() => definition.classList.remove('is-visible'), HOLD_MS);
  });
}
