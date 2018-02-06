//Applies css to older web pages to make them more readable.
//ex: http://www.huygens-fokker.org/scala/
var deuglifycss = document.createElement("style");
deuglifycss.type = "text/css";
deuglifycss.innerHTML = "body {width: 50%; margin-left: 300px; line-height: 1.3}";

mapkey('cu', 'Prettify page', function() {document.body.appendChild(deuglifycss)});
