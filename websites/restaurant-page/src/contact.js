// Contact
export const ContactModule = () => {
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
  const contactContainer = createElement("div", ["contactContainer"]);

  // First Contact Info
  const firstContainer = createElement("div", ["first-contact"]);
  const firstContainerHeader = createElement("h4", [], "Luffy");
  const firstContainerParagraph = createElement(
    "p",
    [],
    "Role: Captain\nNumber: 111-111-111\nEmail: LuffyDono@test.com"
  );

  // Second Contact Info
  const secondContainer = createElement("div", ["second-contact"]);
  const secondContainerHeader = createElement("h4", [], "Zoro");
  const secondContainerParagraph = createElement(
    "p",
    [],
    "Role: Butcher Chef\nNumber: 222-222-222\nEmail: ZoroJuro@test.com"
  );

  // Third Contact Info
  const thirdContainer = createElement("div", ["third-contact"]);
  const thirdContainerHeader = createElement("h4", [], "Sanji");
  const thirdContainerParagraph = createElement(
    "p",
    [],
    "Role: Lead Chef\nNumber: 333-333-333\nEmail: StealthBlack@test.com"
  );

  // *** Append Elements ***
  // Append first class
  appendChildren(firstContainer, [
    firstContainerHeader,
    firstContainerParagraph,
  ]);
  appendChildren(secondContainer, [
    secondContainerHeader,
    secondContainerParagraph,
  ]);
  appendChildren(thirdContainer, [
    thirdContainerHeader,
    thirdContainerParagraph,
  ]);

  appendChildren(contactContainer, [
    firstContainer,
    secondContainer,
    thirdContainer,
  ]);

  return contactContainer;
};
