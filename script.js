

function updateCountryCards() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            const updateCountryCards = document.querySelectorAll('#countryCards1 .country')
            const updateCountryCards2 = document.querySelectorAll('#countryCards2 .country')

            updateCountryCards.forEach((card, index) => {
                if (index < data.length) {
                    const country = data[index];
                    card.querySelector('img').src = country.flags.png;
                    card.querySelector('.countryName').textContent = country.name;
                    card.querySelector('.population').innerHTML = `<b>Population: </b>${country.population.toLocaleString()}`;
                    card.querySelector('.region').innerHTML = `<b>Region: </b>${country.region}`;
                }

            })
            

        })
}

updateCountryCards()
updateCountryCards2()

// function createCountryCard(imageUrl, countryName, population, region) {
//     const card = document.createElement('div');
//     card.classList.add('country');

//     const img = document.createElement('img');
//     img.classList.add('img');
//     img.src = imageUrl;
//     img.alt = '';

//     const name = document.createElement('p');
//     name.classList.add('countryName');
//     name.textContent = countryName;

//     const pop = document.createElement('p');
//     pop.classList.add('population');
//     pop.innerHTML = `<b>Population: </b>${population}`;

//     const reg = document.createElement('p');
//     reg.classList.add('region');
//     reg.innerHTML = `<b>Region: </b>${region}`;

//     card.appendChild(img);
//     card.appendChild(name);
//     card.appendChild(pop);
//     card.appendChild(reg);

//     return card;
// }

// // Populate container with country cards
// imageUrls.forEach((url, index) => {
//     const card = createCountryCard(url, 'Germany', '81,770,900', 'Capital');
//     container.appendChild(card);
// });
// // createCountryCard()