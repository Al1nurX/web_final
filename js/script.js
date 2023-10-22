alert('By continuing to use our website, you agree to the use of cookies.');
prompt('Will you continue? (y/n)');

const form = document.getElementById('form');
const username = document.getElementById('name');
const password = document.getElementById('password');
const error = document.getElementById('error');

form.addEventListener('submit', (event) => {
    let messages = [];

    if (username.value === '' || username.value === null) {
        messages.push('*Name is required!');
    }

    if (username.value.length < 4) {
        messages.push('*Username must be longer than 4 characters!')
    }

    if (password.value === '' || password.value === null) {
        messages.push('*Password is required!');
    }

    if (password.value.length <= 6) {
        messages.push('*Password must be longer than 6 characters!');
    }

    if (password.value === 'password') {
        messages.push('*Password cannot be password!');
    }

    if (messages.length > 0) {
        event.preventDefault();
        error.innerText = messages.join('\n');
    }
});
