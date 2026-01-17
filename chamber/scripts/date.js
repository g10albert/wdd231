let date = new Date()

const currentYear = document.querySelector("#current-year")

currentYear.innerHTML = `${date.getFullYear()} Camara Santiago Digital`

document.getElementById("lastModified").innerHTML = `Last modification ${document.lastModified}`;
