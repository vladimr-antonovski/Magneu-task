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
headerTxt.style.color = array.colors.header_text_color
headerTxt.innerHTML = array.header

let subheader = document.querySelector(".subheader")
subheader.innerHTML = array.subheader;
subheader.style.color = array.colors.subheader_text_color;

let underline = document.querySelector('.underline')
underline.style.color = array.colors.underline_color;

let text = document.createElement('p')
text.innerText = "Add your name and email below to gain instant access to our exclusive bonuses"
text.style.color = array.colors.header_text_color;

middleDiv.append(headerTxt, subheader, underline, text)

let terms_conditions = document.querySelector('.terms_conditions')
terms_conditions.style.backgroundColor = array.colors.background_color

const waring = document.querySelector('.disclaimer');
waring.style.color = array.colors.button_color;






    });
};
getData();
