const mn = document.querySelector("main");

const avatar = document.querySelector(".avatar");
const namer = document.querySelectorAll(".name");
const info = document.querySelectorAll(".kr_info");
const bio = document.querySelectorAll(".bio");
let params = new URLSearchParams(document.location.search);
let value = params.get("name");
let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`).then(
  (res) => {
    return res.json();
  }
  
);

const results = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1").then(
  (res) => res.json()
);
console.log(results);



const create = await Promise.all(
  results.results.map(async (result) => {
    setTimeout(() => {}, 5000);
    const pokeData = await fetch(result.url).then((pokeData) =>
      pokeData.json()
    );

    // let image = document.createElement("div");
    // image.innerHTML = `<img class="avatar_img" src=${
    //                       pokeData?.sprites?.other?.dream_world
    //                         ?.front_default ?? pokeData?.sprites?.front_default
    //                     } class="avatar_img">`

    // let nameen = document.createElement("div");
    // nameen.innerHTML = `<h3 class="name_h3">${result.name}</h3>`
    // namer.append(nameen)

    // avatar.append(image);

    let div = document.createElement("div")
    
    let id = "0";

    let mm = data.moves;

    console.log(mm)

    //Сделать способности через forEach
    //В kr_info занести инфо об ударах и тд. более второстепенную информацию занести в bio
    div.innerHTML = `<div class="info">

        <div class="avatar">
          <img class="avatar_img" src=${
            data?.sprites?.other?.dream_world?.front_default ?? pokeData?.sprites?.front_default
          }
          </div>
        </div>

        <div class="name">
          <h1 class="name_h3">
            ${data.name}
          </h1>
        </div>

        <div class="kr_info">
          <h2>
          ${data.abilities["0"].ability.name}
          </h2>
          <h2>
          ${data.abilities["1"].ability.name}
          </h2>
          <h2>
          ${data.base_experience}
          </h2>
          <h2>
          ${data.moves["0"].move.name}
          </h2>
        </div>

        <div class="bio">
          <p>${data.weight}</p>
          <p>${data.height}</p>
        </div>
        `
    
      mn.append(div)
  })
);


console.log(data);

