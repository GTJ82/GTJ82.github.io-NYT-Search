var startYear = "&begin_date=";
var endYear = "&end_date=";
var search = "q="
var apiKey = "&api-key=3JmKkjUU9OyeK1CujDrxAjfqb9iNLX3G";
// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + search + apiKey + startYear + endYear;
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + "&q=UNCC" + apiKey + "&begin_date=20000101" + "&end_date=20101231";

console.log(queryURL);
$("").on("click", function() {

    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("").text(JSON.stringify(response));
    });
})