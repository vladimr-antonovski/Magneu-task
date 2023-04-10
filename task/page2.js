
const fetchData = () => {
    fetch("GamblersKnowAPI.json")
      .then((response) => response.json())
      .then((data) => {

        let api = data;

    const Navbar = document.querySelector('#navbar');
    Navbar.style.backgroundColor = api.colors.background_color;

    const img_logo = document.createElement("img");
    img_logo.src = api.page_logo;
    img_logo.classList.add('logo');
    Navbar.append(img_logo)

    const grey_container = document.querySelector('.grey_container')
    grey_container.style.backgroundColor = "#474747"

    const h1 = document.createElement("h1");
    h1.innerHTML = api.header;
    h1.style.color = api.colors.header_text_color;

    const subText = document.createElement('p');
    subText.innerHTML = api.subheader;
    subText.style.color = api.colors.header_text_color;
    subText.classList.add('sub_header')

    grey_container.append(h1, subText)


    });
};
fetchData();  