class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct({ title, description, price, thumbnail, code, stock }) {
    if (this.products.some(product => product.code === code)) {
      throw new Error("Error: El código del producto ya está en uso.");
    }

    const newProduct = {
      id: this.generateUniqueId(),
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  getProductById(productId) {
    const product = this.products.find(product => product.id === productId);

    if (!product) {
      throw new Error("Error: Producto no encontrado.");
    }

    return product;
  }

  generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}

const manager = new ProductManager();

console.log("Productos iniciales:", manager.getProducts());

try {
  const newProduct = manager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
  });

  console.log("Producto agregado:", newProduct);
} catch (error) {
  console.error(error.message);
}

console.log("Productos después de agregar:", manager.getProducts());

try {
  manager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
  });
} catch (error) {
  console.error(error.message);
}

try {
  const productId = manager.getProducts()[0].id;
  const productById = manager.getProductById(productId);
  console.log("Producto encontrado por ID:", productById);
} catch (error) {
  console.error(error.message);
}
