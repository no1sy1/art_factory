document.querySelector('.modal__content').addEventListener('click', (event) => {
    event.stopPropagation()
})

document.querySelector('.modal').addEventListener('click', (event) => {
    event.target.classList.remove('opened')
})

document.querySelector('.modal__close-btn').addEventListener('click', (event) => {
    event.target.parentElement.parentElement.classList.remove('opened')
})
