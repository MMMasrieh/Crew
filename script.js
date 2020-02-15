var APIKey = "ddf031eb741448191855d74eeb2a8769";
var userInput = "miami,florida"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput  + "&units=imperial&apikey=" + APIKey;





$.ajax({
  url: queryURL,
  method: "GET"
})
.then(function(result) {
    console.log(result)
  

    $(".city").html("<h1>" + result.name + " Weather Details</h1>");
    $("#weather-temp")
      .append("Temperature: " +result.main.temp)
      .append( "<br/>" )
      .append("Sky Condition: " + result.weather[0].main);
      
  
    });
    $(document).ready(function(){
      $("button").click(function(){
        $.ajax({url: "https://api.openweathermap.org/data/2.5/weather?q=", function(result){
          $("#div1").html(result);
        }});
      });
    });
    
    
    
/*var current = $.now();
var maxDate = new Date(current);
var currentDate = maxDate.toString();
$('#date').html(currentDate);*/

