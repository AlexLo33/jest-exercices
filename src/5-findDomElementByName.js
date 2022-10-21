class DomElements {
  constructor() {
    this.document = {};
  }

  // Function to be mocked
  getElements() {
    return this.document.querySelectorAll("*");
  }

  // Function to be tested
  findDomElementByName(name) {
    const elements = this.getElements();
    const element = elements.find((el) => el.name === name);
    if (!element) {
      return {};
    }

    return element;
  }
}

export default DomElements;
