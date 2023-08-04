

class Main {

    async ajax(url, method = 'get') {
        return await fetch(url, { method: method }).then(r => r.text())
    }

    getIdFromHash() {
        let id = location.hash.slice(1);
        if (id[0] === '/') {
            id = id.slice(1);
        }
        return id || 'home';
    }

    getViewUrlFromId(id) {
        return `views/${id}.html`;
    }

    getModuleUrlFromId(id) {
        return `./modules/${id}.js`;
        
    }

    setActiveLink(id) {
        const links = document.querySelectorAll('.main-nav__link');
        links.forEach(link => {
            if (link.getAttribute('href') === `#/${id}`) {
                link.classList.add('main-nav__link--active');
                link.ariaCurrent = 'page';
            } else {
                link.classList.remove('main-nav__link--active');
                link.removeAttribute('aria-current');
            }
        });
    }
    async initJS(id) {
        const moduleUrl = this.getModuleUrlFromId(id);
        try {
            const {default: module} = await import(moduleUrl);
            if (typeof module.init !== 'function') {
                console.error(`El módulo ${id} no posee un método init().`);
                return;
            }
            module.init();
        } catch (error) {
            console.error(`No se pudo importar el módulo ${moduleUrl}.`);
        }
    }

    async loadTemplate() {
        const id = this.getIdFromHash();
        
        const viewUrl = this.getViewUrlFromId(id);
        const viewContent = await this.ajax(viewUrl);
        document.querySelector('#container-body').innerHTML = viewContent;

        this.setActiveLink(id);

        this.initJS(id);
    }

    async loadTemplates() {
        this.loadTemplate();
        window.addEventListener('hashchange', () => this.loadTemplate());
    }

    async start() {
        await this.loadTemplates();
    }
    
}

const main = new Main();
main.start();



const studentName='Katriny Pérez Fábrega';
const proyectName='Proyecto Integrador: Juguetería Cósmica';

document.title = `${document.title} - ${studentName} - ${proyectName}`;

/**
 * Esta función me permite cargar un fragmento de html en un id dado, contenedor
 * @example renderComponent('content-header.hbs', 'container-header');
 * @param fileName
 * @param id
 * @param datos
 * @returns {Promise<void>}
 */



async function renderComponent(fileName, id, datos = {})  {
    const element = document.getElementById(id);
    if (element) {
        const response = await fetch(`templates/${fileName}`);
        const template = await response.text()
        const htmlCompile = Handlebars.compile(template)
        element.innerHTML = htmlCompile(datos);
    }
}


function OpenCart() {
    document.querySelector('.content-cart-modal').classList.add('showCar')
}

function CloseCart() {
    document.querySelector('.content-cart-modal').classList.remove('showCar')
}

async function callCards(){
    try{
        const response = await fetch('products/products.json')
        return await response.json()
    }
    catch (error) {
        console.error(error)
        return []
    }
}

window.addEventListener('keydown', function(event){
    let teclaEsc = event.keyCode;
    if (teclaEsc === 27) {
        CloseCart();
    }
});

