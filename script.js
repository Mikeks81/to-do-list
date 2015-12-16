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

		// ################# FUNCTIONS!!! #####################

		function yes(){
			$("#confirm_yes").on("click", // on click of confirm button yes *** thinking i can make this a function to be called with select all
				function(){	
					$("#list input:checked").parent().remove(); // removes the span tags that surround the input
					$("#list input:checked").remove(); // remove selected items in list
					$("#confirmation_box").fadeOut(100); // hide confirm box
			});
		}

		function no(){
			$("#confirm_no").on("click", // if no on delete hide confirm box
				function(){
					$("#confirmation_box").fadeOut(100);
			});	
		}

		function ok(){
			$("#confirm_ok").on("click", // on click of OK button do function
				function(){
					$("#confirmation_box").fadeOut(100);
				});
		}

		function okBox(){
			$("#confirm_ok").show();
			$("#confirm_yes").hide(); 
			$("#confirm_no").hide();
			$("#confirmation_box").fadeIn(100); 
		}

		function yesNoBox(){
			$("#confirm_ok").hide();
			$("#confirm_yes").show(); 
			$("#confirm_no").show();
			$("#confirmation_box").fadeIn(100);  
		}


		// ################# ADDING ITEMS ###############

		$("#add_button").on('click', // on add_button click 
			function(e){
				e.preventDefault();  // prevents add button from refreshing page
				var userInput = $("#input").val(); // value from input field
				
				if  (userInput === ""){ // if #input is blank
					okBox();
					$("#confirm_msg").text("Enter text!"); // DOM manip 
					ok()
					return false
				}
				else {
					$("#list").append('<span><input type="checkbox"/>' + userInput + '<br>'); // adds new checkbox 
				}
				$("#input").val("");// clears #input

		});		

		// ######################## DELETING ITEMS ####################

		$("#delete_button").on("click", 
			function(e){
				e.preventDefault(); // cancel page refresh on click
				var amountChecked = $("#list input:checked").length; // number of to be deleted.
				if (amountChecked == 0) {
					okBox();
					$("#confirm_msg").text("Please Select an entry to delete.");
					ok();
				}
				else{
					yesNoBox()
					$("#confirm_msg").text("Are you sure you sure you want to delete these " +amountChecked+ " item(s)?");
					yes();
					no();
				}
		});

		$("#select_all").on("click",
			function(e){
				e.preventDefault();
				$("#list input").attr("checked",true);
				var amountChecked = $("#list input:checked").length;// number of checked again
				if (amountChecked == 0){
					$("#confirm_msg").text("You have no entries to delete!");
					okBox();
					ok()
				}
				else{
					$("#confirm_msg").text("Would you like to delete all entries?");
					yesNoBox();
					yes();
					no();
				}

			});
});