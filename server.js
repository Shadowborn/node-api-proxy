const u = require("unirest"); //intsall from: http://unirest.io/nodejs.html

//Replace the following string value with your valid X-RapidAPI-Key.
Your_X_RapidAPI_Key = "8e37ff1affmsh2c7bca072562c91p193f65jsn024ad5926485";

//The query parameters: (update according to your search query)
q = "Taylor%20Swift"; #the search query
pageNumber = 1; #the number of requested page
pageSize = 10; #the size of a page
autoCorrect = true; #autoCorrectspelling
safeSearch = false; #filter results for adult content

u.get("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=" + q + "&amp;pageNumber=" + pageNumber + "&amp;pageSize=" + pageSize+ "&amp;autoCorrect=" + autoCorrect+ "&amp;safeSearch=" + safeSearch)
    .header("X-RapidAPI-Key", Your_X_RapidAPI_Key)
    .end(function(result) {

        console.log("HTTP status code: " + result.status);

        //Get the numer of items returned
        totalCount = result.body["totalCount"];

        //Get the list of most frequent searches related to the input search query
        relatedelatedSearch = result.body["relatedSearch"]

        for (i = 0; i &lt; result.body["value"].length; i++) {

            webPage = result.body["value"][i];

            //Get the web page metadata
            url = webPage["url"];
            title = webPage["title"];
            description = webPage["description"];
            keywords = webPage["keywords"];
            provider = webPage["provider"]["name"];
            datePublished = webPage["datePublished"];

            //Get the web page image (if exists)
            imageUrl = webPage["image"]["url"];
            imageHeight = webPage["image"]["height"];
            imageWidth = webPage["image"]["width"];

            thumbnail = webPage["image"]["thumbnail"];
            thumbnailHeight = webPage["image"]["thumbnailHeight"];
            thumbnailWidth = webPage["image"]["thumbnailWidth"];

            //An example: Output the webpage url, title and published date:
            console.log("Url: %s. Title: %s. Published Date:%s.\n", url, title, datePublished);
        }

    });
