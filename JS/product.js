let params = (new URL(document.location)).searchParams;
let idTeddy = params.get("id"); 

console.log(idTeddy);


async function getTeddy() {
    let response = await fetch(api+idTeddy);
    return await response.json();
};

getTeddy().then(teddies => {
    console.log(teddies);
    productToModify(teddies);
});



function productToModify(teddy) {
        let firstDiv = document.createElement('div');
        firstDiv.className= "container border bg-light";
        let secondDiv = document.createElement('div');
        secondDiv.className = "grid-product";
        let thirdDiv = document.createElement('div');
        thirdDiv.className = "grid-img";
        let img = document.createElement('img');
        img.className = "img-products";
        img.src = teddy.imageUrl;
        img.alt = teddy.name;
        let fourthDiv = document.createElement('div');
        fourthDiv.className = "grid-items-specs";
        let firstH4 = document.createElement('h4');
        firstH4.innerText = teddy.name;
        let form = document.createElement('form');
        form.className = "choix";
        let selection = document.createElement('select');
        let optionDefault =document.createElement('option');
        optionDefault.innerText = "Choisir un coloris";
        let option1 =document.createElement('option');
        option1.innerText = teddy.colors[0];
        let option2 = document.createElement('option');
        option2.innerText = teddy.colors[1];
        let button = document.createElement('button');
        button.innerText = "Ajouter";
        let secondH4 = document.createElement('h4');
        secondH4.innerText = (teddy.price / 100)+"€";
        let fifthDiv = document.createElement('div');
        fifthDiv.className = "grid-description";
        fifthDiv.innerText = teddy.description;
        modifyItem.appendChild(firstDiv);
        firstDiv.appendChild(secondDiv);
        secondDiv.appendChild(thirdDiv);
        thirdDiv.appendChild(img);
        secondDiv.appendChild(fourthDiv);
        fourthDiv.appendChild(firstH4);
        fourthDiv.appendChild(form);
        fourthDiv.appendChild(button);
        fourthDiv.appendChild(secondH4);
        form.appendChild(selection);
        selection.appendChild(optionDefault);
        selection.appendChild(option1);
        selection.appendChild(option2);
        secondDiv.appendChild(fifthDiv);
}

/* function productToModify(teddies) {
    teddies.forEach(teddy => {
        let firstDiv = document.createElement('div');
        firstDiv.className= "container border bg-light";
        let secondDiv = document.createElement('div');
        secondDiv.className = "grid-product";
        let thirdDiv = document.createElement('div');
        thirdDiv.className = "grid-img";
        let img = document.createElement('img');
        img.className = "img-products";
        img.src = teddy.imageUrl;
        img.alt = teddy.name;
        let fourthDiv = document.createElement('div');
        fourthDiv.className = "grid-items-specs";
        let firstH4 = document.createElement('h4');
        firstH4.innerText = teddy.name;
        let form = document.createElement('form');
        form.className = "choix";
        let selection = document.createElement('select');
        let optionDefault =document.createElement('option');
        optionDefault.innerText = "Choisir un coloris";
        let option1 =document.createElement('option');
        option1.innerText = teddy.colors[0];
        let option2 = document.createElement('option');
        option2.innerText = teddy.colors[1];
        let button = document.createElement('button');
        button.innerText = "Ajouter";
        let secondH4 = document.createElement('h4');
        secondH4.innerText = (teddy.price / 100)+"€";
        let fifthDiv = document.createElement('div');
        fifthDiv.className = "grid-description";
        fifthDiv.innerText = teddy.description;
        modifyItem.appendChild(firstDiv);
        firstDiv.appendChild(secondDiv);
        secondDiv.appendChild(thirdDiv);
        thirdDiv.appendChild(img);
        secondDiv.appendChild(fourthDiv);
        fourthDiv.appendChild(firstH4);
        fourthDiv.appendChild(form);
        fourthDiv.appendChild(button);
        fourthDiv.appendChild(secondH4);
        form.appendChild(selection);
        selection.appendChild(optionDefault);
        selection.appendChild(option1);
        selection.appendChild(option2);
        secondDiv.appendChild(fifthDiv);
    })
} */