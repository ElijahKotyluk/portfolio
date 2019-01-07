import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  mounted: function mounted() {
    this.renderChart({
      labels: [ 'Vue', 'Nuxt', 'React', 'Vuetify', 'SCSS/CSS3', 'Flask', 'Webpack', 'Python' ],
      datasets: [{
        label: 'Skill',
        backgroundColor: 'rgba(12, 183, 207, 0.1)',
        pointBackgroundColor: 'rgba(12, 183, 207, .3)',
        hoverBackgroundColor: 'rgba(12, 183, 207, .3)',
        borderColor: 'rgba(12, 183, 207, .3)',
        hoverBorderColor: [],
        data: [ 10, 9, 6, 8, 7, 6, 8, 6 ]
      }]
    },
    {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        labels: {
          padding: 10,
          fontColor: 'rgba(200, 200, 200, 1)',
          fontSize: 18
        },
        position: 'top'
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
        pointLabels: {
          fontColor: 'rgba(12, 183, 207, .3)',
          fontSize: 16
        },
        ticks: {
          min: 0,
          max: 10,
          showLabelBackdrop: false,
          fontColor: 'rgba(250, 250, 250, .3)'
        }
      }
    },
  );
  }
};
