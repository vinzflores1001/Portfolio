// Theme Toggle with localStorage
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
   body.classList.add('dark');
}

toggleButton.addEventListener('click', () => {
   body.classList.toggle('dark');
   localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Show/Hide Details
function showDetails(id) {
   const details = document.getElementById(id);
   if (!details) return;
   details.style.display = details.style.display === 'none' ? 'block' : 'none';
}

// Contact Form Handling
function handleSubmit(event) {
   event.preventDefault();
   
   const name = document.getElementById('name-input').value;
   const email = document.getElementById('email-input').value;
   const message = document.getElementById('message-input').value;
   const status = document.getElementById('form-status');

   // Simple validation (optional: you can add more)
   if (!name || !email || !message) {
      status.textContent = 'Please fill in all fields.';
      status.className = 'error';
      status.style.display = 'block';
      return;
   }

   // In a real app, you'd send data to a server here.
   // For now, we'll just show a success message.
   status.textContent = 'Thank you! Your message has been received.';
   status.className = 'success';
   status.style.display = 'block';

   // Reset form
   document.getElementById('contact-form').reset();
}
