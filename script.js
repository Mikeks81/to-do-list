$(document).ready(
	function(){

		// ################### DATE ############################

		var months = ["January","February","March","April",
						"May","June","July","August","September",
						"October","November","December"]
		var date = new Date(); // new date instance in numerical form
		var day = date.getDate(); // numerical form of day of the month
		var month = date.getMonth(); // numerical form of month of the year
		var year = date.getFullYear(); // full 4 digit numerical form of year
		var dateOfList = (months[month]+ " " + day + ", " + year) // instance date of list
		$("h4").text(dateOfList); //the value of month displays item in months Array to screen

		// ################# ADDING ITEMS ###############

		$("#add_button").on('click', // on add_button click 
			function(e){
				e.preventDefault();  // prevents add button from refreshing page
				var counter =  0
				var id = ("item" + counter) // unique id's for checkboxes
				var userInput = $("#input").val(); // value from input field
				
				if  (userInput === ""){ // if #input is blank
					$("#confirmation_box").fadeIn(100);
					$("#confirm_ok").show();
					$("#confirm_yes").hide();
					$("#confirm_no").hide();
					$("#confirm_msg").text("Enter text!");
					$("#confirm_ok").on("click",
						function(){
							$("#confirmation_box").fadeOut(100);
						});
					return false
				}
				else {
					$("#list").append('<span><input type="checkbox"/>' + userInput + '<br>'); // adds new checkbox 
					counter++ // trying to add to var counter 
				}
				// $("#list").find("input").attr("id",id);//trying to get unique id's to inpputs
				$("#input").val("");// clears #input

		});		

		// ###################### SELECTING ITEMS #####################

		var amountChecked = $("#list input:checked").length; // code won't work out herer.... some scoping issue i don't understand

		// ######################## DELETING ITEMS ####################

		$("#delete_button").on("click", 
			function(e){
				var amountChecked = $("#list input:checked").length; // number of to be deleted.
				e.preventDefault(); // cancel page refresh on click
				$("#confirm_ok").hide();
				$("#confirm_msg").text("Are you sure you sure you want to delete these " +amountChecked+ " item(s)?");
				$("#confirmation_box").fadeIn(100); // show confirm box


		});
		
		$("#confirm_yes").on("click", // on click of confirm button yes
			function(){	
				$("#list input:checked").parent().remove();
				$("#list input:checked").remove(); // remove selected items in list
				$("#confirmation_box").fadeOut(100); // hide confirm box
		});
		$("#confirm_no").on("click", // if no on delete hide confirm box
			function(){
				$("#confirmation_box").fadeOut(100);
		});		
});