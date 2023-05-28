// Buy Button

const buyBtn = document.querySelector('.btn-buy')

buyBtn.addEventListener('click', buyButtonClickHandler)

function buyButtonClickHandler() {

    const buyModal = document.getElementById('buy-modal')

    const countElement = buyModal.querySelector('#count_element')
    const priceElement = buyModal.querySelector('#price_element')

    let count = 0
    let price = 0

    cart.forEach(cartProduct => {
        count += +cartProduct.value
        price += cartProduct.value * cartProduct.price
    })

    countElement.innerHTML = count + ' шт.'
    priceElement.innerHTML = price + ' руб.'

    buyModal.classList.add('opened')
}
