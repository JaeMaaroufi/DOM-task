let spaceContainer = document.getElementById("space-container");

let title = document.createElement("h2");

let planetContainer = document.createElement("div");

let planetsListTitle = document.createElement("h3");

let planetsList = document.createElement("ul");

let universeImg = document.createElement("img");

title.textContent = "The Universe";

title.style.color = "purple";

planetsListTitle.textContent = "Our Planets";

planetContainer.setAttribute(
  "style",
  "border:1px solid black; border-radius:20px;width:48.8%;padding:10px;background-color:beige;"
);

planetsList.innerHTML =
  "<li>Earth</li><li>Saturn</li><li>Mercury</li><li>Uranus</li>";
universeImg.src = "./229-westerlund-21.jpg";
universeImg.setAttribute("style", "border-radius:20px; width:50%;");

spaceContainer.appendChild(title);
spaceContainer.appendChild(universeImg);
spaceContainer.appendChild(planetContainer);
planetContainer.appendChild(planetsListTitle);
planetContainer.appendChild(planetsList);
