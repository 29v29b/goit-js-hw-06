const input = document.querySelector('#validation-input')
// const setFocus = document.querySelector('#validation-input.valid');
// const removeFocus = document.querySelector('#validation-input.invalid');

input.addEventListener('blur', () => {

    if(input.value.length == input.getAttribute('data-length')) {
        input.classList.remove('invalid')
        input.classList.add('valid')
    } else { 
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
})
