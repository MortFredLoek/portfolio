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
