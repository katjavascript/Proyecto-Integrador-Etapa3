import api from '../api/products.js';

////////////////////////////////////////////////////////////////////////////////
//                                 GET Controller                             //
////////////////////////////////////////////////////////////////////////////////

const getProducts = async (req, res,) => {
    res.json(await api.getProducts());
};

const getProduct = async (req, res) => {
    const id = req.params.id;
    res.json(await api.getProduct(id));
};

///////////////////////////////////////////////////////////////////////////////
//                                POST Controller                            //
///////////////////////////////////////////////////////////////////////////////

const postProduct = async (req, res) => {
    const product = req.body;
    const createdProduct = await api.createProduct(product);
    res.json(createdProduct);
};

///////////////////////////////////////////////////////////////////////////////
//                                 PUT Controller                            //
///////////////////////////////////////////////////////////////////////////////

const putProduct = async (req, res) => {
    const id = req.params.id;
    const product = req.body;
    const updatedProduct = await api.updateProduct(id, product);
    res.json(updatedProduct);
};

///////////////////////////////////////////////////////////////////////////////
//                               DELETE Controller                           //
///////////////////////////////////////////////////////////////////////////////

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    const deletedProduct = await api.deleteProduct(id);
    res.json(deletedProduct);
};


export default {
    getProducts,
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
};