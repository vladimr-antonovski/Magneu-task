const getData = () => {
  fetch("GamblersKnowAPI.json")
    .then((response) => response.json())
    .then((data) => {


      let array = data;
      console.log(array);
      
      let bgColor = array.colors.background_color;
      const navbar = document.querySelector('.nav')
      navbar.style.backgroundColor = bgColor;

      let headerColor = array.colors.header_text_color;
      let heading =  document.querySelector('.heading')
      heading.style.color = headerColor;

    });
};
getData();
