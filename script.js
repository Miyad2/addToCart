const headphoneOne = document.querySelector('.headphone-one');
const headphoneTwo = document.querySelector('.headphone-two');
const headphoneThree = document.querySelector('.headphone-three');
const headphoneFour = document.querySelector('.headphone-four');


var productsArray = [headphoneOne, headphoneTwo, headphoneThree, headphoneFour]


productsArray.forEach(product => {
    var products={
        image:product.querySelector(".headphone-image img").src,
        name: product.querySelector(".headphone-name p").innerHTML,
        discountPrice: product.querySelector(".discountPrice").innerHTML,
        regularPrice: product.querySelector(".regularPrice").innerHTML,
        addToCartBtn: product.querySelector(".cart-btn button"),

    }
    

 products.addToCartBtn.addEventListener ('click' , () => {
    

    function addCart(product) {

      var cartAddSection=  document.querySelector('.cart-item-box')
      cartAddSection.innerHTML+=
       `<div class="cart-box">
                           <div class="cart-item">
                               <div class="cart-img">
                                   <img src="${product.image}" alt="">
                               </div>
                               <div class="cart-img-name">
                                   <h6>${product.name}</h6>
                               </div>
                           </div>
                           <div class="cart-count">
                               <div class="cart-count-part">
                                   <div class="count-icon-before" id="decreaseBtn" onclick="decrease()">
                                       <i class="fa-solid fa-minus"></i>
                                   </div>
                                   <div class="count-num" id="count">1 </div>
                                   <div class="count-icon-before count-icon-after" id="increaseBtn"
                                       onclick="increase()">
                                       <i class="fa-solid fa-plus"></i>
                                   </div>
                               </div>
                               <div class="tooltipText"></div>
                           </div>
                           <div class="cart-price-part">
                               <div class="cart-price">
                                   <span id="price">${product.discountPrice}</span></div>
                               <div class="cart-price">${product.r}<span id="subtotalPrice"></span></div>
                           </div>
                           <div class="deletebtn" id="deleteBtn" onclick="deletebtn()">
                               <i class="fa-solid fa-trash"></i>
                           </div>
                       </div>`
   
   }

    addCart(products)
   
 } );


    
});






