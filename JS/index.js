let showProducts = document.getElementById("afficherProduits");
function loadProducts(data){
    //Load Product data
    let heading_name = createHTMLElement('h4');
    let para_description = createHTMLElement('p');
    let para_price = createHTMLElement('p');
    let teddy_img = createHTMLElement('img');

    data.forEach(teddy => {
        heading_name.innerHTML = teddy.name;
        para_description.innerText = teddy.description;
        para_price.innerText = teddy.price;
        teddy_img.src = teddy.imageUrl;
        showProducts.append(heading_name);
        showProducts.append(para_description);
        showProducts.append(para_price);
        showProducts.append(teddy_img);
    });

}


function createHTMLElement(elementType) {
    let element = document.createElement(elementType);
    return element;
}

// function to get all products from the server
async function getAllProducts(){
    let resp = await fetch(api);
    let data = await resp.json(); // rettourne l'objet de donnée JS

    console.log(data);
   // return data;
    loadProducts(data);
};
let teddies_data = getAllProducts();

