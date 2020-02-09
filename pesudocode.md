Location destination

Tempature




Main task -updating interface

function display(title, ingrdients)
{
    console.log(title, ingrdients)
}
$.ajax(
    {
        url:""
        method:"GET"
    }
)


    var weather = "";
    var queryURL =api.openweathermap.org/data/2.5/weather?q={city name},{state},{country code}&appid={your api key}

    

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
         
      var tempEl = $("").text(response.main.temp);
      var skyEl = $("").text(response.weather.[1]);
      

       "".append(temperature, location, condition;
      $("").append("");
    });

    $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          $("#").text(JSON.stringify(response));
        });