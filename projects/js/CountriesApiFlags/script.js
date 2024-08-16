


async function searchCity() {
    let name = document.getElementById('data-list').value
    let img = document.getElementById('img');
    let options = document.getElementById('datalistOptions');
    let box = document.getElementById('box');

    let ay = await axios.get
        (`https://restcountries.com/v3.1/name/${name}`)
        .then((countryies) => {
            let country = countryies.data[0];
            img.src = options
            img.src = country.flags.png
            let languages = Object.values(country.languages).join(', ');
            box.innerHTML = `
                <h5 class="card-subtitle text-start text-info my-3">
                    Name: ${country.name.common}
                </h5>
                <h6 class="card-text text-start text-info my-3">
                    Population: ${country.population.toLocaleString()}
                </h6>
                <h6 class="card-text text-start text-info my-3">
                    region ${country.region}
                </h6>
                <h6 class="card-text text-start text-info my-3">
                    languages: ${languages}
                </h6>
                `;
        }).catch((err) => {
            console.log(err);
            img.src = './europe_map_living_abroad.gif';
            document.getElementById('box').innerHTML = `<p >cities</p>`
        })
}