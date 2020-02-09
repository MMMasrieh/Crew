//Get APIs

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="
var apiKey = "ddf031eb741448191855d74eeb2a8769";
var userInput = "forty fort, pensylvania";


$("#tb").click(function(){

$.ajax(
    {url: queryURL + userInput + "&units=imperial&appid=" + apiKey,
     method: "GET"
 }).then(function(result) {

 $(".tempEl").text(result.main.temp)
 $(".skyEl").text(result.weather[0].main)

 console.log (result.main.temp, result.weather[0].main)
  })
 

 $.ajax(
    {url: queryURL + userInput + "&units=imperial&appid=" + apiKey,
     method: "GET"
 }).then(function(result) {
 
 console.log (result)
 })
});