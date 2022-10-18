function addCard(params = {}){
    const template = document.querySelector("#services-template");
    const templatesContainer= document.querySelector(".services-container");
    
    template.content.querySelector(".card-img").src = params.image;
    template.content.querySelector(".card-title").textContent = params.title;
    template.content.querySelector(".card-description").textContent = params.description;

    const clone = document.importNode(template.content , true);
    templatesContainer.appendChild(clone);
}

function getImageData(id, data){
    const  image = data.includes.Asset.find((i) =>{
        return i.sys.id == id;
    });
    return image;
}

function getDataCMS(){
    return fetch("https://cdn.contentful.com/spaces/bsclsxjn8ese/environments/master/entries?access_token=pRxuNwrd0MXHLQSDwQ3JiUC6WjIgzEPKB6HKictP9u0&content_type=contenido")
    
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const fields = data.items.map((item) =>{
            const imageId = item.fields.imagen.sys.id;
            const image = getImageData(imageId, data);
            const imgLink = image.fields.file.url;

            return {
                image: imgLink,
                title: item.fields.titulo,
                description: item.fields.descripcion,
            };
        });

        return fields;
    });
}


function main() {
    getDataCMS().then(function(services){
        for(const s of services){
            addCard(s);
        }
    });

    const headerContainer = document.querySelector(".header-container");
    headerComponent(headerContainer);

    const footerContainer = document.querySelector(".footer-container");
    footerComponent(footerContainer);

    const formContainer = document.querySelector(".contact-container");
    contactFormComponent(formContainer);
}

main();