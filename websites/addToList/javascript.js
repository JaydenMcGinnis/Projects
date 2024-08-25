const shoppingList = document.querySelector("ul");
const foodItem = document.querySelector("input");
const btn = document.querySelector("button");


function addToList() {
  let item = foodItem.value;
  foodItem.value = '';

  let itemContainer = document.createElement("li");
  let food = document.createElement("span");
  let delBtn = document.createElement("button");

  itemContainer.appendChild(food);
  itemContainer.appendChild(delBtn);
  food.innerText = item;
  delBtn.innerText = "Delete";

  shoppingList.appendChild(itemContainer);
  
  delBtn.addEventListener('click', () => shoppingList.removeChild(itemContainer));
  foodItem.focus();
}

btn.addEventListener('click', addToList);
