const baseURL = "https://samuelrslz.github.io/wdd230/";

const linksURL = "https://samuelrslz.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  console.log(data);
  //displayLinks(data.lessons);
}

getLinks();
