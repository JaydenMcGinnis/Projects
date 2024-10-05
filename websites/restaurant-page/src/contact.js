// Contact
const ContactModule = () => {
  // Create helper functions
  function createElement(tag, classNames = [], textContent = "") {
    const element = document.createElement(tag);
    classNames.forEach((className) => element.classList.add(className));
    if (textContent) element.textContent = textContent;
    return element;
  }

  const appendChildren = (parent, children = []) => {
    children.forEach((child) => {
      parent.appendChild(child);
    });
  };

  // *** CREATE ELEMENTS ***
  // main container
  createElement("div", ["contactContainer"]);

  // First Contact Info
  createElement("div", ["first-contact"]);
  createElement("h4", [], "Luffy");
  createElement(
    "p",
    [],
    "Role: Captain\nNumber: 111-111-111\nEmail: LuffyDono@test.com"
  );

  // Second Contact Info
  createElement("div", ["second-contact"]);
  createElement("h4", [], "Zoro");
  createElement(
    "p",
    [],
    "Role: Butcher Chef\nNumber: 222-222-222\nEmail: ZoroJuro@test.com"
  );

  // Third Contact Info
  createElement("div", ["third-contact"]);
  createElement("h4", [], "Sanji");
  createElement(
    "p",
    [],
    "Role: Lead Chef\nNumber: 333-333-333\nEmail: StealthBlack@test.com"
  );

  // *** Append Elements ***
  // Append first class
  appendChildren();
};
