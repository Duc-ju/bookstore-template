function showConfirmationAll(){
	let modal = document.getElementById("modal");
	modal.classList.add("display");
}
function cancelAllModal(){
	let modal = document.getElementById("modal");
	modal.classList.remove("display");
}
function showConfirmationBook(){
	let buttons = document.querySelectorAll(".book-delete-button");
	buttons.forEach(function(button){
		button.onclick = function(e){
			button.parentElement.querySelector(".modal").classList.add("display");
			e.preventDefault();
		}
	})
}
showConfirmationBook()
function cancelBookModal(){
	let cancelButtons = document.querySelectorAll(".delete-book-modal .modal-cancel")
	let modals = document.querySelectorAll(".delete-book-modal");
	cancelButtons.forEach(function(cancelButton){
		cancelButton.onclick = function(e){
			modals.forEach(function(modal){
				if(modal.classList.contains("display")){
					modal.classList.remove("display");
				}
			})
			e.stopPropagation();
		}
	})
	
}
cancelBookModal()
