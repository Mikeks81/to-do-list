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
		var date_of_list = (months[month]+ " " + day + ", " + year) // instance date of list
		$("h4").text(date_of_list); //the value of month displays item in months Array to screen


		// ############## Item Hover ###############################



		// ################# ADDING AND DELETING ITEMS ###############

		$("#add_button").on('click', // on add_button click 
			function(e){
				e.preventDefault();  // prevents add button from refreshing page
				var counter =  0
				var id = ("item" + counter) // unique id's for checkboxes
				var user_input = $("#input").val(); // value from input field
				
				if  (user_input === ""){ // if #input is blank
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
				$("#list").append('<span><input type="checkbox" id="item">' + user_input + '</input><br>'); // adds new checkbox 
				counter++ // trying to add to var counter 
				}
				// $("#list").find("input").attr("id",id);//trying to get unique id's to inpputs
				$("#input").val("");// clears #input

		});		


		$("#delete_button").on("click", 
			function(e){
				e.preventDefault(); // cancel page refresh on click
				$("#confirm_ok").hide();
				$("#confirm_msg").text("Are you sure you sure you want to delete last item?");
				$("#confirmation_box").fadeIn(100);
				$("#confirm_yes").on("click",
					function(){
						$("#list span").last().remove();
						$("#confirmation_box").fadeOut(100);
				});
				$("#confirm_no").on("click",
					function(){
						$("#confirmation_box").fadeOut(100);
				});
				


				// ##################
				// var user_confirm = $("#confirm_msg").text("Are you sure you sure you want to delete items?");
				// var find_input = $("#list").find("input"); // finds all inputs created in #list
				// var selected_inputs = $("#list").find("input").prop("checked"); //directs to #list inputs that are true
				// $("#item").last();


				// console.log(selected_inputs);
				// 	if (selected_inputs == true) {

				// 	}



				//############# using custom prompt confirmation #########
				// if (selected_inputs == true) { 
				// 	console.log("GOT HERE2");// ##################
				// 	$("#confirm_msg").text("Are you sure you sure you want to delete items?");
				// 	$("#confirmation_box").fadeIn();
				// 	console.log("GOT HERE 2.5!!");
				// 		 if ($("#confirm_no").on("click")) { //press of no button
				// 		 		$("#confirmation_box").hide();
				// 		 } 
				// 		else if ($("#confirm_yes").on("click")) { //press of yes button
				// 					console.log("GOT HERE3");// ##################
				// 					$(selected_inputs).hide(); // doesn't hide anything even the first selection that is recognized as true.????
				// 		}

				// }
				// else {

				// }	


		});
});