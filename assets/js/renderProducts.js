(function renderProducts() {

    products.forEach(product => {
        const carousel = document.getElementById(product.blockId)

        const template = `
            <div class="item service-item" data-product-id="${product.id}">
                <div class="product-box">
                    <img src="${product.image}" alt="${product.name}" class="product-img">
                    <h2 class="product-title">${product.name}</h2>
                    <span class="price">${product.price} руб.</span>
                    <i class='bx bx-shopping-bag add-cart'></i>
                </div>
            </div>`
            .trim()

        carousel.innerHTML += template
    })
})()
