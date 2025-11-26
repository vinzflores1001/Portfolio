// Theme Toggle with localStorage persistence
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
   body.classList.add('dark');
}

// Toggle theme and save preference
toggleButton.addEventListener('click', () => {
   body.classList.toggle('dark');
   if (body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
   } else {
      localStorage.setItem('theme', 'light');
   }
});

// Show/hide details for achievements/projects
function showDetails(id) {
   const details = document.getElementById(id);
   if (details.style.display === 'none' || details.style.display === '') {
      details.style.display = 'block';
   } else {
      details.style.display = 'none';
   }
}
