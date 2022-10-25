import getUrl from "./getUrl.js";

const getCountries = () => {
  getUrl("https://restcountries.com/v3.1/lang/spanish").then((response) => {
    const paises = document.getElementById("pais");
    response
      .sort((a, b) => a.name.common.localeCompare(b.name.common))
      .forEach((pais) => {
        paises.innerHTML += `<option value= ${pais.name.common} >${pais.name.common}</option>`;
      });
  });
};

export default getCountries;
