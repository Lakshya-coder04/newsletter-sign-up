// Get references to the modal and dismiss button
const modal = document.querySelector('.modal-overlay');
const dismissButton = document.getElementById('dismiss-button');
const emailPlaceholder = document.getElementById('email-placeholder');

// Hide the container behind
const container = document.querySelector('.container');

// Get the form element and subscribe button
const subscribeForm = document.getElementById('subscribe-form');
const subscribeButton = document.querySelector('.submit');

// Get email input and error message element
var emailInput = document.getElementById('email');
var errMsg = document.querySelector('.errorMsg');

function validateEmail(email) {
  const emailValue = email.value.trim(); // Trim the input value to remove leading/trailing spaces
  if (emailValue === '') {
    errMsg.style.visibility = 'visible';
    return false;
  } else {
    errMsg.style.visibility = 'hidden';
    return true;
  }
}

// Add event listener to open the modal when the subscribe button is clicked
subscribeButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the form submission

  if (validateEmail(emailInput)) {
    const emailValue = emailInput.value;
    emailPlaceholder.textContent = emailValue;
    modal.style.visibility = 'visible';
    container.style.display = 'none';
    subscribeForm.reset();
  }
});

// Add event listener to close the modal when the dismiss button is clicked
dismissButton.addEventListener('click', (e) => {
  modal.style.visibility = 'hidden'; // Hide the modal
  container.style.display = 'flex';
});

// Change image when width is less than 768px
var image = document.querySelector('.image');

function updateImage() {
  if (window.innerWidth <= 768) {
    image.src = './assets/images/illustration-sign-up-mobile.svg';
  } else {
    image.src = './assets/images/illustration-sign-up-desktop.svg';
  }
}

updateImage();

window.addEventListener('resize', updateImage);
