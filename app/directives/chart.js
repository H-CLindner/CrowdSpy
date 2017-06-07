(function() {

    angular
        .module("crowdspy")
        .directive('myChart',
        function (){
            return{
                restrict: 'E',
                scope: {
                    type: '@',
                    source: '=',
                    chartId: '@'
                },
                template: '<div id="{{chartId}}" style="min-width: 300px; height: 300px; margin: 0 auto"></div>',
                link: function (scope, element, attrs){
                    var chart = false;

                    var initChart = function(){
                        if (chart) chart.destroy();
                        var config = scope.config || {};

                        console.log(scope.chartId);
                        console.log(scope.source);
                        chart = AmCharts.makeChart(scope.chartId,{
                            "type": scope.type,
                            "theme": "none",
                            "pathToImages": "../bower_components/amcharts3/amcharts/images/",
                            "dataProvider": scope.source,
                            "valueField": "stub",
                            "titleField": "direction",
                            "colorField": "color",
                            "export": {
                                "enabled": true
                            },
                            "balloon": {
                                "fixedPosition": true
                            },
                            "listeners": [{
                                "event": "clickSlice",
                                "method": function(e) {
                                    var dp = e.dataItem.dataContext;
                                    if (dp[chart.colorField] === undefined) {
                                        dp[chart.colorField] = "#cc0000";
                                    }
                                    else {
                                        dp[chart.colorField] = undefined;
                                    }
                                    e.chart.validateData();
                                }
                            }]
                        });
                        console.log(chart);
                    };
                    initChart();
                }
            }
        })

})();
