import getUrl from "./getUrl.js";

const selectCountry = (pais) => {
  // let pais = document.getElementById('pais').value; //link a select de html, extrae valor seleccionado (value)
  let magnitudArray = [];
  let fechasArray = [];

  const url =
    "https://chilealerta.com/api/query/?user=antoniaa&select=ultimos_sismos&country=" +
    pais;

  getUrl(url).then((data) => {
    const sismos = data["ultimos_sismos_" + pais]; // ultimo sismos es la propiedad del obejto----para poder concatenar, ponemos atributos entre comillas y lo podemos concatenar con la variable
    //es la forma para concatenar datos a la propiedad de un objeto.
    //con punto (.) no sirve pa concatenar
    const message = document.getElementById("message");
    if (!sismos.length) {
      message.innerHTML =
        "No hay datos para mostrar, por favor elige otro país";
    } else {
      message.innerHTML = "";
    }

    const colorBar = [...sismos]
      .map((sismo) => {
        if (sismo.magnitude < 4) {
          return "green"; // cambiar color por colores lindos
        } else if (sismo.magnitude < 5) {
          return "orange";
        }
        return "red";
      })
      .reverse();

    magnitudArray = [...sismos]
      .reverse() //estamos recorriendo sismos(ultimos_sismos)que es un array de objetos, recolectando propiedad magnitud
      .map((sismo) => sismo.magnitude);

    fechasArray = [...sismos]
      .reverse() //revisar si le ponemos moment, modificar despues de flecha.
      .map((sismo) => {
        let fecha = new Date(sismo.chilean_time);
        console.log(fecha);
        return `${fecha.getDate()}/${fecha.getMonth()} ${fecha.getHours()}:${fecha.getMinutes()}`;
      });

    //para actualizar info del chart
    myChart.data.labels = fechasArray; // eje x
    myChart.data.datasets[0].label = pais; // nombre pais, titulo
    myChart.data.datasets[0].data = magnitudArray; // eje y
    myChart.data.datasets[0].backgroundColor = colorBar;
    myChart.update();
  });
};
export default selectCountry;
