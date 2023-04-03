const getData = () => {
  fetch("GamblersKnowAPI.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });  
};
getData();





