const inputField = document.querySelector('#input-field');
const passwordField = document.querySelector('name="password');
const confirmPasswordField = document.querySelector('name=confirm-password');

inputField.addEventListener('input', () => {
  if (inputField.validity.valid) {
    inputField.style.borderColor = 'green';
  }
  else {
    inputField.style.borderColor = 'red';
  }
})