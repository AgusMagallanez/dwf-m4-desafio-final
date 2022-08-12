function headerComponent(el){
    const componentEl = document.createElement("div")
    componentEl.innerHTML = `
    <header class="header">
    <a href="./index.html"> <img src="./img/logo.png" class="logo"></a>
    <div class="header__links">
      <a href="./portfolio.html">Portfolio</a>
      <a href="./servicies.html">Servicios</a>
      <a href="./contact.html">Contacto</a>
    </div>
    <button class="header__menu-button">
    <div class="header__menu-container">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </button>
    <div class="header__menu-display">
      <img src="./img/x-mark.png" class="header__menu-xmark"> 
      <a href="./portfolio.html">Portfolio</a>
      <a href="./servicies.html">Servicios</a>
      <a href="./contact.html">Contacto</a>
    </div>
    </header>
    `
    el.appendChild(componentEl);
    
    const menuOpen = document.querySelector(".header__menu-button");
    const menuEl = document.querySelector(".header__menu-display");
    const menuClose = document.querySelector(".header__menu-xmark");
  
  menuOpen.addEventListener("click",() => {
    menuEl.style.display = "grid";
  })
  

  menuClose.addEventListener("click",() => {
    menuEl.style.display = "none";
  });
}