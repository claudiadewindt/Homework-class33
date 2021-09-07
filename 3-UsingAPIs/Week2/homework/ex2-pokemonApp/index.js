'use strict';
/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      throw new Error('Request failed!');
    }
  } catch (error) {
    console.log(error);
  }
}

function fetchAndPopulatePokemons(data) {
  const btn = document.createElement('button');
  btn.textContent = 'Get Pokemon!';
  btn.type = 'button';
  const selectElement = document.createElement('select');
  selectElement.addEventListener('change', fetchImage);
  document.body.appendChild(selectElement);

  btn.addEventListener('click', () => {
    const pokemons = data.results;
    pokemons.forEach((pokemon) => {
      const allPokemons = document.createElement('option');
      allPokemons.value = pokemon.name;
      allPokemons.text = pokemon.name;
      selectElement.appendChild(allPokemons);
    });
  });
  document.body.appendChild(btn);
}

async function fetchImage(event) {
  const clearImg = document.querySelector('img');
  if (clearImg) {
    clearImg.remove();
  }

  const pokemonsUrl = `https://pokeapi.co/api/v2/pokemon/${event.currentTarget.value}`;
  try {
    const data = await fetchData(pokemonsUrl);
    const selectedElement = document.querySelector('select');
    if (selectedElement) {
      const pokemonImg = document.createElement('img');
      pokemonImg.src = data.sprites.front_default;
      document.body.appendChild(pokemonImg);
    }
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  try {
    const data = await fetchData(
      'https://pokeapi.co/api/v2/pokemon/?limit=151&offset=20'
    );
    fetchAndPopulatePokemons(data);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', main);
