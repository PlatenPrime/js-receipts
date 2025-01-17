const url = "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml";

const load = document.getElementById("load");

load.addEventListener("click", () => {
  fetchData(url);
});

async function fetchData(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      credentials: "omit",
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    const data = await response.text();
    console.log(data);

    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "text/xml");
    console.log(xml);


    function displayTitles(xml) {
        const listElem = document.getElementById("results");
      
        const titles = xml.querySelectorAll("item title");
      
        titles.forEach((title) => {
          const listItem = document.createElement("li");
          listItem.textContent = title.textContent;
          listElem.appendChild(listItem);
        });
      }
      


      displayTitles(xml);
    
   
  } catch (error) {
    console.error(error);
  }
}


