const backgroundBar = () => {
  const graph = document.getElementById("sismosChile");
  window.myChart = new Chart(graph, {
    type: "bar",
    data: {
      labels: [],
      datasets: [
        {
          label: "País, magnitud y fecha",
          data: [],

          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
          suggestedMin: 3,
          suggestedMax: 6,
        },
      },
    },
  });
};

export default backgroundBar;
