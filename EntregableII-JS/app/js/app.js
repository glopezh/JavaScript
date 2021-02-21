document.addEventListener("DOMContentLoaded", function (event) {
    var url = 'https://api.currentsapi.services/v1/latest-news?' +
        'language=es&' +
        'apiKey=20s1aUx0SdTlDUwrri14uH0OmsKGYZRQHv7gMGsury7PW9qQ';
    var req = new Request(url);
    fetch(req)
        .then(function (response) {
            //document.getElementById('news-container').innerHTML = response.json();
            if (response.ok) {
                response.json().then(data => {
                    console.log(data.news);
                    //callback(data);
                });
            } else {
                alert("No se ha encontrado ninguna noticia");
                console.log('Respuesta de red OK pero respuesta HTTP no OK');
            }
        })
});

// compile the template
var template = Handlebars.compile("Handlebars <b>{{ title }}</b>");
// execute the compiled template and print the output to the console
console.log(template({ doesWhat: "rocks!" }));
