let subtractElements = document.querySelectorAll("#content .book-subtract");
let plusElements = document.querySelectorAll("#content .book-plus");
subtractElements.forEach(function(subtractElement){
	subtractElement.onclick = function(){
		let quantityElement = subtractElement.parentElement.querySelector(".book-quantity");
		let quantity = parseInt(quantityElement.innerHTML);
		if(quantity==1){
			return;
		}
		else{
			quantityElement.innerHTML = quantity-1;
		}
	}
})
plusElements.forEach(function(plusElement){
	plusElement.onclick = function(){
		let quantityElement = plusElement.parentElement.querySelector(".book-quantity");
		let quantity = parseInt(quantityElement.innerHTML);
		quantityElement.innerHTML = quantity+1;
	}
})
let addBookElements = document.querySelectorAll("#content .book-add-button")
addBookElements.forEach(function(addBookElement){
	addBookElement.onclick = function(e){
		let bookID = addBookElement.parentElement.parentElement.querySelector(".book-id").innerHTML;
		let bookQuantity = addBookElement.parentElement.parentElement.querySelector(".book-quantity").innerHTML;
		console.log(bookID + " " + bookQuantity)
		window.open(`https://duc-ju.github.io/bookstore-template/Cart.html`,"_self");
	}
})