import { PolarArea } from 'vue-chartjs'

export default {
  extends: PolarArea,
  mounted: function mounted() {
    this.renderChart({
      labels: ['Vue/Nuxt', 'SCSS/CSS', 'Vuetify', 'Python/Flask', 'Flask', 'Webpack', 'Node/Express', 'React'],
      datasets: [{
        label: [
          'Vue/Nuxt',
          'SCSS/CSS',
          'Vuetify',
          'Python/Flask',
          'Flask',
          'Webpack',
          'Node/Express',
          'React'
        ],
        backgroundColor: [
          'rgba(53, 73, 94, 0.3)',
          'rgba(255, 99, 132, 0.3)',
          'rgba(31, 150, 243, 0.3)',
          'rgba(252, 219, 75, 0.3)',
          'rgba(51, 50, 50, 0.3)',
          'rgba(137, 207, 243, 0.3)',
          'rgba(135, 194, 75, 0.3)',
          'rgba(81, 98, 142, 0.3)'
        ],
        pointBackgroundColor: [
          'rgba(53, 73, 94, 1)',
          'rgba(255,99,132,1)',
          'rgba(31, 150, 243, 1)',
          'rgba(252, 219, 75, 1)',
          'rgba(51, 50, 50, 1)',
          'rgba(137, 207, 243, 1)',
          'rgba(135, 194, 75, 1)',
          'rgba(81, 98, 142, 1)'
        ],
        hoverBackgroundColor: [
          'rgba(53, 73, 94, 1)',
          'rgba(255,99,132,1)',
          'rgba(31, 150, 243, 1)',
          'rgba(252, 219, 75, 1)',
          'rgba(51, 50, 50, 1)',
          'rgba(137, 207, 243, 1)',
          'rgba(135, 194, 75, 1)',
          'rgba(81, 98, 142, 1)'
        ],
        borderColor: [
          'rgba(53, 73, 94, 1)',
          'rgba(255,99,132,1)',
          'rgba(31, 150, 243, 1)',
          'rgba(252, 219, 75, 1)',
          'rgba(51, 50, 50, 1)',
          'rgba(137, 207, 243, 1)',
          'rgba(135, 194, 75, 1)',
          'rgba(81, 98, 142, 1)'
        ],
        hoverBorderColor: [

        ],
        data: [8, 7, 7.5, 5.5, 6, 7, 5, 5.5]
      }]
    },
    {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Skills',
        fontSize: 24,
        fontColor: '#fff'
      },
      legend: {
        labels: {
          padding: 10,
          fontColor: 'rgba(189, 189, 189, 1)'
        },
        position: 'left'
      },
      layout: {
        padding: {
          left: 50,
          right: 50,
          top: 0,
          bottom: 5
        }
      },
      scale: {
        ticks: {
          min: 0,
          max: 10,
          showLabelBackdrop: false
        }
      }
    },
  );
  }
};
