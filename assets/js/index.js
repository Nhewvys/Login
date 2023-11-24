const EmailUser = document.getElementById('email-user');
const input = document.getElementById('password-user');
const button = document.getElementById('button');
const eyeIcon = document.getElementById('eye-icon');

button.addEventListener('click', changeVisibilityPassword);
input.addEventListener('input', showPassword);

function changeVisibilityPassword(evento) {
    evento.stopPropagation();

    if (input.type === 'password') {
        input.type = 'text';
        eyeIcon.src = 'assets/images/eye-ish-close.svg';
        input.focus();
    } else {
        input.type = 'password';
        eyeIcon.src = 'assets/images/eye-ish.svg';
        input.focus();
    }
}

function showPassword() {
    let inputv = input.value;
    if (inputv !== '') {
        button.style.visibility = 'visible';
    }
    if (inputv === '') {
        button.style.visibility = 'hidden';
    }
}
