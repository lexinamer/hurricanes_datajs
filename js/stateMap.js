// MAP - HURRICANES PER STATE

$( document ).ready(function() {

    $.getJSON('data/state.json', function (data) {

        // Make codes uppercase to match the map data
        $.each(data, function () {
            this.code = this.code.toUpperCase();

        });

        // Instanciate the map
        $('#map').highcharts('Map', {

            chart : {

            },

            title : {
                text : 'Hover over State to See Total Number',
                style: {
                    fontWeight: 'normal',
                    fontFamily: 'Open Sans',
                    fontSize: '1em',
                    color: 'gray'
            }
            },

            legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: 'rgba(255,255,255,0.85)',
                floating: true,
                verticalAlign: 'top',
                y: 25
            },

            mapNavigation: {
                enabled: false
            },

            colorAxis: {
                min: 1,
                type: 'logarithmic',
                minColor: '#EFF2F6',
                maxColor: '#1E6388',
                stops: [
                    [0, '#EFF2F6'],
                    [0.67, '#84A0B7'],
                    [1, '#1E6388']
                ]
            },

            exporting: {
                enabled: false
            },

            series : [{
                animation: {
                    duration: 1000
                },
                data : data,
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: ['postal-code', 'code'],
                dataLabels: {
                    enabled: true,
                    color: 'white',
                    format: '{point.code}'
                },
                name: 'From 1950-2005:',
                tooltip: {
                    pointFormat: '{point.code}: {point.value}'
                },
            }]
        });


    });
});
