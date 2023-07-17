const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIconBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navShopping = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

// Funciones para aparecer y desaparecer menúes con un click
navEmail.addEventListener('click', () => {
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
	  productDetailContainer.classList.add('inactive');
});

menuIconBurger.addEventListener('click',() => {
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
		productDetailContainer.classList.add('inactive');
});

navShopping.addEventListener('click', () => {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive')
    shoppingCartContainer.classList.toggle('inactive');
	  productDetailContainer.classList.add('inactive');
})

productDetailCloseIcon.addEventListener('click', () => {
		productDetailContainer.classList.add('inactive');
})


const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Display",
    price: 220,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Computer",
    price: 350,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});


function renderProducts(arr) {
    for ( product of arr ) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.img);
				img.addEventListener( 'click', () => {
					productDetailContainer.classList.remove('inactive');
				})
    
        // Etiqueta padre de información de productos
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        // Elementos de precio, nombre
        const productInfoDiv = document.createElement('div');
        const productName = document.createElement('p');
        productName.innerText = product.name;
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + ' ' + product.price;
        productInfoDiv.append(productName, productPrice);
    
        // Etiqueta figure
        const iconAddToCart = document.createElement('figure');
        const iconImg = document.createElement('img');
        iconImg.setAttribute('src', "./icons/bt_add_to_cart.svg");
        iconAddToCart.append(iconImg);
    
        productInfo.append(productInfoDiv, iconAddToCart);
    
        productCard.append(img, productInfo);
    
        cardsContainer.append(productCard);
    
    }
};

renderProducts(productList);
