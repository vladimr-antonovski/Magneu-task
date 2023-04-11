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
logoImg.classList.add("logo")
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

const nameInput = document.createElement("input")
nameInput.type = "text"
nameInput.placeholder = "Name"
nameInput.style.display = "block"
nameInput.style.borderColor = array.colors.underline_color


const emailInput = document.createElement("input");
emailInput.type = "text";
emailInput.placeholder = "E-mail"
emailInput.style.borderColor = array.colors.underline_color;

const inputs_form = document.createElement("form")



inputs_form.append(nameInput,emailInput);

middleDiv.append(headerTxt, subheader, underline, text, inputs_form)

let terms_conditions = document.querySelector('.terms_conditions')
terms_conditions.style.backgroundColor = array.colors.background_color

const waring = document.querySelector('.disclaimer');
waring.style.color = array.colors.button_color;

const textAddiction = document.querySelector('.text-addiction');
textAddiction.style.color = array.colors.header_text_color;

const UKGG = document.querySelector(".text-UKGG");
UKGG.style.color = array.colors.header_text_color;

const footer = document.querySelector(".footer");
footer.style.backgroundColor = array.colors.footer_color;

const footerTxt = document.querySelector(".footer-text");
footerTxt.style.color = array.colors.background_color;

    });
};
getData();
