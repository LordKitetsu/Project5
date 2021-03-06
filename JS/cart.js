// Attendre que le document soit chargé avant d'autoriser les fonctions.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', clearCart)
} else {
  clearCart();
}

//Fonction qui vide le localStorage et nous ramène à la page d'accueil.
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

// Déclaration de variables.
let ours = JSON.parse(localStorage.getItem('ours'));
let tbody = document.getElementById('corps');
let form = document.getElementById('form')
let valider = document.getElementById('valider');

// Fonctions globales pour afficher le tableau des produits et le total.
createCommand();
updateTotal();



valider.addEventListener('click', (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    alert('Veuillez remplir correctement les champs obligatoires.')
  } 
  e.preventDefault();
// Déclarations des variables pour la route POST.
  let products = [];
  let data = {};
  let contact = {};

  let prenom = document.getElementById('prenom');
  let nom = document.getElementById('nom');
  let address = document.getElementById('address');
  let city = document.getElementById('city');
  let mail = document.getElementById('mail');
// Ajout de contenu dans ces variables.
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
// Fonction qui prépare la requête POST à être appellée.
  function sending(url, order) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      request.onreadystatechange = function (response) {
        if (this.readyState === 4) {
          if (this.status === 201) {
            resolve(response = JSON.parse(this.responseText))
          } else {
            reject(
              console.log('Something went wrong')
            );
          }
        }
      };
      request.open("POST", url);
      request.setRequestHeader("Content-Type", "application/json");
      request.send(JSON.stringify(order));
    });
  };
// Requête POST avec appel de la fonction correspondante.
// Redirection vers la page de confirmation de commande.
  sending(api + "/order", data)
    .then((response) => {
      localStorage.setItem('contact', JSON.stringify(contact));
      localStorage.setItem('orderId', JSON.stringify(response.orderId))
      if(JSON.parse(localStorage.getItem('orderId'))){
        window.location.href ="./confirmation.html"
      }
    })
    .catch()
})



