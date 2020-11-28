var carts = document.querySelectorAll(".add-cart");
var products = [
	{
		name: "Ladis Tshart",
		tag: "ladistshart",
		price: 34,
		inCart: 0
	},
	{
		name: "Grey Tshart",
		tag: "greytshart",
		price: 25,
		inCart: 0
	},
	{
		name: "Orange-Tshart",
		tag: "orangetshart",
		price: 56,
		inCart: 0
	},
	{
		name: "Grey-Hoddi",
		tag: "greyhoddi",
		price: 29,
		inCart: 0
	}
];

for (var i = 0; i < carts.length; i++) {
	carts[i].addEventListener("click", () => {
		cartsNumber(products[i]);
	});
}

function onLoadNumbers() {
	var productNumber = localStorage.getItem("cartsNumber");

	if (productNumber) {
		document.querySelector(".cart span").textContent = productNumber;
	}
}

function cartsNumber(products) {
	var productNumber = localStorage.getItem("cartsNumber");

	productNumber = parseInt(productNumber);

	if (productNumber) {
		localStorage.setItem("cartsNumber", productNumber + 1);
		document.querySelector(".cart span").textContent = productNumber + 1;
	} else {
		localStorage.setItem("cartsNumber", 1);
		document.querySelector(".cart span").textContent = 1;
	}
	setItems(products);
}

function setItems(products) {
	var cartItems = localStorage.getItem("productInCart");
	cartItems = JSON.parse(cartItems);

	if (cartItems != null) {
		if (cartItems[products.tag] == undefined) {
			cartItems = {
				...cartItems,
				[products.tag]: products
			};
		}
		cartItems[products.tag].inCart += 1;
	} else {
		products.inCart = 1;
		cartItems = {
			[products.tag]: products
		};
	}

	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(products) {
	var cartCost = localStorage.getItem("totalCost");

	console.log("My cartCost is", cartCost);
	console.log(typeof cartCost);

	if (cartCost != null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + products.price);
	} else {
		localStorage.setItem("totalCost", products.price);
	}
}

onLoadNumbers();

function displayCart() {
	var cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	var productContainer = document.querySelector(".products");

	console.log(cartItems);

	if (cartItems && productContainer) {
		productContainer.innerHTML += `
		<div class="product">
			<ion-icon name="close-circle"></ion-icon>
			<img src="./images/${item.tag}.jpg">
			<span>${item.name}</span>
		</div>`;
	}
}
displayCart();
