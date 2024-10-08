// Home page

export const HomeModule = () => {
  // *** CREATE ALL ELEMENTS ***
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("content-container");

  // Create element helper function
  const createElement = (tag, classNames = [], textContent = "") => {
    const element = document.createElement(tag);
    classNames.forEach((className) => element.classList.add(className));
    if (textContent) element.textContent = textContent;
    return element;
  };

  // *** ELEMENT CREATION ***

  // Title section
  const titleContainer = createElement("div", ["title-container"]);
  const titleHeader = createElement("h1", [], "Baratie");

  // Description section
  const descriptionContainer = createElement("div", ["description-container"]);
  const descriptionHeader = createElement("h3", [], "About Baratie");

  const descriptionTexts = [
    "Welcome to Baratie, the seafaring restaurant where gourmet cuisine meets the high seas! Inspired by the legendary floating eatery from the world of One Piece, Baratie brings you a unique dining experience filled with adventurous flavors, pirate spirit, and a splash of the extraordinary.",
    "Step aboard our ship-shaped restaurant and indulge in a fusion of maritime delicacies, international flavors, and whimsical dishes straight out of the Grand Line. Whether you're a pirate, marine, or traveler, our crew of skilled chefs, led by a Sanji-inspired culinary master, is here to serve you top-tier meals that rival those of the All Blue.",
    "With a stunning oceanfront view, a lively atmosphere, and a nod to your favorite anime, Baratie is the perfect place to gather, feast, and embark on a culinary voyage like no other.",
  ];

  const descriptionParagraphs = descriptionTexts.map((text) =>
    createElement("p", [], text)
  );

  // Open and close section
  const openCloseContainer = createElement("div", ["open-close-container"]);
  const openCloseHeader = createElement("h3", [], "Open/Close");

  const openCloseHours = [
    { day: "Sunday", hours: "8am - 8pm" },
    { day: "Monday", hours: "6am - 6pm" },
    { day: "Tuesday", hours: "6am - 6pm" },
    { day: "Wednesday", hours: "6am - 6pm" },
    { day: "Thursday", hours: "6am - 10pm" },
    { day: "Friday", hours: "6am - 10pm" },
    { day: "Saturday", hours: "8am - 10pm" },
  ];

  const openCloseList = createElement("ul", ["open-close-list"]);

  openCloseHours.forEach((day) => {
    const listItem = createElement("li", [], `${day.day}: ${day.hours}`);
    openCloseList.appendChild(listItem);
  });

  // Location section
  const locationContainer = createElement("div", ["location-container"]);
  const locationHeader = createElement("h3", [], "Locations");
  const locationParagraph = createElement(
    "p",
    [],
    "the Sambas Region (サンバス海域, Sanbasu Kaiiki?) of the East Blue, close to the Paradise half of the Grand Line"
  );

  // *** APPEND STRUCTURE ***

  // Title Appends
  titleContainer.appendChild(titleHeader);

  // Description Appends
  descriptionContainer.appendChild(descriptionHeader);
  descriptionParagraphs.forEach((paragraph) =>
    descriptionContainer.appendChild(paragraph)
  );

  // Open Close Appends
  openCloseContainer.appendChild(openCloseHeader);
  openCloseContainer.appendChild(openCloseList);

  // Location Appends
  locationContainer.appendChild(locationHeader);
  locationContainer.appendChild(locationParagraph);

  // HomeContainer Appends
  homeContainer.appendChild(titleContainer);
  homeContainer.appendChild(descriptionContainer);
  homeContainer.appendChild(openCloseContainer);
  homeContainer.appendChild(locationContainer);

  return homeContainer;
};

/**
 * <div class="home-container">
            <div class="title"><h1>Baratie</h1></div>
            <div class="description">
              <h3>About Baratie</h3>
              <p>
                Welcome to Baratie, the seafaring restaurant where gourmet
                cuisine meets the high seas! Inspired by the legendary floating
                eatery from the world of One Piece, Baratie brings you a unique
                dining experience filled with adventurous flavors, pirate
                spirit, and a splash of the extraordinary.
              </p>
              <p>
                Step aboard our ship-shaped restaurant and indulge in a fusion
                of maritime delicacies, international flavors, and whimsical
                dishes straight out of the Grand Line. Whether you're a pirate,
                marine, or traveler, our crew of skilled chefs, led by a
                Sanji-inspired culinary master, is here to serve you top-tier
                meals that rival those of the All Blue.
              </p>
              <p>
                With a stunning oceanfront view, a lively atmosphere, and a nod
                to your favorite anime, Baratie is the perfect place to gather,
                feast, and embark on a culinary voyage like no other.
              </p>
            </div>
            <div class="open-close">
              <h3>Open/Close</h3>
              <ul>
                <li>Sunday: 8am - 8pm</li>
                <li>Monday: 6am - 6pm</li>
                <li>Tuesday: 6am - 6pm</li>
                <li>Wednesday: 6am - 6pm</li>
                <li>Thursday: 6am - 10pm</li>
                <li>Friday: 6am - 10pm</li>
                <li>Saturday: 8am - 10pm</li>
              </ul>
            </div>
            <div class="location">
              <h3>location</h3>
              <p>
                the Sambas Region (サンバス海域, Sanbasu Kaiiki?) of the East
                Blue, close to the Paradise half of the Grand Line
              </p>
            </div>
    </div>
 */
