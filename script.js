// Get references to the modal and dismiss button
const modal = document.querySelector('.modal-overlay');
const dismissButton = document.getElementById('dismiss-button');
const emailPlaceholder = document.getElementById('email-placeholder');

//hide the container behind
const container = document.querySelector('.container');

// Get the form element and subscribe button
const subscribeForm = document.getElementById('subscribe-form');
const subscribeButton = document.querySelector('.submit');

// Add event listener to open the modal when the subscribe button is clicked
subscribeButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the form submission
  const emailInput = subscribeForm.querySelector('.email').value;
  emailPlaceholder.textContent = emailInput;
  modal.style.visibility = 'visible';
  container.style.display = 'none';
  subscribeForm.reset();
});

// Add event listener to close the modal when the dismiss button is clicked
dismissButton.addEventListener('click', (e) => {
  modal.style.visibility = 'hidden'; // Hide the modal
  container.style.display = 'flex';
});
