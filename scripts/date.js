let date = new Date()

const currentYear = document.querySelector("#current-year")

currentYear.innerHTML = date.getFullYear()

document.getElementById("lastModified").innerHTML = `Last modification ${document.lastModified}`;
