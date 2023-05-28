let cart = [];

initItemClick()

function initItemClick() {
    const productItems = document.querySelectorAll('.item.service-item')

    productItems.forEach(item => {
        item.addEventListener('click', (event) => {
            const itemId = item.getAttribute('data-product-id')
            const currentProduct = products.find((product) => product.id == itemId)
            addToCart(currentProduct)
        })
    })
}

function addToCart(product) {
    const isProductInCart = cart.findIndex(cartProduct => cartProduct.id === product.id)

    if (isProductInCart === -1) {
        cart.push({...product, value: 1})
        updateCart()
    } else {
        alert('Вы уже добавили этот товар в корзину')
    }
}

function updateCart() {
    console.log('CART: ', cart)
    const cartContent = document.querySelector('.cart-content')
    cartContent.innerHTML = ''

    cart.forEach(product => {
        const template = `
            <div class="cart-box">
                <img src="${product.image}" alt="" class="cart-img">
                <div class="detail-box">
                    <div class="cart-product-title">${product.name}</div>
                    <div class="cart-price">${product.price} руб.</div>
                    <input type="number" value="${product.value}" class="cart-quantity" data-product-id="${product.id}">
                </div>
                <!-- Remove Cart -->
                <i class='bx bxs-trash-alt cart-remove' data-product-id="${product.id}"></i>
            </div>`
            .trim()

        cartContent.innerHTML += template
    })

    const cartItems = document.querySelectorAll('.cart-box')

    cartItems.forEach(item => {
        const removeBtn = item.querySelector('.cart-remove')
        removeBtn.addEventListener('click', (event) => {
            const id = event.currentTarget.getAttribute('data-product-id')
            removeItemFromCart(id)
        })
    })

    cartItems.forEach(item => {
        const countInput = item.querySelector('.cart-quantity')
        countInput.addEventListener('change', (event) => {
            const id = event.currentTarget.getAttribute('data-product-id')
            const value = event.currentTarget.value
            updateItemValue(id, value)
        })
    })
    
    const cartTotal = document.querySelector('.total-price')
    let price = 0
    
    cart.forEach(cartProduct => {
    price += cartProduct.value * cartProduct.price
    })
    
    cartTotal.innerHTML = price + ' руб.'
}


function removeItemFromCart(id) {
    cart = cart.filter(product => product.id != id)

    updateCart()
}

function updateItemValue(id, value) {
    const product = cart.find(product => product.id == id)

    product.value = value

    updateCart()
}
