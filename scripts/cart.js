// Cart Side Bar
let cartData = document.getElementById("cartSidebar");
let cartToggle = document.getElementById("cartButton");
let cartCloseBtn = document.getElementById("cartCloser");

cartToggle.addEventListener("click", () => {
  cartData.style.display = "block";
})
cartCloseBtn.addEventListener("click", () => {
  cartData.style.display = "none";
})

// Cart Functionality
// Dynamic Cart

let listProducts = []
let carts = []
let cartCounter = []
let allProducts = document.querySelector(".products-line-1")
let allCartProducts = document.getElementById("allCarts")
let addToCartBtn = document.getElementById('product-1-cart')
let dynamicCounterIcon = document.getElementById('dynamicCounterIcon')

const addDataToHTML = () => {
  allProducts.innerHTML = ``;
  if (listProducts.length > 0) {
    listProducts.forEach(products => {
      let newProduct = document.createElement("div")
      newProduct.classList.add('item');
      newProduct.dataset.id = products.id;
      newProduct.innerHTML = `
    <div
          class="product-1 carousel-item1 position-relative d-flex flex-column border border-light-tertiary rounded-3 px-2">
          <img src="${products.img}" class="img-fluid text-center" alt="features">
          <div class="headline d-flex">
            <p
              class="bg-danger text-white px-2 fs-12 border-0 rounded-1 position-absolute top-0 start-0 mt-2 ms-3 fw-semibold">
              Sale</p>
          </div>
          <div class="hover-icons text-center position-absolute top-50 start-50 translate-middle">
            <iconify-icon class="hover-icon1 bg-white border-0 rounded-3 p-2 shadow-sm fs-6"
              icon="mdi-light:eye"></iconify-icon>
            <iconify-icon class="hover-icon2 bg-white border-0 rounded-3 p-2 shadow-sm fs-6"
              icon="mdi-light:heart"></iconify-icon>
            <iconify-icon class="hover-icon3 bg-white border-0 rounded-3 p-2 shadow-sm fs-6"
              icon="material-symbols:compare-arrows-rounded"></iconify-icon>
          </div>
          <div class="product-1-data">
            <p class="text-body-secondary fs-12 fw-semibold lh-sm">${products.heading}</p>
            <h6 class="fw-bold fs-14">${products.name}</h6>
            <div class="five-stars d-flex align-items-center fs-14 gap-1">
              <iconify-icon class="text-yellow" icon="bi:star-fill"></iconify-icon>
              <iconify-icon class="text-yellow" icon="bi:star-fill"></iconify-icon>
              <iconify-icon class="text-yellow" icon="bi:star-fill"></iconify-icon>
              <iconify-icon class="text-yellow" icon="bi:star-fill"></iconify-icon>
              <iconify-icon class="text-yellow" icon="bi:star-half"></iconify-icon>
              <span class="text-secondary fw-medium ms-2">4.5(149)</span>
            </div>
            <div id="pricing-addcart${products.id}" class="pricing-addcart d-flex align-items-center justify-content-between">
              <p class="fw-medium mt-3">${products.price} <span
                  class="text-decoration-line-through fw-normal text-secondary">$24</span></p>
              <button id="product-${products.id}-cart"
                class="cart-btn d-flex fw-medium align-items-center border-0 rounded-3 bg-green text-white px-2 py-1 ms-2 fs-14"><iconify-icon
                  icon="basil:plus-outline"></iconify-icon>Add</button>
            </div>
          </div>
    `;
      allProducts.appendChild(newProduct)

      const addButton = newProduct.querySelector('.cart-btn');
      addButton.addEventListener('click', () => addCartToHTML(products));

    });
  }
}

let addCartToHTML = (product) => {
  console.log("add to cart" , product.name)
// To Store All Cart Items
  let allProductsDiv = document.createElement("div")
  allProductsDiv.innerHTML = `
    <div id="cartItem${product.id}" class="cart-item-1">
<div class="cartProd1st">            
<div>
              <img class="cartProd1Img" src="${product.img}" alt="">
            </div>
            <div class="names">
              <h6>${product.name}</h6>
              <span>.98 / lb</span>
              <p><iconify-icon icon="mynaui:trash"></iconify-icon>Remove</p>
            </div>
          </div>
          <div class="quantitySection bg-white border shadow-sm">
            <iconify-icon id="decrementIcon" class="decrement-Icon" icon="ic:round-minus"></iconify-icon>
            <span id="dynamicCounter" class="dynamic-Counter">0</span>
            <iconify-icon id="incrementIcon" class="increment-Icon" icon="basil:plus-solid"></iconify-icon>
          </div>
          <div class="priceSection">
            <h6>${product.price}</h6>
          </div>
          </div>
`;
allCartProducts.appendChild(allProductsDiv)
//  For Cart Icon Counting 
cartCounter.push(product)
dynamicCounterIcon.innerHTML = cartCounter.length;

// For Cart Quantity Counting
let incrementQuantity = allProductsDiv.querySelector("#incrementIcon");
let decrementQuantity = allProductsDiv.querySelector("#decrementIcon");
let dynamicQuantity = allProductsDiv.querySelector("#dynamicCounter");
let a=0;
incrementQuantity.addEventListener('click', ()=>{
  a++;
  dynamicQuantity.innerHTML = a;
});
decrementQuantity.addEventListener('click', ()=>{
  if(a>0){
  a--;
  dynamicQuantity.innerHTML = a;
}
});

}
// addCartToHTML()

async function initApp() {
  // Fetching Data From Json File
  const jsonRes = await fetch('jsonFile/foodProducts.json')
    .then(response => response.json())
    .then(carts => {
      listProducts = carts;
      console.log(listProducts);
      addDataToHTML()
})
}

initApp()