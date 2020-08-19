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