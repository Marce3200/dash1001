import backgroundBar from "./assets/scripts/chart.js";
import selectCountry from "./assets/scripts/selectCountry.js";
import getCountries from "./assets/scripts/getCountries.js";

getCountries();
backgroundBar();

document
  .getElementById("pais")
  .addEventListener("change", (e) => selectCountry(e.target.value));
