// Replace these with the actual selectors and credentials for the website
const usernameSelector = '#userName';
const passwordSelector = '#password';
const loginButtonSelector = '#sendBtn';
const username = 'changeme';
const password = 'changeme';

function performLogin() {
    document.querySelector(usernameSelector).value = username;
    document.querySelector(passwordSelector).value = password;
    document.querySelector(loginButtonSelector).click();
}

// Check if already logged in (optional, based on the website's structure)
if (!document.querySelector(usernameSelector)) {
    console.log('Already logged in or unable to find login form.');
} else {
    performLogin();
}
