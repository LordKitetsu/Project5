let teddiesContainer = document.getElementById("teddiesContainer");
let showProducts = document.getElementById("afficherProduits");
// function to get all products from the server
async function getAllProducts() {
    let resp = await fetch(api);
    return await resp.json(); 
};
getAllProducts().then(teddies => {
    console.log(teddies);
    bindTeddiesToView(teddies);
});

function bindTeddiesToView(teddies) {
    teddies.forEach(teddy => {
        teddiesContainer.innerHTML += displayAllTeddiesView(teddy);
    });
    showProducts.append(teddiesContainer);
}

function displayAllTeddiesView(teddy){
    return (
        `
    <div  class="w-25 p-3 d-flex  flex-column align-items-center">
        <img class="img-fluid img-index item_img" src=${teddy.imageUrl} alt=${teddy.name} class="rounded" />
        <h4 class="item_name">${teddy.name}</h4>
        <h4 class="item_price">${teddy.price/100+",00€"}</h4>
        <button id="sendItemToCart" class="btn-primary addCart border-rounded">Personnaliser</button>
    </div>
        `
    );
    
}


// Personnaliser sur page product.html

let modifyItem = document.querySelectorAll("button");
console.log(modifyItem);

for (let i = 0; i < modifyItem.length; i++){ 
    console.log(modifyItem[i]) 
}
