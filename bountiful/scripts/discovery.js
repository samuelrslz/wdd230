const url =
  "https://raw.githubusercontent.com/samuelrslz/wdd230/main/chamber/data/members.json";

const cards = document.querySelector("#cards");

async function getCompanyData() {
  const response = await fetch(url);
  const data = await response.json();
  displayCompanies(data.companies);
}

getCompanyData();

const displayCompanies = (companies) => {
  companies.forEach((company) => {
    let card = document.createElement("section");
    let companyName = document.createElement("h3");
    let companyImg = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let companyURL = document.createElement("a");

    companyName.textContent = company.name;
    address.textContent = company.address;
    phone.textContent = company.phone;
    companyURL.setAttribute("href", company.website);
    companyURL.textContent = company.website;

    companyImg.setAttribute("src", company.image);
    companyImg.setAttribute("alt", `Logo or picture of ${companyName}`);
    companyImg.setAttribute("loading", "lazy");

    card.appendChild(companyName);
    card.appendChild(companyImg);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(companyURL);

    cards.appendChild(card);
  });
};

// For switching views
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
