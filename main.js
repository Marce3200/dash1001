function get(url){
    return Promise.resolve(
        fetch(url)
        .then((response) => response.json())
    ); 
} // busca api y transforma en json


function elegirPais(){
    let pais = document.getElementById('pais').value //link a select de html, extrae valor seleccionado (value)
    let magnitudArray = [];
    let fechasArray =[];
    
    const url = 'https://chilealerta.com/api/query/?user=antoniaa&select=ultimos_sismos&country='

    get(url + pais)
    .then((data)=> {
        
        let sismos = data["ultimos_sismos_" + pais]; // ultimo sismos es la propiedad del obejto----para poder concatenar, ponemos atributos entre comillas y lo podemos concatenar con la variable
        //es la forma para concatenar datos a la propiedad de un objeto.
        //con punto (.) no sirve pa concatenar

       
        magnitudArray = sismos.map((sismo)=> sismo.magnitude); //estamos recorriendo sismos(ultimos_sismos)que es un array de objetos, recolectando propiedad magnitud
        fechasArray = sismos.map((sismo)=> sismo.chilean_time); //revisar si le ponemos moment, modificar despues de flecha.


        //para actualizar info del chart
        myChart.data.labels = fechasArray;// eje x
        myChart.data.datasets[0].label = pais; // nombre pais, titulo
        myChart.data.datasets[0].data = magnitudArray; // eje y
        myChart.update();
       

    });

}


//funcion lambda, se autoejecuta cuando se entra a la pagina, la tenemos para inicializar el gráfico
(()=>{ 
    const graph = document.getElementById('sismosChile');
    window.myChart = new Chart(graph, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: "País, magnitud y fecha",
                data: [],
                backgroundColor: [
                    'rgba(202, 213, 19)',
                    
                
                ],
                
                borderWidth: 1
                
            }]
        },
        options: {
            scales: {
              y: {
                beginAtZero: false,
                suggestedMin: 3,
                suggestedMax: 6

              }
            }
        }
    });
// parentesis vacios funcion lambda, Funcion anonima se ejecuta a penas se abre la pagina se ejecuta
   
  
})();