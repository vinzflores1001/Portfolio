
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;


const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
   body.classList.add('dark');
}

toggleButton.addEventListener('click', () => {
   body.classList.toggle('dark');

   if (body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
   } else {
      localStorage.setItem('theme', 'light');
   }
});
