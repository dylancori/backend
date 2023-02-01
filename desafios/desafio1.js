import { json } from "express"

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

updateProduct = async (id,product)=>{
    const productIndex = this.products.findIndex(e=>e.id ===id)
    if (productIndex === -1) {
        console.log('producto no encontrado')
        return
    } else {
        const update = this.product.map((element)=>{
            if (element.id === id) {
                element.title = product.title,
                element.description = product.description,
                element.price = product.price,
                element.thumbnail = prod.thumbnail,
                element.code = product.code,
                element.stock = product.stock
            }
            return element
        })
        this.products = update
    }
    await fs.promises.writeFile(this.path,JSON.stringify(this.products,null,'\t'))

    getProducts = async () =>{
        try {
            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, 'utf-8')
                this.products = JSON.parse(data)
            }
            return this.products
        } catch (e) {
            console.log(e)
        }
    }

    getProductsById = async(id) =>{
      await this.getProducts()
      const productIndex = this.products.findIndex(e=>e.id === id)

      if (productIndex === -1) {
        return "producto no encontrado"
      }else{
        return this.products[productIndex]
      }
    }
    
}


const productManager = new ProductManager()
console.log(productManager.getProducts());
productManager.addProducts("doritos","120gr", 500,"imagen no disponible","id1",15)
productManager.addProducts("rueditas","70gr", 300,"imagen no disponible","id2",15)
console.log(productManager.products)
productManager.addProducts("papas","120gr", 500,"imagen no disponible","id1",115)
productManager.addProducts("palitos","120gr", 600,"imagen no disponible","id3",25)
console.log(productManager.products)
console.log(productManager.getProductsById(3))
console.log(productManager.getProductsById(2))
console.log(productManager.getProductsById(1))