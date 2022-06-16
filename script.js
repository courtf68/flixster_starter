const api_key = "0522034165f29fe2c0404b02abc42f40";

const search = document.getElementById("query"); //searxch box
const theForm = document.getElementById("looky"); //my form
const dataSec = document.getElementById("page"); //where dat goes
const title = document.getElementById("Ptitle"); //changing title of screen

const url = `https://api.themoviedb.org/3/movie/550?api_key=${api_key}`;

async function getData() {
  const response = await fetch(url);
  const data = response.json; //VS said no await needed
  console.log(data);
  return data;
}
//makinf movie to insert?
const imgEl = document.createElement("img");
imgEl.src = url;
gifs.innerHTML += imgEl;
