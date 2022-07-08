let counterValueSpan = document.querySelector('#value')
let counterValue = 0

const decrementBtn = document.querySelector('[data-action="decrement"]')
decrementBtn.addEventListener('click', () => {
    counterValue -= 1
    counterValueSpan.textContent = counterValue
})


const incrementBtn = document.querySelector('[data-action="increment"]')
incrementBtn.addEventListener('click', () => {
    counterValue += 1
    counterValueSpan.textContent = counterValue
})




