
class ProductModelMem {

    products = [];
    lastId = 0;

    getNextId () {
        return (++this.lastId).toString();
    }


    ////////////////////////////////////////////////////////////////////////////////
    //                                 CRUD - C: Create                           //
    ////////////////////////////////////////////////////////////////////////////////

    async createProduct (product) {
        product.id = this.getNextId();
        this.products.push(product);
        return product;
    }

    ////////////////////////////////////////////////////////////////////////////////
    //                                 CRUD - R: Read                             //
    ////////////////////////////////////////////////////////////////////////////////

    async getProducts () {
        return this.products;
    }

    async getProduct (id) {
        return this.products.find(product => product.id === id) || {};
    };

    ////////////////////////////////////////////////////////////////////////////////
    //                                 CRUD - U: Update                           //
    ////////////////////////////////////////////////////////////////////////////////

    async updateProduct (id, product) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) {
            return {};
        }
        product.id = id;
        this.products[index] = product;
        return product;
    };

    ////////////////////////////////////////////////////////////////////////////////
    //                                 CRUD - D: Delete                           //
    ////////////////////////////////////////////////////////////////////////////////

    async deleteProduct (id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) {
            return {};
        }
        const removedProduct = this.products.splice(index, 1)[0];
        return removedProduct;
    };

}

export default ProductModelMem;
