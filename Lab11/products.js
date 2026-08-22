async function getProducts() {
    let response = await fetch("https://fakestoreapi.com/products");
    let products = await response.json();
    let productsDiv = document.querySelector("#products");
    for (let i = 0; i < products.length; i++) {
        productsDiv.innerHTML += `
            <div class="product">
                <img src="${products[i].image}">
                <h3>${products[i].title}</h3>
                <p>Price: ${products[i].price}</p>
                <button onclick="addToCart(${products[i].id})">
                    Add To Cart
                </button>
            </div> `;
    }
}
async function addToCart(id) {
    let response = await fetch("https://fakestoreapi.com/products");
    let products = await response.json();
    let selectedProduct;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            selectedProduct = products[i];
        }
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
        cart = [];
    }

    let found = false;
    for (let i = 0; i < cart.length; i++) {

        if (cart[i].id == selectedProduct.id) {

            cart[i].quantity++;

            found = true;
        }
    }
    if (found == false) {
        selectedProduct.quantity = 1;
        cart.push(selectedProduct);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html";
}
getProducts();