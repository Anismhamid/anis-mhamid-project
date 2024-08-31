class Products {
	constructor(inStock, category, rate, name, price, id) {
		this.id = Math.ceil(Math.random() * 1000)
		this.name = name
		this.category = category
		this.rate = rate
		this.price = price
		this.inStock = inStock
	}
}
export default Products
