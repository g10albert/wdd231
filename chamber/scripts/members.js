const companies = document.querySelector("#companies");

const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

let html = "";
let data = "";

async function getMemberData() {
  const response = await fetch("data/members.json");

  data = await response.json();

  let members = data.members;

  members.forEach((member) => {
    html = `
      <div class="company">
        <img class="company-image" src="${member.image}"
          alt="Homs">
        <p class="company-name">${member.name}</p>
        <p class="company-address">${member.address}</p>
        <p class="company-number">${member.phoneNumber}</p>
        <a target="_blank" class="company-website" href="${member.websiteURL}<">${member.websiteURL}</a>

        <!-- <p class="company-level">silver</p>
        <p class="company-industry">healtcare</p> -->
      </div>
`;

companies.innerHTML += html;
});
}

gridBtn.addEventListener("click", () => {
  companies.classList.add("grid");
  companies.classList.remove("list");
});

listBtn.addEventListener("click", () => {
  companies.classList.add("list");
  companies.classList.remove("grid");
});

getMemberData();
