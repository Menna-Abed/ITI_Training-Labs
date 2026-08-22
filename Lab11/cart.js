var cart = JSON.parse(localStorage.getItem("cart"));
if (!cart) {
    cart = [];
}
function showCart() {
    var cartDiv = document.querySelector("#cart");
    cartDiv.innerHTML = "";
    for (var i = 0; i < cart.length; i++) {
        var totalPrice = cart[i].price * cart[i].quantity;
        cartDiv.innerHTML += `<div class="cart-item">
                <img src="${cart[i].image}">
                <h3>${cart[i].title}</h3>
                <p>Price: ${cart[i].price}</p>
                <p>Quantity: ${cart[i].quantity}</p>
                <p>Total: ${totalPrice}</p>
                <button onclick="increaseQuantity(${cart[i].id})">
                    +
                </button>
                <button onclick="decreaseQuantity(${cart[i].id})">
                    -
                </button>
                <button onclick="removeProduct(${cart[i].id})">
                    Remove
                </button>
            </div>`;
    }
}
function increaseQuantity(id) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            cart[i].quantity++;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
}
function decreaseQuantity(id) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            if (cart[i].quantity > 1) {
                cart[i].quantity--;
            }
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
}
function removeProduct(id) {
    var newCart = [];
    for (var i = 0; i < cart.length; i++) {

        if (cart[i].id != id) {
            newCart.push(cart[i]);
        }
    }
    cart = newCart;
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
}
function purchaseCart() {
    alert("Cart Purchased");
}
function continueShopping() {

    window.location.href = "products.html";
}
showCart();