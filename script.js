$(document).ready(function(){

	// set up listeners
	function setListeners(){
		//keystroke
		$("#new-todo").keyup(function(e){
			if(e.keystroke==13){
			//do stuff here
			//console.log("enter key was pressed");
                // get the entry
                var newentry = this.value;
                //console.log(newentry);				
			};
		});
	};

	






	//checkmark=click
	//complete all - click
	//remove all completed
	//delete-click
	//hover
	//all/active/complted - click

})