const form = document.querySelector('.enroll-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button');
    if (button) {
      button.textContent = 'Thanks! We will email you soon.';
      button.disabled = true;
    }
    form.reset();
  });
}