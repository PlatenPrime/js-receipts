const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";


async function fetchData(url) {
    try {
      const response = await fetch(url, {
          method: "GET",
          mode: "cors",
          credentials: "omit",
          redirect: "follow",
          referrerPolicy: "no-referrer",
      });
      const data = await response.json();
      console.log(data);
      
    } catch (error) {
      console.error(error);
    }
  }

 const data = fetchData(url);

 console.log();
 

  