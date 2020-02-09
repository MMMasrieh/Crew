var APIKey = "ddf031eb741448191855d74eeb2a8769";
var userInput = "miami,florida"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput  + "&units=imperial&apikey=" + APIKey;

$.ajax({
  url: queryURL,
  method: "GET"
})
.then(function(result) {
    console.log(result)

    console.log(result.clouds.all)

    $(".city").html("<h1>" + result.name + " Weather Details</h1>");
    $("#weather-temp")
      .append("Temperature: " +result.main.temp)
      .append( "<br/>" )
      .append("Clouds: " + result.clouds.all);
      

    
    
    });
