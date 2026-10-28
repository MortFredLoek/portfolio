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

// "Ambient designer" definition: letters fade in one after the other, like a wave
const definition = document.querySelector('.definition');
if (definition) {
  const text = definition.textContent.trim();
  definition.setAttribute('aria-label', text);
  definition.textContent = '';
  [...text].forEach((char, i) => {
    const letter = document.createElement('span');
    letter.className = 'letter';
    letter.setAttribute('aria-hidden', 'true');
    letter.style.setProperty('--i', i);
    letter.textContent = char;
    definition.append(letter);
  });
}
