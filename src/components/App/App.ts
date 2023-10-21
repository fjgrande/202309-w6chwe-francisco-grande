import Component from "../Component/Component.js";

class App extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "container");
  }

  populate(): void {
    throw new Error("Mehod not implemented");
  }
}
export default App;
