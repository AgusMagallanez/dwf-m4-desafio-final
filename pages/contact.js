function addComponents(){
    const header = document.querySelector(".contact-form-header__container");

    const contactForm = document.querySelector(".form-container");

    const footer = document.querySelector(".contact-form-footer__container");

    headerComponent(header);
    footerComponent(footer);
    contactFormComponent(contactForm);
};

addComponents();