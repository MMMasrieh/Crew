//Get APIs

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="
var apiKey = "ddf031eb741448191855d74eeb2a8769";

function outfitURL(temp) {
    var baseURL = "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?country=us&lang=en&productcode="

    if (temp < 63) {
        baseURL += "0551504010";

    } else if (temp >= 63) {
        baseURL += "0742561001";
    };

    return baseURL

}

$(document).ready(function () {

    $("#submit").click(function (event) {


        var city = $("#city").val();
        var state = $("#state").val();

        $.ajax({
            url: queryURL + city + "," + state + "&units=imperial&appid=" + apiKey,
            method: "GET"
        }).then(function (result) {

            $(".tempEl").text(result.main.temp);
            $(".skyEl").text(result.weather[0].main);

            //console.log(result.main.temp, result.weather[0].main);
            
        

            $.ajax({
                async: true,
                crossDomain: true,
                url: outfitURL(result.main.temp),
                method: "GET",
                headers: {
                    "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
                    "x-rapidapi-key": "e7af92b741mshd9df9fa01f23716p1e2f54jsnfc970bbe8ebe"
                }
            })
            .then(function (result) {

                console.log(result);

            });
        })
        // IF STATEMENTS that parse out the weather in destination
        // and form a request url for desired products
    });
})
