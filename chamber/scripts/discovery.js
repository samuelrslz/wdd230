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
    let companyName = document.createElement("p");
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
