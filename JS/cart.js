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
        cell4.innerText = "1";
        
    }
}




/* function displayInCart(teddies) {
    for (i=0; i<ours.length; i++) {
        let firstDiv = document.createElement('div');
        firstDiv.className = "container commande";
        let secondDiv = document.createElement('div');
        secondDiv.className = "d-flex border product-row d-block";
        let tableau = document.createElement('table');
        tableau.className = "table";
        let thead = document.createElement('thead');
        let firstRow = document.createElement('tr');
        let tableTitle = document.createElement('th');
        tableTitle.colspan = "4";
        tableTitle.innerText = "Récapitulatif de la commande";
        let tbody = document.createElement('tbody');
        let secondRow = document.createElement('tr');
        let thirdRow = document.createElement('tr');
        let firstCell1 = document.createElement('td');
        let firstCell2 = document.createElement('td');
        let firstCell3 = document.createElement('td');
        let firstCell4 = document.createElement('td');
        let secondCell1 = document.createElement('td');
        let secondCell2 = document.createElement('td');
        let secondCell3 = document.createElement('td');
        let secondCell4 = document.createElement('td');
        let img = document.createElement('img');

        firstCell1.innerText = "Item";
        firstCell2.innerText = "Aperçu";
        firstCell3.innerText = "Prix";
        firstCell4.innerText = "Quantité";

        secondCell1.innerText = ours[i].name;
        img.src = ours[i].imageUrl;
        img.className = "img-mini";
        secondCell3.innerText = ours[i].price/100+"€";
        secondCell4.innerText = "1";

        cartItems.appendChild(firstDiv);
        firstDiv.appendChild(secondDiv);
        secondDiv.appendChild(tableau);
        tableau.appendChild(thead);
        thead.appendChild(firstRow);
        firstRow.appendChild(tableTitle);
        tableau.appendChild(tbody);
        tbody.appendChild(secondRow);
        tbody.appendChild(thirdRow);
        secondRow.appendChild(firstCell1);
        secondRow.appendChild(firstCell2);
        secondRow.appendChild(firstCell3);
        secondRow.appendChild(firstCell4);
        thirdRow.appendChild(secondCell1);
        thirdRow.appendChild(secondCell2);
        secondCell2.appendChild(img);
        thirdRow.appendChild(secondCell3);
        thirdRow.appendChild(secondCell4);
    }
} */