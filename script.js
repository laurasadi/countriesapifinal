// Ko man reiks//
// fetch api
//paieska
//filtras
const saliuTempl = document.getElementById("countries");
const filterMyg = document.getElementById("filter");
const filterReg = document.querySelectorAll("li");
const paieska = document.getElementById("search");

gaunamSalys();

async function gaunamSalys(){
  const response = await fetch('https://restcountries.eu/rest/v2/all');
  const salis = await response.json();

  rodykSalis(salis);

}

function rodykSalis(salis){
  salis.forEach(country =>{
  const saliesTempl = document.createElement("div");
  saliesTempl.classList.add('card');

  saliesTempl.innerHTML = `

  <div class = "">
            <img src="${country.flag}" alt="">

          <div class="countryBody">
            <h2 class = "saliespav">${country.name}</h2>
            <p><strong>Population: </strong>${country.population}</p>
            <p class = "countryRegion"><strong>Region: </strong>${country.region}</p>
            <p><strong>Capital: </strong>${country.capital}</p>
          </div>
        </div>
`

saliuTempl.appendChild(saliesTempl);
});
}


filterMyg.addEventListener('click', () => {
  filterMyg.classList.toggle('open');
});




paieska.addEventListener('input', e => {
  const {value} = e.target;
  const pavadinimas = document.querySelectorAll('.saliespav');


  pavadinimas.forEach(name => {
    console.log(name.innerHTML);
    if(name.innerText.toLowerCase().includes(value.toLowerCase())) {
      name.parentElement.parentElement.style.display = 'block';
    } else {
      name.parentElement.parentElement.style.display = 'none';
    }
  });
});

  filterReg.forEach(filter =>{
  filter.addEventListener('click', () =>{
  // console.log(filter.innerText);
  const value = filter.innerText;
  const countryRegion = document.querySelectorAll('.countryRegion');
  countryRegion.forEach(region => {
  
  if(region.innerText.includes(value)|| value === 'All') {
      region.parentElement.parentElement.style.display = 'block';
    } else {
      region.parentElement.parentElement.style.display = 'none';
    }
} )
});
});