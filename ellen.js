//Get APIs

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="
var apiKey = "ddf031eb741448191855d74eeb2a8769";
var userInput = "carbondale,pennsylvania";


$(document).ready(function(){

$("#tb").click(function(){

    var tempEl = $("result.main.temp").val();
    var skyEl = $("result.weather[0].main").val();

$.ajax(
    {url: queryURL + userInput + "&units=imperial&appid=" + apiKey,
     method: "GET"
 }).then(function(result) {

 $(".tempEl").text(result.main.temp);
 $(".skyEl").text(result.weather[0].main);

 console.log (result.main.temp, result.weather[0].main);
  })
 


  $.ajax({
    async: true,
    crossDomain: true,
    url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?country=us&lang=en&productcode=0697814004",
    method: "GET",
    headers: {
        "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        "x-rapidapi-key": "e7af92b741mshd9df9fa01f23716p1e2f54jsnfc970bbe8ebe"
    }
}).done(function(result) {

   // var cold= (<40) API result that includes parkas/scarfs/gloves *the image will link to the purchase page
   // var cool= (>=41||<=60) API result that includes wool-sweaters/jaclets/sweatshirts*
   // var warm= (>=61||<=80) API result that includes cotton/light clothes  
   // var warm= (>=81) API result that includes cotton/shorts/skirts

console.log (result)
 
 });
});
});
