import config from '../config.js';
// import Model from '../models/products-mem.js';
// import Model from '../models/products-fs.js';
// import Model from '../models/products-mongodb.js';
import Model from '../models/products.js';

// const model = new Model();
// const model = Model.get('MEMORY');
// const model = Model.get('FILE SYSTEM');
// const model = Model.get('MONGODB');
const model = Model.get(config.PERSISTENCE_TYPE);
// creates PARA TESTING:
// await model.createProduct({ "name": "Andador Primeros Pasos", "price": 2499.99, "stock": 25, "brand": "Fisher-Price", "category": "Bebés", "shortDescription": "Andador para bebés", "longDescription": "El andador primeros pasos ayuda a los bebés a dar sus primeros pasos de forma segura. Con actividades interactivas y sonidos divertidos, estimula el desarrollo motor.", "freeShipping": true, "ageFrom": 6, "ageUpTo": 12, "ageUnit": "meses", "mainPhoto": "andador.jpg" });
// await model.createProduct({ "name": "L.O.L. Surprise!", "price": 1299.99, "stock": 15, "brand": "Hasbro", "category": "Muñecas", "shortDescription": "Muñeca sorpresa", "longDescription": "Las L.O.L. Surprise! son muñecas coleccionables con diferentes capas de sorpresas. Cada muñeca incluye accesorios, pegatinas y más.", "freeShipping": true, "ageFrom": 4, "ageUpTo": 10, "ageUnit": "años", "mainPhoto": "lol-surprise.jpg" });
// await model.createProduct({ "name": "Trivial Pursuit", "price": 1499.99, "stock": 10, "brand": "Hasbro", "category": "Juegos de mesa", "shortDescription": "Juego de preguntas y respuestas", "longDescription": "El Trivial Pursuit es un juego clásico de preguntas y respuestas en el que pondrás a prueba tus conocimientos en diversas categorías. ¡Demuestra quién sabe más!", "freeShipping": false, "ageFrom": 12, "ageUpTo": 99, "ageUnit": "años", "mainPhoto": "trivial-pursuit.jpg" });
// await model.createProduct({ "name": "Sudoku Deluxe", "price": 599.99, "stock": 5, "brand": "Ruibal", "category": "Juegos de ingenio", "shortDescription": "Juego de lógica y números", "longDescription": "El Sudoku Deluxe es un desafiante juego de lógica y números en el que deberás completar un tablero de 9x9 casillas con los números del 1 al 9, sin repetirlos en filas, columnas y subgrids.", "freeShipping": true, "ageFrom": 10, "ageUpTo": 99, "ageUnit": "años", "mainPhoto": "sudoku-deluxe.jpg" });
// await model.createProduct({ "name": "Dragon Ball Z Figura Articulada", "price": 1999.99, "stock": 8, "brand": "Bandai", "category": "Figuras de acción", "shortDescription": "Figura articulada de Dragon Ball Z", "longDescription": "Agrega a tu colección esta increíble figura articulada de Dragon Ball Z. Detalles precisos y poseable en diferentes posiciones. ¡Revive tus momentos favoritos del anime!", "freeShipping": true, "ageFrom": 8, "ageUpTo": 99, "ageUnit": "años", "mainPhoto": "dbz-figura.jpg" });
// await model.createProduct({ "name": "Burako", "price": 799.99, "stock": 20, "brand": "Ruibal", "category": "Juegos de mesa", "shortDescription": "Juego de estrategia con fichas", "longDescription": "El Burako es un juego de estrategia que combina elementos de Rummy y Canasta. Agrupa tus fichas y realiza combinaciones para ser el primero en quedarte sin ellas.", "freeShipping": false, "ageFrom": 10, "ageUpTo": 99, "ageUnit": "años", "mainPhoto": "burako.jpg" });
// await model.createProduct({ "name": "Muñeca Bebé Realista", "price": 1499.99, "stock": 12, "brand": "Zapf Creation", "category": "Muñecas", "shortDescription": "Muñeca bebé realista", "longDescription": "Esta muñeca bebé realista es perfecta para los más pequeños. Con detalles cuidadosamente diseñados y funciones interactivas, brinda una experiencia de juego única.", "freeShipping": true, "ageFrom": 3, "ageUpTo": 6, "ageUnit": "años", "mainPhoto": "muneca-bebe.jpg" });
// await model.createProduct({ "name": "Laberinto Mágico", "price": 899.99, "stock": 6, "brand": "Ravensburger", "category": "Juegos de ingenio", "shortDescription": "Juego de laberintos", "longDescription": "El Laberinto Mágico es un emocionante juego de estrategia donde deberás moverte por un laberinto en busca de objetos mágicos. ¡Ten cuidado con las paredes invisibles!", "freeShipping": true, "ageFrom": 6, "ageUpTo": 12, "ageUnit": "años", "mainPhoto": "laberinto-magico.jpg" });
// await model.createProduct({ "name": "Ratón de Juguete Interactivo", "price": 699.99, "stock": 4, "brand": "Furreal Friends", "category": "Bebés", "shortDescription": "Juguete interactivo para bebés", "longDescription": "El ratón de juguete interactivo es perfecto para los bebés. Con sonidos divertidos y movimientos interactivos, estimula la curiosidad y el desarrollo sensorial.", "freeShipping": true, "ageFrom": 3, "ageUpTo": 12, "ageUnit": "meses", "mainPhoto": "raton-juguete.jpg" });
// await model.createProduct({ "name": "Puzzle 1000 Piezas", "price": 699.99, "stock": 18, "brand": "Educa", "category": "Juegos de ingenio", "shortDescription": "Puzzle desafiante", "longDescription": "El puzzle de 1000 piezas es perfecto para los amantes de los desafíos. Arma la imagen paso a paso y disfruta de horas de entretenimiento y concentración.", "freeShipping": false, "ageFrom": 12, "ageUpTo": 99, "ageUnit": "años", "mainPhoto": "puzzle-1000.jpg" });



////////////////////////////////////////////////////////////////////////////////
//                                 API Get All                                //
////////////////////////////////////////////////////////////////////////////////

const getProducts = async () => {
    const products = await model.getProducts();
    return products;
};

////////////////////////////////////////////////////////////////////////////////
//                                 API Get One                                //
////////////////////////////////////////////////////////////////////////////////

const getProduct = async id => {
    const product = await model.getProduct(id);
    return product;
}

////////////////////////////////////////////////////////////////////////////////
//                                 API Create                                 //
////////////////////////////////////////////////////////////////////////////////

const createProduct = async product => {
    const createdProduct = await model.createProduct(product);
    return createdProduct;
};

////////////////////////////////////////////////////////////////////////////////
//                                 API  Update                                //
////////////////////////////////////////////////////////////////////////////////

const updateProduct = async (id, product) => {
    const updatedProduct = await model.updateProduct(id, product);
    return updatedProduct;
};

////////////////////////////////////////////////////////////////////////////////
//                                 API  Delete                                //
////////////////////////////////////////////////////////////////////////////////

const deleteProduct = async id => {
    const deletedProduct = await model.deleteProduct(id);
    return deletedProduct;
};


export default {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};