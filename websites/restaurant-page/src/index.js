import "./styles.css";
// import luffyimg from "./luffyimg.jpg";
import { HomeModule } from "./home";
import { MenuModule } from "./menu";
import { ContactModule } from "./contact";

// Importing img to be used in js
// const image = document.createElement("img");
// image.src = luffyimg;
// document.body.appendChild(image);

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");

// Home Module used by default
content.appendChild(HomeModule());

// Pressing home button removes content inside the content container
homeBtn.addEventListener("click", () => {
  content.textContent = "";
  content.appendChild(HomeModule());
});

menuBtn.addEventListener("click", () => {
  content.textContent = "";
  content.appendChild(MenuModule());
});

contactBtn.addEventListener("click", () => {
  content.textContent = "";
  content.appendChild(ContactModule());
});
