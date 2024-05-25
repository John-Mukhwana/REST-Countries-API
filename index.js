
// importing the json file from data.json
async function countryInformation() {
    const jsonUrl = './data.json';
  
    try {
      const response = await fetch(jsonUrl);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error('There has been a problem with your fetch operation: \n' + error.message);
    }
  }


//  handles displaying container for each country individually when country is passed.
  function displayCountry(data){
    const mainContainer=document.getElementById('main')
    // mainContainer.innerHTML='';

    const mainDiv=document.createElement('div');
    mainDiv.classList.add('container');
      
    const imageDiv=document.createElement('div');
    imageDiv.classList.add('image');
    const img=document.createElement('img');
    flag_image=data.flags['png']
    img.src=flag_image;
    imageDiv.appendChild(img);

    const infoDiv=document.createElement('div');
    infoDiv.classList.add('info');

    const h3=document.createElement('h3');
    // console.log(data.name)
    h3.innerText=data.name

    const contryInfo=document.createElement('div');
    contryInfo.classList.add('contry-info');

    const population=document.createElement('p');
    population.innerHTML=`<span>Population:</span> <span>${data.population}</span>`;
    contryInfo.appendChild(population);

    const region=document.createElement('p');
    region.innerHTML=`<span>Region:</span> <span>${data.region}</span>`;
    contryInfo.appendChild(region);

    const capital=document.createElement('p');
    capital.innerHTML=`<span>Capital:</span> <span>${data.capital}</span>`;
    contryInfo.appendChild(capital);

    infoDiv.appendChild(h3);
    infoDiv.appendChild(contryInfo);

    mainDiv.appendChild(imageDiv);
    mainDiv.appendChild(infoDiv);

    mainContainer.appendChild(mainDiv);

  }



function displayCountries(contriesData, selectedContinent) {
 
    const mainContainer=document.getElementById('main')
    mainContainer.innerHTML='';
    contriesData.forEach((countryInfo) => {
        if (countryInfo.region === selectedContinent){
            console.log(countryInfo.name)
            displayCountry(countryInfo);
        }
    });
  }
  


// display for each country
const filterDropdown = document.getElementById('filter-dropdown');
filterDropdown.addEventListener('change', () => {
    const selectedContinent = filterDropdown.value;
    // console.log(selectedContinent)
    (async () => {
      try {
        const countriesData = await countryInformation();
        displayCountries(countriesData, selectedContinent); 
      } catch (error) {
        console.error('Error fetching country information:', error);
      }
    })();
  });
  


// display for inputed country via input field
const countrySearch = document.getElementById('country');
countrySearch.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const inputValue = countrySearch.value;
        (async () => {
            try {
                const countriesData = await countryInformation();
                const selectedCountry = countriesData.find(country => country.name.toLowerCase() === inputValue.toLowerCase());
                if (selectedCountry) {
                    const mainContainer=document.getElementById('main')
                    mainContainer.innerHTML='';
                    console.log(selectedCountry);
                    displayCountry(selectedCountry);
                } else {
                    console.log(`No country found with the name "${inputValue}"`);
                }
            } catch (error) {
                console.error('Error fetching country information:', error);
            }
        })();
    }
});







// handle one country check for a specific country
// function countryCheck(countries, country){
//     countries.forEach((country) => {
//         if (country.name === country){
//             console.log(country)
//             displayCountry(country);
//         }
//     })
// }



  (async () => {
    try {
      const contriesData = await countryInformation();
        contriesData.forEach(countryInfo => {
            // console.log(contriesData[1])
            displayCountry(countryInfo);

            // console.log(data)
            
        });
    } catch (error) {
      console.error('Error fetching country information:', error);
    }
  })();

  


  function changeTheme(){
    document.body.classList.toggle('darkMode')
  }