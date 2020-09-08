$(document).ready(function(){

 	
 	$("#age_verify").submit(
 		function() {
 			var isValid = true;
 			
 			//validate age - do calculation
 			var yearBorn = $("#year").val().trim();
 			var x = new Date();
 			var currentYear = x.getFullYear();
 			var age = currentYear - yearBorn; 	//calculate age 
 			if (yearBorn == "") {
 				$("#year").next().text("You must enter a year");
 				isValid=false;
 			}
 			else if(age < 21) {
 				$("#year").next().text("You are underage and cannot book a factory tour.");
 				isValid = false;
 			}
 			else{ 
 				$("#year").next().text("");
 			}
 		
 			$("#year").val(yearBorn);
 			
 			if (isValid == false) {
			 	event.preventDefault();
			}

 		}
 	);


 	
      var date_input=$('input[name="date"]'); //our date input has the name "date"
      var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
      var options={
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
      };
      date_input.datepicker(options);
   
});


$(document).ready(function(){
			var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
			          "format=json&jsoncallback=?&tags=beer";
	
			$.getJSON(url, function(data){
				var html = "";
				$.each(data.items, function(i, item){
					html += item.description;
				});
				$("#photos").html(html);
			});          
        });

