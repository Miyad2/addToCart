const productsArray = document.querySelectorAll('.headphones-box');
const cartContainer = document.querySelector('.cart-container');

var cartStore = [];

// Loop through products and add event listener
productsArray.forEach(product => {
    var productDetails = {
        image: product.querySelector('.headphone-image img').src,
        name: product.querySelector('.headphone-name p').innerHTML,
        discountPrice: parseFloat(product.querySelector('.discountPrice').innerHTML),
        regularPrice: parseFloat(product.querySelector('.regularPrice').innerHTML),
        addToCartBtn: product.querySelector('#cartBtn'),
        quantity: 1 // Default quantity
    };

    productDetails.addToCartBtn.addEventListener('click', () => {
        addToCart(productDetails);
    });
});

// Function to check and add product to cart
function addToCart(product) {
    let existingProduct = cartStore.find(item => item.name === product.name);

    if (existingProduct) {
        alert("This item is already in the cart!");
    } else {
        cartStore.push({ ...product });
        updateCart();
    }
}

// Function to update cart UI
function updateCart() {
    cartContainer.innerHTML = ""; // Clear the cart before re-rendering

    cartStore.forEach((product, index) => {
        let cartItemBox = document.createElement("div");
        cartItemBox.classList.add("cart-item-box");

        cartItemBox.innerHTML = `
            <div class="cart-box">
                <div class="cart-item">
                    <div class="cart-img">
                        <img src="${product.image}" alt="">
                    </div>
                    <div class="image-name">
                        <h6>${product.name}</h6>
                    </div>
                </div>
                <div class="cart-count">
                    <div class="cart-count-part">
                        <button class="count-icon-before decreaseBtn"><i class="fa-solid fa-minus"></i></button>
                        <span class="count-num">${product.quantity}</span>
                        <button class="count-icon-before count-icon-after increaseBtn"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
                <div class="cart-price-part">
                    <div class="cart-price"><span class="price">${product.discountPrice * product.quantity}</span> tk</div>
                    <div class="cart-price"><s><span class="subtotalPrice">${product.regularPrice * product.quantity}</span> tk</s></div>
                </div>
                <button class="deletebtn"><i class="fa-solid fa-trash"></i></button>
            </div>`;

        cartContainer.appendChild(cartItemBox);

        // Increase & Decrease Quantity
        cartItemBox.querySelector(".increaseBtn").addEventListener("click", () => {
            product.quantity++;
                updateCart();
            // if (product.quantity < 5) {
            //     product.quantity++;
            //     updateCart();
            // } else {
            //     alert("Maximum quantity is 5.");
            // }
        });

        cartItemBox.querySelector(".decreaseBtn").addEventListener("click", () => {
            if (product.quantity > 1) {
                product.quantity--;
                updateCart();
            } else {
                alert("Minimum quantity is 1.");
            }
        });

        // Delete Cart Item
        cartItemBox.querySelector(".deletebtn").addEventListener("click", () => {
            cartStore.splice(index, 1);
            updateCart();
        });
    });
}
