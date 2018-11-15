import { PolarArea } from 'vue-chartjs'

export default {
  extends: PolarArea,
  mounted: function mounted() {
    this.renderChart({
      labels: ['Vue/Nuxt', 'SCSS/CSS', 'Vuetify', 'Python', 'Flask', 'Webpack', 'Node/Express'],
      datasets: [{
        label: [
          'Vue/Nuxt',
          'SCSS/CSS',
          'Vuetify',
          'Python',
          'Flask',
          'Webpack',
          'Node/Express'
        ],
        backgroundColor: [
          'rgba(53, 73, 94, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(31, 150, 243, 0.5)',
          'rgba(252, 219, 75, 0.5)',
          'rgba(51, 50, 50, 0.5)',
          'rgba(137, 207, 243, 0.5)',
          'rgba(135, 194, 75, 0.5)'
        ],
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [8.5, 7, 7.5, 5.5, 6, 7.5, 5]
      }]
    },
    {
      responsive: true,
      maintainAspectRatio: false
    });
  }
};
