const baseURL = "https://samuelrslz.github.io/wdd230/";
const linksURL = "https://samuelrslz.github.io/wdd230/data/links.json";
const activitiesList = document.querySelector("#activitiesList");

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.lessons);
}

getLinks();

const displayLinks = (weeks) => {
  weeks.forEach((week) => {
    let lessonNumber = week.lesson;
    week.links.forEach((link) => {
      let lessonURL = link.url;
      let lessonName = link.title;

      let listItem = document.createElement("li");
      let linkElement = document.createElement("a");

      linkElement.textContent = `${lessonNumber}: ${lessonName}`;
      linkElement.setAttribute("href", lessonURL);

      listItem.appendChild(linkElement);
      activitiesList.appendChild(listItem);
    });
  });
};
