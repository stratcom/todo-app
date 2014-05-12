$(document).ready(function(){

	var todos = '';
	function fromStorage() {
		// get entries from localstorage if they exist.
		// populate the list with entries and ids.
		if(localStorage && localStorage.length > 0) {

			// run populateList to insert all the entries
			// populateList();
		} else {
			var a = [];
			localStorage.setItem('todos',JSON.stringify(a));
		}
		// setListners after the list has been built.
		setListeners();
	}	

	function setListeners(){
		//keystroke
		$("#new-todo").keyup(function(e){
			//do stuff here
			checkInput(e);
		});
	}		    	
			
	function checkInput(e) {
		// if enter key
		if(e.keyCode == 13){
			//no longer insertEntry();
			//save the entry to localStorage
			saveEntry();
			console.log("enter key pressed");
			//if esc key			
		}
		else if (e.keyCode == 27) {
			//clear input box
			console.log("esc key pressed");
		};
	}
	// build list based on the contents of localStorage
	function populateList() {
		for (var i = localStorage.length - 1; i >= 0; i--) {
			//localStorage[i]
			console.log("Entries in localStorage");
		};
	} 

	function insertEntry(entry, id) {
		 		var entry = $('#new-todo').val();
 				$('.template li').clone().appendTo('#todo-list');
 				$('#todo-list li:last-child label').text(entry);
 				$('#todo-list li:last-child').attr('data-id',id);
				$('#new-todo').val('');
	}			

	
			

	//checkmark=click
	//complete all - click
	//remove all completed
	//delete-click
	//hover
	//all/active/complted - click

							

});

	

















