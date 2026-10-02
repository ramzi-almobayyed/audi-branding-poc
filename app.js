const PASSWORD = 'AudiLogoPOC';

const loginScreen = document.getElementById('loginScreen');
const contentScreen = document.getElementById('contentScreen');
const loginForm = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const logoutBtn = document.getElementById('logoutBtn');

function showContent() {
  loginScreen.classList.add('hidden');
  contentScreen.classList.remove('hidden');
  passwordInput.value = '';
  errorMessage.textContent = '';
}

function showLogin() {
  contentScreen.classList.add('hidden');
  loginScreen.classList.remove('hidden');
  passwordInput.value = '';
  errorMessage.textContent = '';
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === PASSWORD) {
    showContent();
  } else {
    errorMessage.textContent = 'Incorrect password. Please try again.';
    passwordInput.focus();
  }
});

logoutBtn.addEventListener('click', () => {
  showLogin();
});
