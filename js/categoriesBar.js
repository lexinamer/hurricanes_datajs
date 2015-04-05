
// SPEED GRAPH - CATEGORIES WIND SPEED


$(document).ready(function() {

      $('#categories').highcharts({

          chart: {
              type: 'columnrange',
              inverted: false
          },

          title: {
              text: 'Wind Speed for Categories'
          },

          xAxis: {
              categories: ['Cat. 1', 'Cat. 2', 'Cat. 3', 'Cat. 4', 'Cat. 5']
          },

          yAxis: {
              title: {
                  text: 'Wind Speedh ( MPH )'
              }
          },

          tooltip: {
              valueSuffix: 'MPH'
          },

          plotOptions: {
              columnrange: {
                dataLabels: {
                  enabled: true,
                  formatter: function () {
                    return this.y + ' MPH';
            }
        }
    }
},

          legend: {
              enabled: false
          },

          series: [{
              name: 'Wind Speed',
              data: [
                  [74, 95],
                  [96, 110],
                  [111, 129],
                  [130, 156],
                  [157, 200]
              ]
          }]

    });

});
