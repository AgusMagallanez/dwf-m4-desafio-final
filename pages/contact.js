function contactFormComponent(el){
    const contactForm = document.createElement("form");
    contactForm.classList.add("contact-form__container");
    contactForm.innerHTML=`
    <div class="contact-form__title-container">
        <h2 class="contact-form__title">Escribime</h2>
    </div>

    <div class="contact-form__inputs-container">
        <div class="contact-form__inputs">
            <label for="name">Nombre</label>
            <input type="text" name="name" id="name">
        </div>

        <div class="contact-form__inputs">
            <label for="email">Email</label>
            <input type="text" name="email" id="email">
        </div>

        <div class="contact-form__inputs">
            <label for="message">Mensaje</label>
            <textarea name="message" id="message"></textarea>
        </div>

        <div class="contact-form__inputs">
            <button type="submit" class="button">Enviar</button>
        </div>
    </div>
    `;

    el.appendChild(contactForm);
}


function main(){

    headerComponent(document.querySelector(".contact-form-header__container"));

    footerComponent(document.querySelector(".contact-form-footer__container"));

    contactFormComponent(document.querySelector(".form-container"));

}

main();