var startYear = "&begin_date=";
var endYear = "&end_date=";
var search = "q="
var apiKey = "&api-key=VEURhrnR2BtmhNGPD2o12XBrBbZeIKra";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + search + apiKey + startYear + endYear;
// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + "&q=UNCC" + apiKey + "&begin_date=20000101" + "&end_date=20101231";

console.log(queryURL);

$("#submitButton").on("click", function(event) {
    event.preventDefault();
    alert("boo");

    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("").text(JSON.stringify(response));
        var articlesDiv = $("<div>")
        articlesDiv.text = response.docs.abstract;
    });
});