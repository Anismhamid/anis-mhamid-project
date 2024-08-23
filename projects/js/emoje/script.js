const URL = "https://api.escuelajs.co/api/v1/products";

async function getData() {
	try {
		const response = await fetch(URL);
		const data = await response.json();
		display(data);
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}
getData();

function display(data) {
	if (data) {
		for (let i of data) {
			document.querySelector("#container").innerHTML += `
        <div class="card">
            <div class="card-header">
            <h5 class="display-6 card-title">title: ${i.title}</h5>
            <h5 class="display-6 card-title">category: ${i.category.name}</h5>
            </div>
            <div class="card-body">
            <h5 class="display-6 card-title">${i.description}</h5>
            <img src="${i.images[0].image}">
            </div>
            <img src="${`https://api.lorem.space/image/fashion?w=640&h=480&r=4278`}">
            
        
        </div>
        `;
		}
	} else {
		console.log("saa");
	}
}
