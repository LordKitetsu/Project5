// Clear cart sur cart.html
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', clearCart)
} else {
  clearCart();

}


// On récupère les oursons
getTeddy().then(teddies => {
  displayInCart(teddies);
});



//fonction qui vide le localStorage et nous ramène à la page d'accueil
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
// définition de l'objet avec la clé "ours" du localStorage
let ours = JSON.parse(localStorage.getItem('ours'));

let tbody = document.getElementById('corps');
var total = 0;

console.log(typeof (ours));
console.log(ours[0].price);

// fonction qui crée des lignes du tableau 
// par rapport au nombre d'oursons dans le panier
function displayInCart(teddies) {
  for (i = 0; i < ours.length; i++) {
    let row = document.createElement('tr');
    row.className = "cartRows";
    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');
    let cell3 = document.createElement('td');
    cell3.className = "itemPrice";
    let cell4 = document.createElement('td');
    cell4.className = "itemQuantity";
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
    cell3.innerText = ours[i].price / 100 + ",00€";
    cell4.innerText = ours[i].quantity;

  }
  updateTotal();
}

function updateTotal() {
  var totalPrice = document.getElementsByClassName('total')[0];
  var cartRows = document.getElementsByClassName('cartRows');
  for (var i = 0; i < cartRows.length; i++) {
    var price = ours[i].price;
    var quantity = ours[i].quantity;

    total = (price * quantity) + total;
  }
  totalPrice.innerText = "Total : " + total / 100 + ',00€';
}




function orderId() {
  for (let i = 0; i < ours.length; i++) {
    products.push(ours[i].id);
  }
}
let prenom = document.getElementById('prenom');
let nom = document.getElementById('nom');
let address = document.getElementById('address');
let city = document.getElementById('city');
let mail = document.getElementById('mail');
let products = [];
let data = {};
let contact = {};

let valider = document.getElementById('valider');
valider.addEventListener('click', () => {
    contact = {
    firstName: prenom.value,
    lastName: nom.value,
    address: address.value,
    city: city.value,
    email: mail.value
  };
  orderId();
    data = {
    contact: contact,
    products: products
 }; 
    console.log(data);
    console.log(contact);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/api/teddies/order');
    xhr.responseType = 'json';
    xhr.send(JSON.stringify(data));

    xhr.onload = () => {
      console.log(xhr.response);
    }
})

console.log(localStorage);



