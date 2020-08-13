// Clear cart sur cart.html
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', clearCart)
} else {
    clearCart();
}

function clearCart() {
    var removeCartItemButton = document.getElementsByClassName('remove');
    var button = removeCartItemButton[0];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target.parentElement.parentElement.remove();
        alert('Votre panier est vide.');
    })    
}
