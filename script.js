$(function(){

	var todos = '';
	function fromStorage() {
		// get entries from localstorage and populate the list.
		if(localStorage && localStorage.length > 0) {
			// run fillList to insert all the entries
		} else {
			var a = [];
			localStorage.setItem('todos',JSON.stringify(a));
		}
		// setListners after the list has been built.
		fillList();
		setListeners();
	}	
	function setListeners(){
		//keystroke listen for
		$("#new-todo").keyup(function(e) {
			//do stuff here
			checkInput(e);
		});

		$('#toggle-all').on('click', function() {
			// console.log($(this).is(':checked'));
			toggleAllComplete();
		})

	}	
	// event listener &
	//checkmark strikes through text if checked using type 'checkbox'

	// double click on to do opens up the edit function
	// will use toggle-all to add and remove classes
	// tht t0-do-list .edit and editing funcctions

	function checkInput(e) {
		// if enter key
		if(e.keyCode == 13){
			//save the entry to localStorage
			saveEntry();
			console.log("enter key pressed");
		}
		//if esc key
		else if (e.keyCode == 27) {
			//clear input box
			stopEditing();
			console.log("esc key pressed");
		}
	}
	function stopEditing(){
		$('.editing').removeClass('editing');
		$('.edit').val('');
	}



	// build list based on the contents of localStorage
	function fillList() {
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
		var id = uuid();
		var todoEntry = {
			'id':id,
			'name':entry,
		}

		

	var a = [];
				if (localStorage.getItem('todos') === null) {
			        a = [];
			    } else {
			        // Parse the serialized data back into an array of objects
			        a = JSON.parse(localStorage.getItem('todos'));
			    }

		    // Push the new data (whether it be an object or anything else) onto the array
		    a.push(todoEntry);
		    // Re-serialize the array back into a string and store it in localStorage
		    localStorage.setItem('todos', JSON.stringify(a));

			// localStorage.setItem('Todos', JSON.stringify(todoEntry));

			insertEntry(entry,id);
		}

	fromStorage();


  	

	// event listener &
	//complete all - click makes all completed -- check and 
	//strike through and toggles all on and off

	//remove all completed
	
	// event listener &
	//delete-click on "x" removes the item

	//all/active/complted - click

							

});

	

















