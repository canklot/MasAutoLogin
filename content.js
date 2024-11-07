// Define login details
const username = 'changeme';
const password = 'changeme';

const usernameSelector = '#userName';
const passwordSelector = '#password';
const loginButtonSelector = '#sendBtn';

function login() {

    // Get the form elements
    const usernameField = document.querySelector(usernameSelector);
    const passwordField = document.querySelector(passwordSelector);
    const loginBtn = document.querySelector(loginButtonSelector);

    // Check if the login form elements exist
    if (usernameField && passwordField && loginButtonSelector) {
        // Fill in the username and password fields
        usernameField.value = username;
        passwordField.value = password;
        loginBtn.click();
    }
}

// Call login function every minute
setInterval(login, 60 * 1000);

// Immediately login on script load
login();


