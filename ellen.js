//Get APIs

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="
var apiKey = "ddf031eb741448191855d74eeb2a8769";

function outfitURL(temp, gender) {
    var baseURL = "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?country=us&lang=en&productcode="

    if (temp < 43) {
        if (gender == 'female'){
            baseURL += "0844549001";
        }else{
            baseURL += "0768509002";
        } 

    } else if (temp >= 43 || temp < 60) {
        if (gender == 'female'){
        baseURL += "0831174001";
        }else{
            baseURL += "0815456001";
        }

    } else if (temp >= 60 || temp < 79) {
        if (gender == 'female'){
        baseURL += "0877240001";
    }else{
        baseURL += "0649098003";
    }

    } else if (temp >= 79) {
        if (gender == 'female'){
        baseURL += "0820865001";
    }else{
        baseURL += "0685604050";
    }
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
                url: outfitURL(result.main.temp, "female"),
                method: "GET",
                headers: {
                    "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
                    "x-rapidapi-key": "e7af92b741mshd9df9fa01f23716p1e2f54jsnfc970bbe8ebe"
                }
            }).then(function (result) {

                $(".outfit-female").text(result.product.name);
                $(".outfitUrl-female").text(result.product.productUrl);


                console.log(result.product.name,result.product.productUrl);

            });
            $.ajax({
                async: true,
                crossDomain: true,
                url: outfitURL(result.main.temp, "male"),
                method: "GET",
                headers: {
                    "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
                    "x-rapidapi-key": "e7af92b741mshd9df9fa01f23716p1e2f54jsnfc970bbe8ebe"
                }
            })

            .then(function (result) {

                $(".outfit-male").text(result.product.name);
                $(".outfitUrl-male").text(result.product.productUrl);


                console.log(result.product.name,result.product.productUrl);

            });
        })
        // IF STATEMENTS that parse out the weather in destination
        // and form a request url for desired products
    });
})
