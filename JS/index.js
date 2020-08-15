let teddiesContainer = document.getElementById("teddiesContainer");
let showProducts = document.getElementById("afficherProduits");
let modifyItem = document.getElementById('modifyItem');

showProducts.append(teddiesContainer);

getAllProducts().then(teddies => {
    console.log(teddies);
    bindTeddiesToView(teddies);
});


function bindTeddiesToView(teddies) {
    teddies.forEach(teddy => {
        let div = document.createElement('div');
        div.className = "w-25 p-3 d-flex flex-column align-items-center";
        let img = document.createElement('img');
        img.className = "img-fluid img-index item_img rounded";
        img.src = teddy.imageUrl;
        img.alt = teddy.name;
        let firstH4 = document.createElement('h4');
        firstH4.className = "item_name"
        firstH4.innerText = teddy.name;
        let secondH4 = document.createElement('h4');
        secondH4.className = "item_name"
        secondH4.textContent = (teddy.price / 100) + "€"
        let button = document.createElement('button');
        button.id = "sendItemToCart"
        button.className = "btn-primary addCart border-rounded"
        button.innerText = "Personnaliser"
        teddiesContainer.appendChild(div);
        div.appendChild(img);
        div.appendChild(firstH4);
        div.appendChild(secondH4);
        div.appendChild(button);

        button.addEventListener('click', () => {
            window.location.href = "products.html?id=" + teddy._id;

        })
    });
}




