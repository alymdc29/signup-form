const inputField = document.querySelector('#input-field');

inputField.addEventListener('input', () => {
  if (inputField.validity.valid) {
    inputField.style.borderColor = 'green';
  }
  else {
    inputField.style.borderColor = 'red';
  }
})