const api_key = "0522034165f29fe2c0404b02abc42f40";
const star = "&#10032;";

const num = 1;
const searchT = document.getElementById("query"); //searxch box
const theForm = document.getElementById("looky"); //my form
const press = document.getElementById("submit"); //button
const dataSec = document.querySelector(".page"); //where data goes
const title = document.getElementById("Ptitle"); //changing title of screen
const searchSection = document.querySelector(".searchSection");
const home = document.getElementById("home");
const load = document.getElementById("load-more-movies-btn");

const url = `https://api.themoviedb.org/3/movie/550?api_key=${api_key}`;
//const movieSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${searchT}&page=1&include_adult=false`;

//https://api.themoviedb.org/3/movie/550?api_key=0522034165f29fe2c0404b02abc42f40

//const movTitlUrl = `https://api.themoviedb.org/3/movie/550?api_key=${api_key}&append_to_response=${movie_id}`;

async function getData() {
  const response = await fetch(url);
  const dataa = response.json; //VS said no await needed
  console.log(dataa);
  return dataa;
}

function displayResults(data) {
  const movStr = data.results
    .map(
      (movie) => `
     
     
<div id = "movie-card"> 

    <img class = "movie-poster" src="https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}" />
   
    <div class="movie-votes"> ${star}${movie.vote_average}</div>
    <h3 class = "movie-title">${movie.title} </h3>
  
    </div>
    </div>
`
    )
    .join("");
  dataSec.innerHTML = dataSec.innerHTML + movStr;
}

load.addEventListener("click", async (event) => {
  event.preventDefault();
  page++;
});

function displayResults1(data) {
  const movStr = data.results
    .map(
      (movie) => `
     
     
<div id = "movie-card"> 

    <img class = "movie-poster" src="https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}" />
   
    <div class="movie-votes"> ${star}${movie.vote_average}</div>
    <h3 class = "movie-title">${movie.title} </h3>
  
    </div>
   
    </div>
`
    )
    .join("");

  searchSection.innerHTML = searchSection.innerHTML + movStr;
}
//template strs, DS is my empty div
//let movieIn = dataSec.innerHTML; //how do i call movie--> ${movie_id}

async function NowP() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`
  );
  const jsonres = await res.json();
  console.log(jsonres);
  //   const movies = jsonres.results.map((movie) => {
  //     title: movie.title;
  //     backdropPath: movie.backdrop_path;
  //   });
  //   console.log(movies);
  displayResults(jsonres);
}

//attempting search func ++

// async function doSubmit(event) {
//   // dataSec.innerHTML = ""; //clearing
//   title.innerHTML = "Search Results";
// }

async function Searchy(tempS) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${tempS}&page=${num}&include_adult=false`
  );
  const datay = await response.json(); //VS said no await needed
  console.log(datay);
  displayResults1(datay);
}

//back button, set search to hidden and run now playing again
home.addEventListener("click", async (event) => {
  searchSection.style.display = "none";
  title.innerHTML = "Now Playing";
  NowP();
  dataSec.style.display = "initial";
});
// function displayResults(data) {
//   const movStr = data.results.map(
//     (movie) => ` <div class="movie-votes"> ${star}${movie.vote_average}</div>`
//   );
// }

// press.addEventListener("click", doSubmit);

theForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  title.innerHTML = "Search Results";
  dataSec.style.display = "none";
  let tempS = event.target.q.value;
  console.log(tempS);
  // tempS = tempS.replace(/ /g, "+");
  Searchy(tempS);
  console.log(searchSection);
  console.log(dataSec);
});

window.onload = () => {
  //arrow bc multiple
  NowP();
};

//name "q" needs to be in event listener form ting
