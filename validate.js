$(function(){
  $("#nav-placeholder").load("nav.html");
});

$(document).ready(function() {
	
	
	$("#email_form").submit(
		function() {
			var isValid = true;
			
			//validate email
			var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
			var email = $("#email").val().trim();
			if (email == "") { 
				$("#email").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email").next().text("");
			}
			$("#email").val(email);

			
			//validate first name + text-only
			var firstText = /^[a-zA-Z\s]*$/;
			var firstName = $("#first_name").val().trim();
			if (firstName == ""){
				$("#first_name").next().text("This field is required.");
				isValid = false;
			} else if( !firstText.test(firstName)){
				$("#first_name").next().text("Must be text-only entry");
				isValid = false;
			} 
			else {
				$("#first_name").next().text("");
			}
			$("first_name").val(firstName);
			
			//validate last name + text only
			var lastText = /^[a-zA-Z\s]*$/
			var lastName = $("#last_name").val().trim();
			if (lastName == "") {
				$("#last_name").next().text("This field is required.");
				isValid = false;
			} else if (!lastText.test(lastName)){
				$("#last_name").next().text("Must be text-only entry");
			}
				else {
				$("#last_name").next().text("");
			}
			$("#last_name").val(lastName);
						
			//validate zip + numeric only  //MAKE NUMERIC ONLY!
      var zipText = /^\d+$/
			var zip = $("#zip").val().trim();
			if(zip == ""){
				$("#zip").next().text("This field is required");
				isValid = false;
			}
			else if(zip.length != 5 || !zipText.test(zip)) {
				$("#zip").next().text("Use a 5 digit zip code");
				isValid = false;
			}
			else{
				$("#zip").next().text("");
			}
			$("zip").val(zip);
			
			
			var checkBoxes = [];
			checkBoxes = $(":checkbox:checked");
				
						
			// prevent the default action of submitting the form if any entries are invalid 
			if (isValid == false) {
			 			event.preventDefault();
			}
		} 
	);	
}); 