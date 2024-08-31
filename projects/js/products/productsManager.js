import Products from "./product.js"

class ProductsManager {
	constructor() {
		this.products = [] || this.setToLocalStorage() // products array
		this.loadProducts() || [] // load products from localStorage if available
	}

	// method to create a new product and add it to the list
	newProduct(inStock, category, rate, name, price) {
		const newProduct = new Products(inStock, category, rate, name, price)
		this.products.push(newProduct)
		this.setToLocalStorage()
	}

	// method to save products array to localStorage
	setToLocalStorage() {
		localStorage.setItem("products", JSON.stringify(this.products))
	}

	// mnethod to load products from localStorage
	loadProducts() {
		const storedProducts = localStorage.getItem("products")
		if (storedProducts) {
			const productsData = JSON.parse(storedProducts)
			this.products = productsData.map(
				(productData) =>
					new Products(
						productData.inStock,
						productData.category,
						productData.rate,
						productData.name,
						productData.price
					)
			)
		}
	}
}

export default ProductsManager
