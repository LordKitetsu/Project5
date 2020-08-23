const api = "http://localhost:3000/api/teddies/";

// function to get all products from the server
async function getAllProducts() {
    let response = await fetch(api);
    return await response.json();
};

let params = (new URL(document.location)).searchParams;
let idTeddy = params.get("id"); 

async function getTeddy() {
    let response = await fetch(api+idTeddy);
    return await response.json();
};

function createCommand() {
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
  }


  
let total = 0;


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