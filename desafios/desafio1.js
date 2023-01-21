class ProductManager {
    constructor (){
        this.products = []
}


getProducts = () => {
    return this.products
}
addProducts = (title,description,price,thumbnail,code,stock) =>{
    const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    }

if (this.products.find(prod => prod.code === product.code)) {
    return console.error(`ya existe un producto con este codigo es ${product.code}`)
}
if (this.products.length === 0) {
    product.id = 0

}else{
    product.id = this.products[this.products.length -1].id +1
}

this.products.push(product);
console.log(`agregaste ${product.title} correctamente`)
}


getProductsById = (id) =>{
    const product = this.products.find(prod => prod.id ===id)
    if (!product) {
        return "producto no encontrado"
    }else{
        return `producto existente codigo:${product.id}, titulo:${product.title}`
    }
}

}

const productManager = new ProductManager()
console.log(productManager.getProducts());
productManager.addProducts("doritos","120gr", 500,"imagen no disponible","id1",15)
console.log(productManager.products)
productManager.addProducts("papas","120gr", 500,"imagen no disponible","id1",115)
productManager.addProducts("palitos","120gr", 600,"imagen no disponible","id2",25)
console.log(productManager.products)
console.log(productManager.getProductsById(2))
console.log(productManager.getProductsById(1))