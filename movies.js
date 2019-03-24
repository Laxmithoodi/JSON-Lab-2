//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();


request.onreadystatechange = function (){

    if((request.status == 200) && (request.readyState ==4)) {
        var test = JSON.parse(request.responseText)

        console.log(test)
        var movies = "Golden State Bridge:<br/>";

        // for (var movie in test.data) {
        //     console.log(movie);
        //     var data = test.data[movie];
        //     if (data[10] == "Golden State Bridge") {
        //         movies += data[8] + "made in " + data[9] + " and produced by " + data[13] + "<br/>";
        //     }
        // }
        //for(var i = 0; i < test.data.length; i++){

        for (idx in test.data) {
            var movie = test.data[idx]
            console.log(movie)
            if (movie[10] == "Golden Gate Bridge") {
                movies += movie[8] + "made in " + movie[9] + " and produced by " + movie[13] + "<br/>";
            }
        }

        var result = document.getElementById("result").innerHTML += movies;
        //console.log(movies);
    }
};
request.open('GET','https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');
request.send();


