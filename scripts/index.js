window.addEventListener('DOMContentLoaded', function() {

  const AUTH_URL = 'http://localhost:8080';
  const SIGNUP_URL = AUTH_URL + '/signup';
  const LOGIN_URL = AUTH_URL + '/login';

  const signupForm = document.getElementById('signup-form');
  const signupUsername = document.getElementById('signup-username');
  const signupPassword = document.getElementById('signup-password');
  const signupResult = document.getElementById('signup-result');

  signupForm.onsubmit = function(evt) {
    evt.preventDefault();

    fetch(SIGNUP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: signupUsername.value,
        password: signupPassword.value
      })
    })
    .then(res => res.json())
    .then(result => {
      signupResult.innerHTML = JSON.stringify(result, null, 4);
    });
  };

  /* Implement login form logic */

});
