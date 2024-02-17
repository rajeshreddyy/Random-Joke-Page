let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");
let spinner = document.getElementById("spinner");

function getJoke() {
    let requestUrl = "https://apis.ccbp.in/jokes/random/";
    let options = {
        method: "GET",
    };

    spinner.classList.remove("d-none");
    jokeText.classList.add("d-none");

    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            jokeText.textContent = data.value;
            spinner.classList.add("d-none");
            jokeText.classList.remove("d-none");
            console.log(data);
        });




}

jokeBtn.onclick = function() {
    getJoke();
};