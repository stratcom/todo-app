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

	function uuid() {
  			var i, random;
			var uuid = '';

		for (i = 0; i < 32; i++) {
			random = Math.random() * 16 | 0;
			if (i === 8 || i === 12 || i === 16 || i === 20) {
				uuid += '-';
			}
			uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
		}
		return uuid;
  	}
  	
  		function saveEntry(entry) {
		var entry = $('#new-todo').val();
		var id = uuid();
		var todoEntry = {
			'id':id,
			'name':entry,
			}
		localStorage.setItem('Todos', JSON.stringify(todoEntry));
		
		/*        todos = [];
		    } else {
		        // Parse the serialized data back into an array of objects
		        todos = JSON.parse(localStorage.getItem('todos'));*/
		}







  	//}				

  	// $(function() {
  	// 'id':id,
  	//		'name':entry
	
			
	// finish local storage
	//checkmark=click
	//complete all - click
	//remove all completed
	//delete-click
	//hover
	//all/active/complted - click

							

});

	

















