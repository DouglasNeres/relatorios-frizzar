const tabs = document.querySelectorAll('.tab');
const vendasChart = document.getElementById('vendasCancelamentos').getContext('2d')
const historicoChart = document.getElementById('historicoMRR').getContext('2d')
const tableHeaders = document.querySelectorAll('th');
const tableCells = document.querySelectorAll('td');

function updateTable(activeTab) {
  const statusTd = document.querySelectorAll('td.status');
  statusTd.forEach(statusTd => {
    if (statusTd.dataset.tab.includes(activeTab)) {
      statusTd.classList.add('visible');
    } else {
      statusTd.classList.remove('visible');
    }
  });
  // Ocultar todas as colunas inicialmente
  tableHeaders.forEach(header => {
    if (header.dataset.tab) {
      header.classList.add('hidden');
    }
  });

  tableCells.forEach(cell => {
    if (cell.dataset.tab) {
      cell.classList.toggle('hidden', !cell.dataset.tab.includes(activeTab));
    }
  });

  // Mostrar colunas da aba ativa
  tableHeaders.forEach(header => {
    if (header.dataset.tab && header.dataset.tab.includes(activeTab)) {
      header.classList.remove('hidden');
    }
  });

  tableCells.forEach(cell => {
    if (cell.dataset.tab && cell.dataset.tab.includes(activeTab)) {
      cell.classList.remove('hidden');
    }
  });
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const activeTab = (index + 1).toString();
    updateTable(activeTab);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const defaultTab = document.querySelector('.tab.active');
  if (defaultTab) {
    const activeTab = '1'; // Supondo que "Vendas" corresponde ao índice 1
    updateTable(activeTab);
  }
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
  }
  })