const toggleThemeIcon = document.querySelector('.toggle-theme span');
const toggleThemeButton = document.querySelector('.toggle-theme');


// Function to 'Setup Initial Theme'
(function setupInitialTheme() {
  const isLightTheme = window.matchMedia("(prefers-color-scheme: light)").matches;
  const defaultTheme = isLightTheme ? 'light' : 'dark';

  // Load initial theme
  const initialTheme = localStorage.getItem('theme') || defaultTheme;
  setTheme(initialTheme);
  
  // Load initial themeIcon
  const themeIconText = initialTheme === 'light' ? 'light_mode' : 'dark_mode';
  toggleThemeIcon.textContent = themeIconText;
})();


// Function to 'Set Theme'
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}


// Function to 'Toggle Theme'
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  const themeIconText = currentTheme === 'light' ? 'dark_mode' : 'light_mode';
  setTheme(newTheme);
  toggleThemeIcon.textContent = themeIconText;
}

toggleThemeButton.addEventListener('click', toggleTheme);