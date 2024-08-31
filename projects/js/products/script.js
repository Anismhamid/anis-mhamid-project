import ProductsManager from "./productsManager.js"

const manager = new ProductsManager()

window.addItem = function addItem() {
    // collecting thwe  input values
    const rate = document.getElementById("rate").value
    const category = document.getElementById("category").value
    const name = document.getElementById("name").value
    const price = document.getElementById("price").value
    const inStock = document.getElementById("inOut").checked

    // adding new product
    manager.newProduct(inStock, category, rate, name, price)

    // reset input values
    document.getElementById("inOut").checked = false
    document.getElementById("rate").selectedIndex = 0
    document.getElementById("category").value = ""
    document.getElementById("name").value = ""
    document.getElementById("price").value = ""

    // refresh product display
    showProduct()
}

function showProduct() {
    // load products
    manager.loadProducts()
    const products = manager.products // Access the products array
    const tableBody = document.querySelector("#products")
    tableBody.innerHTML = "" // Clear existing rows

    // add rows for each product
    products.forEach((product) => {
        const row = `
            <tr>
                <td>${
                    product.inStock
                        ? '<i class="fa-solid fa-check text-success"></i>'
                        : '<i class="fa-solid fa-x text-danger"></i>'
                }</td>
                <td >${product.category}</td>
                <td >${product.rate}</td>
                <td >${product.name}</td>
                <td >${
                    product.price
                } <i class="fa-solid fa-shekel-sign fs-6 text-success"></i></td>
            </tr>
        `
        tableBody.innerHTML += row
    })
}
showProduct()
