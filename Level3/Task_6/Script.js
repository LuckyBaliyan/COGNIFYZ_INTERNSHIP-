const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let isValid = true;

  clearErrors();

  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Name is required');
    isValid = false;
  }

  if (!isValidEmail(emailInput.value)) {
    showError(emailInput, 'Enter a valid email');
    isValid = false;
  }

  if (passwordInput.value.length < 6) {
    showError(passwordInput, 'Password must be at least 6 characters');
    isValid = false;
  }

  if (confirmPasswordInput.value !== passwordInput.value) {
    showError(confirmPasswordInput, 'Passwords do not match');
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});

function showError(input, message) {
  const errorElement = input.nextElementSibling;
  errorElement.innerText = message;
  errorElement.style.display = 'block';
  input.style.borderColor = '#ff3e30cb';
}

function clearErrors() {
  const errors = document.querySelectorAll('.error');
  errors.forEach((error) => {
    error.innerText = '';
    error.style.display = 'none';
  });

  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => input.style.borderColor = '#fafafa87');
}

function isValidEmail(email) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}
