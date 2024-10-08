// Menu

export const MenuModule = () => {
  // Create element helper
  const createElement = (tag, classNames = [], textContent = "") => {
    const element = document.createElement(tag);
    classNames.forEach((className) => element.classList.add(className));
    if (textContent) element.textContent = textContent;
    return element;
  };

  // Append helper
  const appendChildren = (parent, children = []) => {
    children.forEach((child) => {
      parent.appendChild(child);
    });
  };

  // *** ELEMENT CREATION ***

  // Menu Container
  const menuContainer = createElement("div", ["content-container"]);

  // Starters
  const starterContainer = createElement("div", ["starter-container"]);
  const starterHeader = createElement("h2", [], "Starter");
  const starterDish1Container = createElement("div", ["starter-container"]);
  const starterDish1Header = createElement(
    "h4",
    [],
    "East Blue Seafood Platter"
  );
  const starterDish1Info = createElement(
    "p",
    [],
    "A selection of fresh ocean delights—shrimp, oysters, and calamari—with a dipping trio of citrus aioli, spicy marinara, and soy-ginger sauce."
  );
  const starterDish2Container = createElement("div", ["starter-container"]);
  const starterDish2Header = createElement(
    "h4",
    [],
    "Luffy's Meat on the Bone"
  );
  const starterDish2Info = createElement(
    "p",
    [],
    "Roasted pork ribs slathered in a honey glaze, perfect for those with an insatiable appetite."
  );
  const starterDish3Container = createElement("div", ["starter-container"]);
  const starterDish3Header = createElement(
    "h4",
    [],
    "Pirate's Treasure Croquettes"
  );
  const starterDish3Info = createElement(
    "p",
    [],
    "Crispy golden croquettes filled with creamy mashed potatoes and a blend of cheese and smoked fish."
  );

  // Mains
  const mainContainer = createElement("div", ["main-container"]);
  const mainHeader = createElement("h2", [], "Main");
  const mainDish1Container = createElement("div", ["main-container"]);
  const maindDish1Header = createElement("h4", [], "Sanji’s Signature Soba");
  const mainDish1Info = createElement(
    "p",
    [],
    "A steaming bowl of buckwheat noodles in a rich broth, topped with sliced beef, soft-boiled egg, and a drizzle of truffle oil."
  );
  const mainDish2Container = createElement("div", ["main-container"]);
  const mainDish2Header = createElement("h4", [], "All Blue Paella");
  const mainDish2Info = createElement(
    "p",
    [],
    "A flavorful Spanish-inspired rice dish brimming with shrimp, mussels, squid, and chorizo, cooked to perfection with saffron and spices."
  );
  const mainDish3Container = createElement("div", ["main-container"]);
  const mainDish3Header = createElement("h4", [], " Grand Line Grilled Salmon");
  const mainDish3Info = createElement(
    "p",
    [],
    "Tender salmon fillet grilled and served with a citrus glaze, accompanied by roasted vegetables and herbed rice."
  );
  const mainDish4Container = createElement("div", ["main-container"]);
  const maindDish4Header = createElement("h4", [], "Pirate King Steak");
  const mainDish4Info = createElement(
    "p",
    [],
    "A juicy, marinated ribeye cooked to your liking, served with garlic butter and a side of crispy fries."
  );

  // Sides
  const sidesContainer = createElement("div", ["side-container"]);
  const sideHeader = createElement("h2", [], "Side Dishes");
  const sideDish1Container = createElement("div", ["sides-container"]);
  const sideDish1Header = createElement("h4", [], "Merry's Mashed Potatoes");
  const sideDish1Info = createElement(
    "p",
    [],
    "Creamy mashed potatoes with a hint of garlic and butter."
  );
  const sideDish2Container = createElement("div", ["sides-container"]);
  const sideDish2Header = createElement("h4", [], "Sky Island Cloud Cake");
  const sideDish2Info = createElement(
    "p",
    [],
    "A refreshing mix of crisp greens, cherry tomatoes, cucumbers, and a tangy vinaigrette."
  );

  // *** Append ***

  // Starter dishes
  appendChildren(starterDish1Container, [starterDish1Header, starterDish1Info]);
  appendChildren(starterDish2Container, [starterDish2Header, starterDish2Info]);
  appendChildren(starterDish3Container, [starterDish3Header, starterDish3Info]);

  appendChildren(starterContainer, [
    starterHeader,
    starterDish1Container,
    starterDish2Container,
    starterDish3Container,
  ]);

  // Main dishes
  appendChildren(mainDish1Container, [maindDish1Header, mainDish1Info]);
  appendChildren(mainDish2Container, [mainDish2Header, mainDish2Info]);
  appendChildren(mainDish3Container, [mainDish3Header, mainDish3Info]);
  appendChildren(mainDish4Container, [maindDish4Header, mainDish4Info]);

  appendChildren(mainContainer, [
    mainHeader,
    mainDish1Container,
    mainDish2Container,
    mainDish3Container,
    mainDish4Container,
  ]);

  // Sides
  appendChildren(sideDish1Container, [sideDish1Header, sideDish1Info]);
  appendChildren(sideDish2Container, [sideDish2Header, sideDish2Info]);

  appendChildren(sidesContainer, [
    sideHeader,
    sideDish1Container,
    sideDish2Container,
  ]);

  // Join Containers
  appendChildren(menuContainer, [
    starterContainer,
    mainContainer,
    sidesContainer,
  ]);

  return menuContainer;
};

/**
 * Menu
Starters

    East Blue Seafood Platter
    A selection of fresh ocean delights—shrimp, oysters, and calamari—with a dipping trio of citrus aioli, spicy marinara, and soy-ginger sauce.

    Luffy’s Meat on the Bone
    Roasted pork ribs slathered in a honey glaze, perfect for those with an insatiable appetite.

    Pirate's Treasure Croquettes
    Crispy golden croquettes filled with creamy mashed potatoes and a blend of cheese and smoked fish.

Mains

    Sanji’s Signature Soba
    A steaming bowl of buckwheat noodles in a rich broth, topped with sliced beef, soft-boiled egg, and a drizzle of truffle oil.

    All Blue Paella
    A flavorful Spanish-inspired rice dish brimming with shrimp, mussels, squid, and chorizo, cooked to perfection with saffron and spices.

    Grand Line Grilled Salmon
    Tender salmon fillet grilled and served with a citrus glaze, accompanied by roasted vegetables and herbed rice.

    Pirate King Steak
    A juicy, marinated ribeye cooked to your liking, served with garlic butter and a side of crispy fries.

Sides

    Merry’s Mashed Potatoes
    Creamy mashed potatoes with a hint of garlic and butter.

    Nami’s Fresh Garden Salad
    A refreshing mix of crisp greens, cherry tomatoes, cucumbers, and a tangy vinaigrette.

Desserts

    Devil Fruit Sorbet
    A mysterious and vibrant assortment of tropical sorbets inspired by the fabled Devil Fruits. Will you gain powers or just a sweet treat?

    Sky Island Cloud Cake
    Fluffy, light sponge cake topped with whipped cream and berries, as airy as the clouds of Sky Island.

Drinks

    Zoro’s Sake Flight
    A selection of premium sakes for the seasoned swordsman (or woman).

    Chopper’s Cotton Candy Soda
    A fun and fizzy drink with a swirl of cotton candy flavor, perfect for kids and the young at heart.

    Red-Haired Shanks Rum Punch
    A tropical rum cocktail with pineapple, coconut, and a dash of grenadine.
 */
