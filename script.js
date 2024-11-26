const vendasChart = document.getElementById('vendasCancelamentos').getContext('2d')
const historicoChart = document.getElementById('historicoMRR').getContext('2d')
const visitasChart = document.getElementById('diasMaisVisitas').getContext('2d')

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
    document.querySelectorAll('.table').forEach((table) => table.classList.remove('active'));

    tab.classList.add('active');
    const targetTable = document.querySelector(tab.getAttribute('data-target'));
    targetTable.classList.add('active');
  });
});

  new Chart(vendasChart, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dev'],
      datasets: [
        {
            label: 'Vendas',
            data: [10, 20, 5, 30, 4, 5, 20, 15, 40, 20, 30, 35],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        },
        {
            label: 'Cancelamentos',
            data: [5, 15, 30, 18, 10, 20, 3, 10, 20, 5, 10, 20],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }
    ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
          legend: {
              position: 'top',
          },
          tooltip: {
              mode: 'index',
              intersect: false,
          }
      },
      scales: {
          x: {
              stacked: false
          },
          y: {
              stacked: false,
              beginAtZero: true
          }
      }
  }
  });

  new Chart(historicoChart, {
      type: 'line',
      data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      datasets: [{
          label: 'Histórico de MRR',
          data: [10, 20, 15, 25, 10, 35, 25, 30, 15, 30, 40, 50], // Substitua pelos seus dados
          borderColor: '#f6c23e', // Cor da linha
          backgroundColor: 'rgba(246, 194, 62, 0.2)', // Cor de preenchimento abaixo da linha
          tension: 0.4, // Suaviza as curvas
          pointBackgroundColor: '#f6c23e', // Cor dos pontos
          pointBorderWidth: 2,
          pointRadius: function(context) {
              // Destacar o maior ponto
              const index = context.dataIndex;
              const value = context.dataset.data[index];
              return value === Math.max(...context.dataset.data) ? 8 : 4;
          },
          pointHoverRadius: 10
      }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        }
    },
    scales: {
        x: {
            stacked: false
        },
        y: {
            stacked: false,
            beginAtZero: true
        }
    }
}
  })

  new Chart(visitasChart, {
    type: 'bar',
    data: {
      labels: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
      datasets: [
        {
          label: 'Vendas',
            data: [10, 20, 5, 50, 60, 15, 20],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        },
    ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
          legend: {
              position: 'top',
          },
          tooltip: {
              mode: 'index',
              intersect: false,
          }
      },
      scales: {
          x: {
              stacked: false
          },
          y: {
              stacked: false,
              beginAtZero: true
          }
      }
  }
  });