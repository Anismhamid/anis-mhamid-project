const URL = "https://freetestapi.com/api/v1/cars";

async function getData() {
	try {
		const response = await fetch(URL);
		if (!response.ok) throw new Error("Network response was not ok");
		const data = await response.json();
		display(data);
	} catch (error) {
		console.error("Fetch error:", error);
		// Optionally, show an error message in the UI
		document.querySelector("#container").innerHTML =
			"<p>Something went wrong while fetching data.</p>";
	}
}
getData();

function display(data) {
	if (Array.isArray(data) && data.length > 0) {
		const container = document.querySelector("#container");
		container.innerHTML = "";
		const options = { style: "currency", currency: "ILS" };
		data.forEach((item) => {
			const image = item.image || [];
			const imgElements = image;

			container.innerHTML += `
			<div class="row">
			<div class="col-sm-12 col-md-4 col-lg-3"></div>
                <div id="${item.id}" class="card">
                    <div class="card-header">
					<h5 class="card-title display-6 fw-bold">${item.make}</h5>
                    <img class="img-fluid" src="${imgElements}"></img>
                    </div>
                    <div class="card-body">
                    <div class="card-text">

                        <h5 class="display-6 fw-normal">מודל : <span class=" fw-bold">${
							item.model
						}</span></h5>
                        <h5 class="display-6 fw-normal">שנה :  <span class=" fw-bold">${
							item.year
						}</span></h5>
                        <h5 class="display-6 fw-normal">צבע :  <span class=" fw-bold">${
							item.color
						}</span></h5>
                        <h5 class="display-6 fw-normal">מיל :  <span class=" fw-bold">${
							item.mileage
						}</span></h5>
                        <h5 class="display-6 fw-normal">מחיר :  <span class=" fw-bold">${item.price.toLocaleString(
							"he-IL",
							options
						)}</span></h5>
                        <h5 class="display-6 fw-normal">סוג תדלוק:  <span class=" fw-bold">${
							item.fuelType
						}</span></h5>
                        <h5 class="display-6 fw-normal">הילוכים :  <span class=" fw-bold">${
							item.transmission
						}</span></h5>
                        <h5 class="display-6 fw-normal">מנוע :  <span class=" fw-bold">${
							item.engine
						}</span></h5>
                        <h5 class="display-6 fw-normal">כו"ס :  <span class=" fw-bold">${
							item.horsepower
						}</span></h5>
                        <h5 class="display-6 fw-normal">יד:  <span class=" fw-bold">${
							item.owners
						}</span></h5>
                    </div>
                    </div>
                </div>
				</div>
            `;
		});
	} else {
		console.log("No data available or data is not an array");
		document.querySelector("#container").innerHTML = "<p>No products found.</p>";
	}
}
