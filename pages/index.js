
function main() {
    const headerContainer = document.querySelector(".header-container");
    headerComponent(headerContainer);

    const footerContainer = document.querySelector(".footer-container");
    footerComponent(footerContainer);

    const formContainer = document.querySelector(".contact-container");
    contactFormComponent(formContainer);
}

main();