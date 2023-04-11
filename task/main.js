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
nameInput.id = "name";
nameInput.type = "text"
nameInput.placeholder = "Name"
nameInput.style.display = "block"
nameInput.style.paddingBottom = "10px";
nameInput.style.borderColor = array.colors.underline_color


const emailInput = document.createElement("input");
emailInput.id = "email"
emailInput.type = "text";
emailInput.name = "text1"
emailInput.placeholder = "E-mail"
emailInput.style.marginBottom = "30px";
emailInput.style.paddingBottom = "10px";



emailInput.style.borderColor = array.colors.underline_color;

const Form = document.createElement("form");
Form.name = "form1";
const inputs_form = document.createElement("form")
inputs_form.action = "/";

Form.appendChild(inputs_form);

const radios = document.querySelector(".inputs_form");

const label1 = document.querySelector(".label1");
label1.style.color = array.colors.header_text_color;3

const label2 = document.querySelector(".label2");
label2.style.color = array.colors.header_text_color;

const greenSpan = document.querySelector('.green');
greenSpan.style.color = array.colors.button_color;

const div_button = document.createElement("div");
div_button.classList.add("div_button");
const button = document.createElement("button")
button.style.backgroundColor = array.colors.button_color;
button.setAttribute("type", "submit");
button.innerText = array.button_text;

button.addEventListener("submit", validateEmail);

div_button.append(button)

const TA_div = document.createElement("div")
TA_div.classList.add("center-div")
const termsAndConditions = document.createElement("p");
termsAndConditions.classList.add("terms_text")
termsAndConditions.innerHTML = array.terms_and_conditions;
termsAndConditions.style.color = array.colors.header_text_color;

TA_div.append(termsAndConditions);






inputs_form.append(nameInput,emailInput, radios);

middleDiv.append(headerTxt, subheader, underline, text, inputs_form, div_button, TA_div)

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


function validateEmail() {

  let characters =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if(emailInput.value.match(characters)) {
emailInput.style.backgroundColor = "green"
}
else {
  alert("Invalid email address");
}
}
    });
};
getData();
