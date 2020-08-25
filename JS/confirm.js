// Déclaration des variables.
let prenom = document.getElementById('confirm-firstName');
let nom = document.getElementById('confirm-lastName');
let adresse = document.getElementById('confirm-address');
let email = document.getElementById('confirm-mail');
let idOrder = document.getElementById('idcommande');
let tbody = document.getElementById('corps');
let contacts = JSON.parse(localStorage.getItem('contact'));
// console.log(localStorage); 


// Insertion des éléments envoyés dans la requête POST.
prenom.innerText = contacts.firstName + " ";
nom.innerText = contacts.lastName; 
email.innerText = contacts.email;
adresse.innerText = contacts.address + ", " + contacts.city;
idOrder.innerText = "Id commande :  " + localStorage.getItem('orderId');

let ours = JSON.parse(localStorage.getItem('ours'));

// Appel des fonctions globales.

createCommand();
updateTotal();

// Vidage du localStorage
localStorage.clear();