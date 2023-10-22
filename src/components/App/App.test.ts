import App from "./App";

describe("Given an App component", () => {
  describe("When it receives a body parentElement", () => {
    test("Then it should show a main-header", () => {
      const parentElement = document.querySelector("body")!;
      const app = new App(parentElement);
      app.render();

      const header = parentElement.querySelector("header");

      expect(header).not.toBeNull();
      expect(header?.className).toBe("main-header");
    });
  });
});

describe("When it receives a header element", () => {
  test("Then it should show a pokemon logo in class main-logo", () => {
    const parentElement = document.querySelector("header")!;
    const app = new App(parentElement);

    app.render();

    const logo = parentElement.querySelector("img");

    expect(logo).not.toBeNull();
    expect(logo?.className).toBe("main-logo");
  });
});

describe("When it receives a header element", () => {
  test("Then it should show a pokemon logo un class main-logo", () => {
    const parentElement = document.querySelector("header")!;
    const app = new App(parentElement);
    app.render();

    const logo = parentElement.querySelector("img");

    expect(logo).not.toBeNull();
    expect(logo?.className).toBe("logo");
  });
});
