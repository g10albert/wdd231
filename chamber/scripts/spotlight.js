const spotlightContainer = document.querySelector("#member-spotlights");

async function getSpotlights() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  
  const eligibleMembers = data.members.filter(m => m.membershipLevel >= 2);
  
  const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());
  const selectedMembers = shuffled.slice(0, 3);

  displaySpotlights(selectedMembers);
}

function displaySpotlights(members) {
  spotlightContainer.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("div");
    card.className = "company spotlight-card";
    
    // Map level numbers to labels
    const levelName = member.membershipLevel === 3 ? "Gold" : "Silver";

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name} logo">
      <h4>${member.name}</h4>
      <p>${member.address}</p>
      <p>${member.phoneNumber}</p>
      <a href="${member.websiteURL}" target="_blank">Website</a>
      <p class="membership-badge">${levelName} Member</p>
    `;
    spotlightContainer.appendChild(card);
  });
}

getSpotlights();