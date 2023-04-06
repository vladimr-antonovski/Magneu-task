const getData = () => {
  fetch("GamblersKnowAPI.json")
    .then((response) => response.json())
    .then((data) => {


      let array = data;
      console.log(array);
      
      let bgColor = array.colors.background_color;
      const navbar = document.querySelector('.nav')
      navbar.style.backgroundColor = bgColor;

const logoImg =  document.createElement('img')
logoImg.src = array.page_logo;
navbar.append(logoImg);

let middleDiv = document.querySelector('.middle_inner')
let headerTxt = document.querySelector('.header');
headerTxt.innerHTML = array.header + array.colors.header_text_color;
middleDiv.append(headerTxt)





    });
};
getData();
