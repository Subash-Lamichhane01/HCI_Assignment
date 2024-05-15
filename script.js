const form = document.getElementById('myForm');
const submissionCue = document.querySelector('.submission-cue');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Show the visual cue
  submissionCue.classList.remove('hidden');

  // Reset the form after a short delay (e.g., 3 seconds)
  setTimeout(() => {
    form.reset();
    submissionCue.classList.add('hidden');
    // Submit the form and navigate to the action URL

    window.location.href = form.action;
  },2000);

  
  console.log("performing action method.")
  
});