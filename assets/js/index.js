const EmailUser = document.getElementById('email-user')
const input = document.getElementById('password-user')
const button = document.getElementById('button')

button.addEventListener('click', changeVisibilityPassword)
input.addEventListener('input', showPassword)

function changeVisibilityPassword() {
    if (input.type == 'password') {
        input.type = 'text'
        input.focus()
    } else {
        input.type = 'password'
        input.focus()
    }
}
function showPassword() {
    let inputv = input.value
    if (inputv != '') {
        button.style.visibility = 'visible' 
    }
    if (inputv == '') {
        button.style.visibility = 'hidden'  
    }

}

