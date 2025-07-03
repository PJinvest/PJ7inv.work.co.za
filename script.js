let chart;

function updateChart() {
  const data = [
    +document.getElementById("mon").value || 0,
    +document.getElementById("tue").value || 0,
    +document.getElementById("wed").value || 0,
    +document.getElementById("thu").value || 0,
    +document.getElementById("fri").value || 0,
    +document.getElementById("sat").value || 0,
    +document.getElementById("sun").value || 0
  ];

  if (chart) chart.destroy();

  const ctx = document.getElementById("earningsChart").getContext("2d");
  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        label: "Earnings (ZAR)",
        data: data,
        backgroundColor: "#0077cc"
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}