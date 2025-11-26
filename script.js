// Theme Toggle with localStorage
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
   body.classList.add('dark');
}

toggleButton.addEventListener('click', () => {
   body.classList.toggle('dark');
   localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Show/Hide Details Function
function showDetails(id) {
   const details = document.getElementById(id);
   if (!details) {
      console.error('Element with ID "' + id + '" not found!');
      return;
   }

   // Toggle visibility
   if (details.style.display === 'none' || details.style.display === '') {
      details.style.display = 'block';
   } else {
      details.style.display = 'none';
   }
}
