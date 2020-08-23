// Clear cart sur cart.html
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', clearCart)
} else {
  clearCart();
}

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


let ours = JSON.parse(localStorage.getItem('ours'));
let tbody = document.getElementById('corps');
let total = 0;

ours.forEach(teddies => {
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
  cell1.innerText = teddies.name;
  img.src = teddies.imageUrl;
  img.className = "img-mini";
  cell3.innerText = teddies.price / 100 + ",00€";
  cell4.innerText = teddies.quantity;
})
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
updateTotal()

let form = document.getElementById('form')
let valider = document.getElementById('valider');

valider.addEventListener('click', (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    alert('Invalid form')
  } 

  let products = [];
  let data = {};
  let contact = {};

  let prenom = document.getElementById('prenom');
  let nom = document.getElementById('nom');
  let address = document.getElementById('address');
  let city = document.getElementById('city');
  let mail = document.getElementById('mail');

  contact = {
    firstName: prenom.value,
    lastName: nom.value,
    address: address.value,
    city: city.value,
    email: mail.value
  };

  for (let i = 0; i < ours.length; i++) {
    products.push(ours[i].id);
  }
  data.products = products;
  data.contact = contact;

  function sending(url, order) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      request.onreadystatechange = function (response) {
        if (this.readyState === 4) {
          if (this.status === 201) {
            resolve(response = JSON.parse(this.responseText))
          } else {
            reject(
              alert('Something went wrong')
            );
          }
        }
      };
      request.open("POST", url);
      request.setRequestHeader("Content-Type", "application/json");
      request.send(JSON.stringify(order));
    });
  };

  sending(api + "/order", data)
    .then((response) => {
      localStorage.setItem('orderId', JSON.stringify(response.orderId))
      window.location.href ="confirmation.html"
    })
    .catch()

  
})



