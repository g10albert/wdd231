const url =
  "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";

const cards = document.querySelector("#cards");

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement("section");
    const fullName = document.createElement("h2");
    const portrait = document.createElement("img");
    const dateOfBirth = document.createElement("p");
    const placeOfBirth = document.createElement("p");
    dateOfBirth.textContent = prophet.birthdate;
    placeOfBirth.textContent = prophet.birthplace;
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portrait of prophet ${fullName}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", 340);
    portrait.setAttribute("height", 440);

    fullName.setAttribute("class", "name");
    dateOfBirth.setAttribute("class", "dob");
    placeOfBirth.setAttribute("class", "pob");
    portrait.setAttribute("class", "portrait");
    card.setAttribute("class", "card");

    card.appendChild(fullName);
    card.appendChild(dateOfBirth);
    card.appendChild(placeOfBirth);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};
