const form = document.querySelector('form');
const emailInput = document.querySelector('input');
const errorSpan = document.createElement('span');
errorSpan.classList.add('error-message');
errorSpan.textContent = 'Please provide a valid email address';

emailInput.addEventListener('invalid', function (event) {
  event.preventDefault();

  showErrorMessage();
});

emailInput.addEventListener('input', function () {
  removeErrorMessage();
});

// emailInput.addEventListener('blur', function () {
//   if (!emailInput.validity.valid) {
//     showErrorMessage();
//   }
// });

function showErrorMessage() {
  emailInput.style.border = '1px solid var(--secondary-light-red)';
  emailInput.classList.add('error');
  emailInput.insertAdjacentElement('afterend', errorSpan);
}

function removeErrorMessage() {
  emailInput.style.border = '1px solid var(--secondary-pale-blue)';
  emailInput.classList.remove('error');
  const errorMessage = emailInput.parentElement.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.remove();
  }
}
