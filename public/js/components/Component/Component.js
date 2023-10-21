class Component {
    parentElement;
    element;
    constructor(parentElement, tagName, className) {
        this.parentElement = parentElement;
        this.element = document.createElement(tagName);
        this.parentElement = parentElement;
        this.element.className = className;
    }
    render() {
        this.parentElement.appendChild(this.element);
    }
}
export default Component;
//# sourceMappingURL=Component.js.map