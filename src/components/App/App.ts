import Component from "../Component/Component.js";

class App extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "main-container");
  }

  protected populate(): void {
    this.element.innerHTML = `
      <header class="main-header">
        <img class="main-logo" src="./images/pokemon-logo.svg">
      </header>
      <main class="main"></main>
    `;
  }
}

export default App;
