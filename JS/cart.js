// Clear cart sur cart.html
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', clearCart)
} else {
    clearCart();
}



getTeddy().then(teddies => {
    displayInCart(teddies);
});




function clearCart() {
    var removeCartItemButton = document.getElementsByClassName('remove');
    var button = removeCartItemButton[0];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target.parentElement.previousElementSibling.previousElementSibling.remove();
        alert('Votre panier est vide.');
        localStorage.clear();
        window.location.href = "index.html";
    })    
}

let ours = JSON.parse(localStorage.getItem('ours'));
let cartItems = document.getElementById("main-cart");
let tbody = document.getElementById("corps");


console.log(typeof(ours));
console.log(ours[0]);
function displayInCart(teddies) {
    for (i=0; i<ours.length; i++) {
        let row = document.createElement('tr');
        row.className = "cartRows";
        let cell1 = document.createElement('td');
        let cell2 = document.createElement('td');
        let cell3 = document.createElement('td');
        cell3.className = "totalPrice";
        let cell4 = document.createElement('td');
        let img = document.createElement('img');

        

        tbody.appendChild(row);
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        cell2.appendChild(img);
        cell1.innerText = ours[i].name;
        img.src = ours[i].imageUrl;
        img.className = "img-mini";
        cell3.innerText = ours[i].price/100+"€";
        cell4.innerText = ours[i].quantity;
        
    }
}