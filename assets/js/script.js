const apiKEY = '435539-AnthonyR-SF1MTWL2';

const similarAPI = 'https://tastedive.com/api/similar?q=';


const apiURL = "https://api.lyrics.ovh/v1/"
var artistEl = document.querySelector("#artistSearch");
var songEl = document.querySelector("#songSearch");
var searchEl = document.querySelector("#searchBtn");
var lyricContainerEl = document.querySelector("#lyricContainer");

searchEl.addEventListener("click", search);

function search(){
    console.log("Click");

    var artist = artistEl.value.trim();
    var song = songEl.value.trim();

fetch(apiURL + artist + "/" + song, {
    method:"GET",
})
    .then(response => response.json().then(function(data){
        displayStuff(data)
    }))
    // .then(data => console.log(data));

    // fetch(similarAPI  + artist, {
    //     mode: 'no-cors',
    //     method:"GET",
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // })
        
    //     .then(response => response.json())
    //     .then(response => console.log(response));    

    // displayStuff(data);
};

var displayStuff = function(lyrics){
    console.log(lyrics);

    var lyricEl = document.createElement("span");
    lyricEl.textContent = lyrics.lyrics;
    lyricContainerEl.appendChild(lyricEl);
}


