
const regAsia = fetch("https://restcountries.eu/rest/v2/region/asia")
  .then((data) => data.json())

const regEU = fetch("https://restcountries.eu/rest/v2/region/europe")
  .then((data) => data.json())

const allreg = Promise.all([regAsia, regEU])
 .then((values) => {
  console.log(values.concat.apply([], values));
 })

const all = allreg.filter((name) => {
  console.log(name.languages,name == 'Spanish')
})

function createFlag({name, flag, population, region, capital, languages}) {
  // const {name, flag, population, region, capital} = country;
  const info = document.createElement("div");
  info.setAttribute("class", "container");

  info.innerHTML = `
  <div class="flag-container">
       <img class="flag" src=${flag} width="250px" height="150px" />
  </div>
  
  <div class="details">
    <h3>${name}</h3>
    <p><b>Population:</b>${population}</p>
    <p><b>Region:</b>${region}</p>
    <p><b>Capital:</b>${capital}</p>
  </div>
</div>
`;
  document.body.append(info);
}
