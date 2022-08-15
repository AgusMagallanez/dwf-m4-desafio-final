function footerComponent(el){
    const componentFootEl = document.createElement("div");
    componentFootEl.innerHTML= `
    <div class="footer__general-container">
    <a href="./index.html"><img src="./img/logo.png" class="footer__logo"></a>

    <div class="footer__sm-container">
        <a href="https://www.instagram.com/agusmagallanez/">Instagram <img src="./img/instagram.svg"></a>
        <a href="https://www.linkedin.com/in/agustina-magallanez/">Linkedin <img src="./img/linkedin.svg"></a>
        <a href="https://github.com/AgusMagallanez">GitHub <img src="./img/github.svg"></a>
    </div>
    </div>
    ` 

    el.appendChild(componentFootEl);
}