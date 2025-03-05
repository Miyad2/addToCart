const headphoneOne = document.querySelector('.headphone-one');
const headphoneTwo = document.querySelector('.headphone-two');
const headphoneThree = document.querySelector('.headphone-three');
const headphoneFour = document.querySelector('.headphone-four');




var productsArray = [headphoneOne, headphoneTwo, headphoneThree, headphoneFour]

productsArray.forEach(product => {
    var productDetails = {
        image: product.querySelector(".headphone-image img").src,
        name: product.querySelector(".headphone-name p").innerHTML,
        discountPrice: product.querySelector(".discountPrice").innerHTML,
        regularPrice: product.querySelector(".regularPrice").innerHTML,
        cartBtn: product.querySelector(".cart-btn button"),
    }

    productDetails.cartBtn.addEventListener('click', function()  {
        // add products
        addProduct(productDetails)

    });
   


});


var cartStore=[]



// add products
function addProduct(product) {
    // console.log(product)
var exists= cartStore.find(item=>item.name===product.name)

if (!exists) {
    cartStore.push(product)
updateCart()
} 
else {
    alert("This book is already added in the cart!");
}

}
// console.log(cartStore)
function updateCart() {
const cartContainer = document.getElementById('cart-container');

var cartItemBox= document.createElement("div")
cartItemBox.classList.add("cart-item-box")

cartItemBox.innerHTML="";

    cartStore.forEach((element,index) => {
        // console.log(index)
        cartItemBox.innerHTML =
            `<div class="cart-item-box"> 
            <div class="cart-box">
                               <div class="cart-item">
                                   <div class="cart-img">
                                       <img src="${element.image}" alt="">
                                   </div>
                                   <div class="cart-img-name">
                                       <h6>${element.name}</h6>
                                   </div>
                               </div>
                               <div class="cart-count">
                                   <div class="cart-count-part">
                                       <div class="count-icon-before" id="decreaseBtn">
                                           <i class="fa-solid fa-minus"></i>
                                       </div>
                                       <div class="count-num" id="count">1 </div>
                                       <div class="count-icon-before count-icon-after" id="increaseBtn">
                                           <i class="fa-solid fa-plus"></i>
                                       </div>
                                   </div>
                                   <div class="tooltipText"></div>
                               </div>
                               <div class="cart-price-part">
                                   <div class="cart-price">
                                       <span id="price">${element.discountPrice}</span>tk</div>
                                   <div class="cart-price"><s><span id="subtotalPrice">${element.regularPrice}</span>tk</s></div>
                               </div>
                               <div class="deletebtn" id="deleteBtn" >
                                   <i class="fa-solid fa-trash"></i>
                               </div>
                           </div>
            </div>`
    });
cartContainer.appendChild(cartItemBox)
// deleteItem()
// Increase Count
increaseItem(cartItemBox)




// Delete Product
// cartItemBox.querySelector("#deleteBtn").addEventListener ('click' , () => {
//     cartItemBox.querySelector('.cart-item-box').remove();
    
// } );


}

// Increase Count
function increaseItem(cartItemBox){
var count = cartItemBox.querySelector('#count');
var countNumber=Number(count.innerText)

// Increase
// cartItemBox.querySelector("#increaseBtn").addEventListener ('click' , () => {
//     countNumber++
//     count.innerText=countNumber

//     // price(countNumber)

    
//     } );
// Decrease
cartItemBox.querySelector("#decreaseBtn").addEventListener ('click' , () => {
    if(countNumber===0){
        alert("The item won't be less than 1")
        return
    }
countNumber--
count.innerText=countNumber

} );



cartItemBox.querySelector("#deleteBtn").addEventListener ('click' , () => {
    cartItemBox.querySelector('.cart-item-box').remove();
    
} );





// Increase

cartItemBox.querySelector("#increaseBtn").addEventListener ('click' , () => {
    countNumber++
    count.innerText=countNumber

    // Update Price

    var price = document.querySelector('#price').innerText;
    var subtotalprice = document.querySelector('#subtotalPrice').innerText;

    var totalPrice=price*countNumber
    var totalRegularPrice=subtotalprice*countNumber
    console.log(totalPrice)
    console.log(totalRegularPrice)
    
    } );








}


















