// LINE CHART- HURRICANES PER YEAR

var year = [];
var amount = [];
$(document).ready(function() { //runs the functions

    $.ajax({ //loads in xml file
      type: "GET",
      url: "data/yearly.xml",
      dataType: "xml",
      success: parseXML

    }); // closes ajax


    function parseXML(xml) {

      $(xml).find('storm').each(function(){ //starts loop to find all people, etc
          console.log("once for every person");
          var $storm = $(this);
          year.push(parseInt($storm.find('year').text()));
          amount.push(parseInt($storm.find('amount').text()));

      });

    buildChart();

    }

    function buildChart(xml){ //tells how to build chart

      $('#line-chart').highcharts({
          chart: {
              zoomType: 'xy'
          },
          title: {
              text: 'Hurricanes'
          },
          subtitle: {
              text: 'Source: Somewhere'
          },


          xAxis: [{ // xAxis
              title: {
                  text: 'Years of Hurricanes',
                  style: {
                      color: Highcharts.getOptions().colors[1]
                  }
              },
              categories: year,
              tickInterval: 5,
              crosshair: true
          }], //Close xaxis


          yAxis: [{ //  yAxis
              min: 0,
              max: 7,

              title: {
                  text: 'Number per Year',
                  style: {color: Highcharts.getOptions().colors[1]}
              },

              labels: {
                  format: '{value}',
                  style: {color: Highcharts.getOptions().colors[1]}
              }

            }], //close yaxis


          //other chart styling
          legend: {
              layout: 'vertical',
              align: 'left',
              verticalAlign: 'top',
              floating: true,
          },

          series: [
            {
              name: 'Number',
              type: 'spline',
              data: amount
            }
          ] ///close series

      }); //close highcharts

      } // cLose buildChart

  } ); //Close Doc Ready
