let addressElements = document.querySelectorAll('#content .user-address');
addressElements.forEach(function (addressElement) {
	addressElement.onclick = function () {
		let currentAddress = document.querySelector('#content .user-address.chosen');
		if (currentAddress != null) {
			currentAddress.classList.remove("chosen");
			addressElement.classList.add("chosen");
		}
		else {
			addressElement.classList.add("chosen");
		}
	}
})
let paymentElements = document.querySelectorAll("#content .payment-item");
paymentElements.forEach(function (paymentElement) {
	paymentElement.onclick = function () {
		let currentAddress = document.querySelector("#content .payment-item.chosen");
		if (currentAddress != null) {
			currentAddress.classList.remove("chosen");
			paymentElement.classList.add("chosen");
		}
		else {
			paymentElement.classList.add("chosen");
		}
	}
})
let orderButton = document.querySelector("#content .cart-order-button")
orderButton.onclick = function () {
	let orderSection = document.querySelector("#content .order-container");
	orderSection.classList.add("display-block");
	orderSection.scrollIntoView({
		behavior: 'smooth'
	    })
}
let confirmButton = document.querySelector("#content .order-button")
confirmButton.onclick = function () {
	let cartID = document.getElementById("cart-id").innerHTML;
	let addressIDElement = document.querySelector('#content .user-address.chosen');
	if(addressIDElement==null){
		document.querySelector("#content .choose-address").scrollIntoView({
			behavior: 'smooth'
		    });
		let modalElement = document.getElementById("modal");
		modalElement.querySelector(".notice-title").innerHTML = "Please choose an address";
		modalElement.classList.add("display");
		return;
	}
	let paymentElement = document.querySelector("#content .payment-item.chosen");
	if(paymentElement==null){
		document.querySelector("#content .choose-payment-method").scrollIntoView({
			behavior: 'smooth'
		    });
		let modalElement = document.getElementById("modal");
		modalElement.querySelector(".notice-title").innerHTML = "Please choose a payment method";
		modalElement.classList.add("display");
		return;
	}
	let addressID = addressIDElement.querySelector(".addressid").innerHTML;
	let paymentID = paymentElement.querySelector(".payment-id").innerHTML;
	window.open(`#`,'_self');
}
let bookItemElement = document.querySelector("#content .book-item");
console.log(bookItemElement);
if(bookItemElement==null){
	document.querySelector("#content .cart-container").classList.add("display-none");
	document.querySelector("#content .empty-cart").classList.add("display");
}