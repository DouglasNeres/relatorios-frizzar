const tabs = document.querySelectorAll('.tab');
const vendasChart = document.getElementById('vendasCancelamentos').getContext('2d')
const historicoChart = document.getElementById('historicoMRR').getContext('2d')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

  new Chart(vendasChart, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dev'],
      datasets: [{
        label: 'Vendas',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
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