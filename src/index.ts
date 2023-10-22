import App from "./components/App/App.js";

const parentElement = document.querySelector("body")!;
const app = new App(parentElement);
app.render();
