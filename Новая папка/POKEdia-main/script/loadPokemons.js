const mn = document.querySelector("main");

const results = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10").then(
  (res) => res.json()
);
console.log(results);

const data = await Promise.all(
  results.results.map(async (result) => {
    setTimeout(() => {}, 5000);
    const pokeData = await fetch(result.url).then((pokeData) =>
      pokeData.json()
    );
    let div = document.createElement("div");
    div.innerHTML = `<a style="text-decoration:none" href="descripton.html?name=${
      result.name
    }"><div class="body body1">
                        <div class="image-win image-win1"><img src=${
                          pokeData?.sprites?.other?.dream_world
                            ?.front_default ?? pokeData?.sprites?.front_default
                        } class="pokemon_img"></div>
                        <h1 class="name name1">${result.name}</h1>
                    </div></a>`;

    mn.append(div);
  })
);
