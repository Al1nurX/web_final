// 1
const form = document.getElementById('form1');
const username = document.getElementById('name');
const password = document.getElementById('password');
const user_error = document.getElementById('user-error');
const pass_error = document.getElementById('pass-error');

form.addEventListener('submit', (event) => {
    let messages1 = [];
    let messages2 = [];

    if (username.value === '' || username.value === null) {
        messages1.push('*Name is required!');
    }

    if (username.value.length < 4) {
        messages1.push('*Username must be longer than 4 characters!');
    }

    if (password.value === '' || password.value === null) {
        messages2.push('*Password is required!');
    }

    if (password.value.length <= 6) {
        messages2.push('*Password must be longer than 6 characters!');
    }

    if (password.value === 'password') {
        messages2.push('*Password cannot be password!');
    }

    if (messages1.length > 0 && messages2.length > 0) {
        event.preventDefault();
        user_error.innerText = messages1.join('\n');
        pass_error.innerText = messages2.join('\n');
    }
});

const form3 = document.getElementById('forgotPasswordForm');
const username2 = document.getElementById('forgotEmail');
const user_2_error = document.getElementById('forgotEmailError');

form3.addEventListener('submit', (event) => {
    let messages = [];

    if (username2.value === '' || username2.value === null) {
        messages.push('*Name is required!');
    }

    if (username2.value.length < 4) {
        messages.push('*Username must be longer than 4 characters!');
    }

    if (messages.length > 0) {
        event.preventDefault();
        user_2_error.innerText = messages.join('\n');
    }
});

// 2
const form2 = document.getElementById('form2');
const regUsername = document.getElementById('regName');
const regPassword = document.getElementById('regPassword');
const regPassword2 = document.getElementById('regPassword2');
const regNumber = document.getElementById('regNumber');
const reg_user_error = document.getElementById('reg-user-error');
const reg_pass_error = document.getElementById('reg-pass-error');
const reg_pass_error2 = document.getElementById('reg-pass-error2');
const reg_phone_error = document.getElementById('reg-phone-error');

form2.addEventListener('submit', (event) => {
    let messages1 = [];
    let messages2 = [];
    let messages3 = [];

    if (regUsername.value === '' || regUsername.value === null) {
        messages1.push('*Name is required!');
    }

    if (regUsername.value.length < 4) {
        messages1.push('*Username must be longer than 4 characters!');
    }

    if (regNumber.value === '' || regNumber.value === null) {
        messages3.push('*Phone number is required!');
    }

    if (regPassword.value === '' || regPassword.value === null) {
        messages2.push('*Password is required!');
    }

    if (regPassword.value.length <= 6) {
        messages2.push('*Password must be longer than 6 characters!');
    }

    if (regPassword.value === 'password') {
        messages2.push('*Password cannot be password!');
    }

    if (regPassword.value !== regPassword2.value) {
        messages2.push('*Passwords do not match!');
    }

    if (messages1.length > 0 && messages2.length > 0 && messages3.length > 0) {
        event.preventDefault();
        reg_user_error.innerText = messages1.join(', ');
        reg_pass_error.innerText = messages2.join(', ');
        reg_pass_error2.innerText = messages2.join(', ');
        reg_phone_error.innerText = messages3.join(', ');
    }
});

// 3
const btnOpen = document.querySelector('.signup');
const btnClose = document.querySelector('#btn-close');
const signup = document.querySelector('.center-signup');
const modal = document.getElementById("modal");

btnOpen.addEventListener('click', () => {
    signup.classList.add('open-signup');
    modal.style.display = "block";
    modal.classList.add('open-modal');
});

btnClose.addEventListener('click', () => {
    signup.classList.remove('open-signup');
    modal.style.display = "none";
    modal.classList.remove('open-modal');
});

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 4
function submitForm() {
    var user = document.getElementById('name').value;
    var pass = document.getElementById('password').value;

    if (user === 'admin' && pass === 'admin') {
        window.location.href = 'admin.html';
        return false;
    }
}

function registerUser() {

    var username = document.getElementById('regName').value;
    var password = document.getElementById('regPassword').value;
    var phoneNumber = document.getElementById('regNumber').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];

    var existingUser = users.find(user => user.username === username);

    if (existingUser) {
        alert('User with this username already exists. Please choose a different username.');
        return;
    }

    var newUser = {
        username: username,
        password: password,
        phone: phoneNumber
    };

    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));
}

const btnOpn = document.querySelector('#forgotPasswordLink');
const btnCls = document.querySelector('#btn-close');
const reset = document.querySelector('.center-reset');
const modal2 = document.getElementById("modal2");

btnOpn.addEventListener('click', () => {
    reset.classList.add('open-reset');
    modal2.style.display = "block";
    modal2.classList.add('open-modal2');
});

btnCls.addEventListener('click', () => {
    reset.classList.remove('open-reset');
    modal2.style.display = "none";
    modal2.classList.remove('open-modal2');
});

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
