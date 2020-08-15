const api = "http://localhost:3000/api/teddies/";

// function to get all products from the server
async function getAllProducts() {
    let response = await fetch(api);
    return await response.json();
};

