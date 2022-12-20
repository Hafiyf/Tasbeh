const resetBtn = document.querySelector('.resetBtn')
const title = document.querySelector('.count-title')
const incBtn = document.querySelector('.incBtn')

let count = 0;


incBtn.addEventListener('click', () => {
    count++
    title.innerHTML = count;
})

resetBtn.addEventListener('click', () => {
    count = 0;
    title.innerHTML = count;
})

