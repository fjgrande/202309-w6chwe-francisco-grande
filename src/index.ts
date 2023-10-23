import App from "./components/App/App.js";
import getPokemonApi from "./data/getPokemonApi.js";

const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10";
await getPokemonApi(url);

const parentElement = document.querySelector("body")!;
const app = new App(parentElement);
app.render();
