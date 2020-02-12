Location destination

Tempature




Main task -updating interface

function displayRecipeCard(title, ingrdients)   //one code that generates the cards -- example//
{
    console.log(title, ingrdients);
}

function displayRecipeInfo(title, ingrdients, price, url){
 
}

function onRecipeClick(event){
/// write here what ever it is to retriee the information
}



AJAX FUNCTION:
Query to API always the same// the only 2 things that change is the structure of result and the URL
    
    function makeAjaxRequest(url, callback){
      $.ajax({
      url: url,
      method: "GET"
    }).then(function(response){
      callback(response)        <--- by here you know the name of the function and its arguments>
    }) 
         
    }

    Display API stuff
    function displayApiStuff(a,b,c,d){
      a. is name
      b. is temperature
      c. example
    }
    
    function getApiStuff(){
      make AJAX request("http://something.com, function(response){
        get a,b,c,d
        displayApiStuff(a,b,c,d);
      })
    }
    
      
      AJax 

      $.ajax({
      url: "",
      method: "GET"
    }).then(function(result) {
         
    })




    $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          $("#").text(JSON.stringify(response));    <------ structure of result
        });



        Male:
        Hot- tank-top 0866219002, shorts 0687635015
        cool- hoodie 0815092001, jeans 0751994007
        swim-shorts 0685601014
        cold- coat 0781638001, pants 0815456001

        Female:
        cold- coat 0790006001, jeans 0399256018
        cool- hoodie 0859201001, pants 0760084003
        swim- sorang 0812157001, bikini 0820865001
        hot- tank-top 0795675001, shorts 0884405003