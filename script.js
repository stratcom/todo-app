$(document).ready(function(){

	// set up listeners
	function setListeners(){
		//keystroke
		$("#new-todo").keyup(function(e){
			//do stuff here
			checkInput(e);
		});
	}		    	
			
	function checkInput(e) {
		if(e.keyCode == 13){
			insertEntry();
			console.log("enter key pressed");
		}
		else if (e.keyCode == 27) {
			//clear input box
			console.log("esc key pressed");
		};

	}

	
			
							

		});

	






	//checkmark=click
	//complete all - click
	//remove all completed
	//delete-click
	//hover
	//all/active/complted - click

})