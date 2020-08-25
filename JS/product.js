// Requête GET pour un ourson unique.

getTeddy().then(teddies => {
    // console.log(teddies);
    productToModify(teddies);
});

// Déclaration de variable dans laquelle contenir les objets.

let bearBox = [];

// Fonction qui crée le code à injecter dans le HTML

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
        let firstH3 = document.createElement('h3');
        firstH3.innerText = (teddy.price / 100)+"€";
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
        fourthDiv.appendChild(firstH3);
        form.appendChild(selection);
        selection.appendChild(optionDefault);
        selection.appendChild(option1);
        selection.appendChild(option2);
        secondDiv.appendChild(fifthDiv);
       
        //Création de Classe pour intégrer la quantité.
        class Teddy {
            constructor(colors, description, imageUrl, name, price, id, quantity){
                this.colors = colors;
                this.description = description;
                this.imageUrl = imageUrl;
                this.name = name;
                this.price = price;
                this.id = id;
                this.quantity = quantity;
            }
        }
        // Sur le clic : Ajouter 1 à la quantité si l'objet est présent.
        // Ajouter l'objet s'il est absent.
        // Enregistrer dans le localStorage et aller à la page cart.html
        button.addEventListener('click', () => {
            if (localStorage.length === 0) {
                console.log(teddy);
                bearBox.push(new Teddy(teddy.color, teddy.description, teddy.imageUrl, teddy.name, teddy.price, teddy._id, 1));
                localStorage.setItem('ours', JSON.stringify(bearBox));
                window.location.href = "cart.html";
            } else {
                let bearFactory = JSON.parse(localStorage.getItem('ours'));
                let productAlreadyAdded = false;
                for(let i in bearFactory){
                    if(teddy._id === bearFactory[i].id){
                        productAlreadyAdded = true;
                        bearFactory[i].quantity += 1;
                    }
                }
                if(!productAlreadyAdded){
                    bearFactory.push(new Teddy(teddy.color, teddy.description, teddy.imageUrl, teddy.name, teddy.price, teddy._id, 1));
                }
                localStorage.setItem('ours', JSON.stringify(bearFactory));
                window.location.href = "cart.html";
            }
            
        })
}

