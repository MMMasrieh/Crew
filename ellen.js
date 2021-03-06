//Get APIs

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="
var apiKey = "ddf031eb741448191855d74eeb2a8769";

function outfitURL(temp, gender) {
    var baseURL = "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?country=us&lang=en&productcode="

    if (temp < 50) {
        if (gender == 'female'){
            baseURL += "0844549001";
           $("#image1").attr("src", "assets/images/outfit/female/cold-0844549001.jpg"); 
        }else{
            baseURL += "0768509002";
            $("#image2").attr("src", "assets/images/outfit/male/cold-0768509002.jpg");
        } 

    } else if (temp >= 50 && temp < 70) {
        if (gender == 'female'){
        baseURL += "0831174001";
        $("#image1").attr("src", "assets/images/outfit/female/cool-0831174001.jpg");
        }else{
            baseURL += "0815456001";
            $("#image2").attr("src", "assets/images/outfit/male/cool-0815456001.jpg");
        }

    } else if (temp >= 70 && temp < 78) {
        if (gender == 'female'){
        baseURL += "0877240001";
        $("#image1").attr("src", "assets/images/outfit/female/warm-0877240001.jpg");
        
        }else{
        baseURL += "0649098003";
        $("#image2").attr("src", "assets/images/outfit/male/warm-0649098003.jpg");
    }

    } else if (temp >= 78) {
        if (gender == 'female'){
        baseURL += "0820865001";
        $("#image1").attr("src", "assets/images/outfit/female/hot-0820865001.jpg");
    }else{
        baseURL += "0685604050";
        $("#image2").attr("src", "assets/images/outfit/male/hot-0685604050.jpg");
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
                $(".outfitUrl-female").attr("href",result.product.productUrl);
               

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
                $(".outfitUrl-male").attr("href",result.product.productUrl);


                console.log(result.product.name,result.product.productUrl);

            });
        })
        // IF STATEMENTS that parse out the weather in destination
        // and form a request url for desired products
    });
})
