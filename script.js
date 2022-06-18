const api_key = "0522034165f29fe2c0404b02abc42f40";

const search = document.getElementById("query"); //searxch box
const theForm = document.getElementById("looky"); //my form
const dataSec = document.getElementById("page"); //where dat goes
const title = document.getElementById("Ptitle"); //changing title of screen

const url = `https://api.themoviedb.org/3/movie/550?api_key=${api_key}`;
//https://api.themoviedb.org/3/movie/550?api_key=0522034165f29fe2c0404b02abc42f40

//const movTitlUrl = `https://api.themoviedb.org/3/movie/550?api_key=${api_key}&append_to_response=${movie_id}`;

async function getData() {
  const response = await fetch(url);
  const dataa = response.json; //VS said no await needed
  console.log(dataa);
  return dataa;
}
//making movie to insert?
// const imgEl = document.createElement("img");
// imgEl.src = url;
// gifs.innerHTML += imgEl;

function displayResults(data) {
  const movStr = data.results
    .map(
      (movie) => `
      <div id = "movie-grid">
     
<div id = "movie-card"> 

    <img src="https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}" />
    <h3>${movie.title} </h3>
    <p>${movie.popularity}</p> 
    </div>
    </div>
`
    ) //pop not it, look for star??
    .join("");
  dataSec.innerHTML = dataSec.innerHTML + movStr;
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

window.onload = () => {
  //arrow bc multiple
  NowP();
};

//name "q" needs to be in event listener form ting
