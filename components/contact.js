function contactFormEvent(){
    const contactFormEl = document.querySelector(".contact-form__container");
    contactFormEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactFormEl.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    const data = {
        to: "agustinamagallanez@gmail.com",
        message: `Name: ${name}, Email: ${email}, Message: ${message}.`,
    };

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
    }).then((data) => data.json());

    contactFormEl.reset();
    });
};

function contactFormComponent(el){
    const contactForm = document.createElement("form");
    contactForm.classList.add("contact-form__container");
    contactForm.innerHTML=`
    <div class="contact-form__title-container">
        <h2 class="contact-form__title">Contact</h2>
    </div>

    <div class="contact-form__inputs-container">
        <div class="contact-form__inputs">
            <label for="name">Name</label>
            <input type="text" name="name" id="name">
        </div>

        <div class="contact-form__inputs">
            <label for="email">Email</label>
            <input type="text" name="email" id="email">
        </div>

        <div class="contact-form__inputs">
            <label for="message">Message</label>
            <textarea name="message" id="message"></textarea>
        </div>

        <div class="contact-form__inputs">
            <button type="submit" class="button">Send</button>
        </div>
    </div>
    `;

    el.appendChild(contactForm);
    contactFormEvent();
};




