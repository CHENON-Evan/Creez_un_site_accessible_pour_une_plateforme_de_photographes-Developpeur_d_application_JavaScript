function displayModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'block';

  const close = document.getElementById('close_modal');
  close.focus();
}

function closeModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'none';
  clearFormData();
  clearAllErrorMessages();
}

// Clear Form Data

function clearFormData() {
  first.value = '';
  last.value = '';
  email.value = '';
  message.value = '';
}

// Clear All Error Messages

function clearAllErrorMessages() {
  const errorElements = document.querySelectorAll('[data-error]');
  errorElements.forEach((element) => {
    element.removeAttribute('data-error');
    element.removeAttribute('data-error-visible');
  });
}

// Verification Form

function isFormValid() {
  let isValid = true;

  // Verification First Name

  function isValidFirst(first) {
    const firstRegex = /^[^\s@]+[^\s@]+$/;
    return firstRegex.test(first);
  }

  if (!first.value || !isValidFirst(first.value)) {
    displayErrorMessage(first, 'Veuillez entrer un prénom valide');
    isValid = false;
  } else {
    clearErrorMessage(first);
  }

  // Verification Last Name

  function isValidLast(last) {
    const lastRegex = /^[^\s@]+[^\s@]+$/;
    return lastRegex.test(last);
  }

  if (!last.value || !isValidLast(last.value)) {
    displayErrorMessage(last, 'Veuillez entrer un nom valide');
    isValid = false;
  } else {
    clearErrorMessage(last);
  }

  // Verification Email

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  if (!email.value || !isValidEmail(email.value)) {
    displayErrorMessage(email, 'Veuillez entrer une adresse mail valide');
    isValid = false;
  } else {
    clearErrorMessage(email);
  }

  // Verification Message

  function isValidMessage(message) {
    const messageRegex = /^[^\s@]+[^\s@]/;
    return messageRegex.test(message);
  }

  if (!message.value || !isValidMessage(message.value)) {
    displayErrorMessage(message, 'Veuillez entrer un message valide');
    isValid = false;
  } else {
    clearErrorMessage(message);
  }

  return isValid;
}

// Display Error Message

function displayErrorMessage(input, errorMessage) {
  const parent = input.parentElement;
  parent.setAttribute('data-error', errorMessage);
  parent.setAttribute('data-error-visible', 'true');
}

// Clear Error Message

function clearErrorMessage(input) {
  const parent = input.parentElement;
  parent.removeAttribute('data-error');
  parent.removeAttribute('data-error-visible');
}

// Form Data

function getFormData() {}

// Send Form Data To Console

function submitFormData() {
  const modal = document.getElementById('contact_modal');

  modal.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log(first.value, last.value, email.value, message.value);
    }
  });
}
