function addCardPortfolio(params = {}){
    const template = document.querySelector("#portfolio-template");
    const templatesContainer = document.querySelector(".portfolio-card__container");
    
    template.content.querySelector(".card-img").src = params.image;
    template.content.querySelector(".card-title").textContent = params.title;
    template.content.querySelector(".card-description").textContent = params.description;
    template.content.querySelector(".card-url").href = params.url;

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
    return fetch("https://cdn.contentful.com/spaces/bsclsxjn8ese/environments/master/entries?access_token=pRxuNwrd0MXHLQSDwQ3JiUC6WjIgzEPKB6HKictP9u0&content_type=portfolio")
    
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
                url: item.fields.url

            };
        });

        return fields;
    });
}

function main(){
    getDataCMS().then(function(projects){
        for(const p of projects){
            addCardPortfolio(p);
        }
    });

    headerComponent(document.querySelector(".portfolio-header-container"));
    footerComponent(document.querySelector(".portfolio-footer-container"))

}

main();
