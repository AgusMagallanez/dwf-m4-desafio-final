function headerComponent(el){
    const componentHeadEl = document.createElement("div")
    componentHeadEl.innerHTML = `
    <header class="header">
    <a href="./index.html"> <img src="./img/logo.png" class="logo"></a>
    <div class="header__links">
      <a href="./portfolio.html">Portfolio</a>
      <a href="./services.html">Services</a>
      <a href="./contact.html">Contact</a>
    </div>
    <button class="header__menu-button">
    <div class="header__menu-container">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </button>
    <div class="header__menu-display">
      <p class="header__menu-xmark">x</p> 
      <a href="./portfolio.html">Portfolio</a>
      <a href="./services.html">Services</a>
      <a href="./contact.html">Contact</a>
    </div>
    </header>
    `
    el.appendChild(componentHeadEl);
    
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