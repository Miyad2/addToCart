const headphonesArray = document.querySelectorAll('.headphones-box');
var cartContainer = document.querySelector('.cart-container');

var cartStore = []

headphonesArray.forEach(product => {
    var productDetails = {
        image: product.querySelector(".headphone-image img").src,
        name: product.querySelector(".headphone-name p").innerHTML,
        discountPrice: product.querySelector(".discountPrice").innerHTML,
        regularPrice: product.querySelector(".regularPrice").innerHTML,
        addToCartBtn: product.querySelector("#cartBtn"),
        quantity: 1
    }
    productDetails.addToCartBtn.addEventListener("click", () => {
        addToCart(productDetails)
    })
});

// update Cart
function addToCart(product) {
    var existingProduct = cartStore.find(item => item.name === product.name)
    if (existingProduct) {
        alert("This item is already in the cart!")
    } else {
        cartStore.push({
            ...product
        })
        updateCart()
    }
}

function updateCart() {
    cartContainer.innerHTML = ""
    cartStore.forEach((element, index) => {
        var cartItemBox = document.createElement("div")
        cartItemBox.classList.add("cart-item-box")
        cartItemBox.innerHTML = `<div class="cart-box">
                            <div class="cart-item">

                                <div class="cart-img">
                                    <img src="${element.image}" alt="">
                                </div>
                                <div class="image-name">
                                    <h6>${element.name}</h6>
                                </div>
                            </div>
                            <div class="cart-count">
                                <div class="cart-count-part">
                                    <div class="count-icon-before" id="decreaseBtn">
                                        <i class="fa-solid fa-minus"></i>
                                    </div>

                                    <div class="count-num" id="count">${element.quantity} </div>
                                    <div class="count-icon-before" id="increaseBtn">
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                                <div class="tooltipText"></div>
                            </div>
                            <div class="cart-price-part">
                                <div class="cart-price"><span id="price">${element.discountPrice * element.quantity}</span>tk</div>
                                <div class="cart-price"><s><span id="subtotalPrice">${element.regularPrice * element.quantity}</span>tk</s></div>
                            </div>
                            <div class="deletebtn" id="deleteBtn">
                                <i class="fa-solid fa-trash"></i>
                            </div>
                        </div>`;
        cartContainer.appendChild(cartItemBox)

// Decrease Count
cartItemBox.querySelector('#decreaseBtn').addEventListener("click", ()=>{
    if(element.quantity===1){
        alert("Minimum quantity is 1.")
        return
    }
element.quantity--
updateCart()
})
// Increase Count
cartItemBox.querySelector('#increaseBtn').addEventListener("click", ()=>{
    element.quantity++
    updateCart()
    })

    // Delete Item
    cartItemBox.querySelector('#deleteBtn').addEventListener("click", ()=>{
        cartStore.splice(index, 1)
        updateCart()
    })


    // Update Total Amount
var amount = document.querySelector(".total-amount")

let totalAmount = cartStore.reduce((sum, product) => sum + product.discountPrice*product.quantity, 0);
amount.innerHTML=totalAmount

    });




}





