(function() {

    angular
        .module("crowdspy")
        .directive('myChart',
        function(){
            return{
                restrict: 'E',
                scope: {
                    type: '@',
                    source: '=',
                    chartId: '@'
                },
                template: '<div id="{{chartId}}" style="min-width:300px; height:300px; margin:0 auto"></div>',
                link: function (scope, element, attrs){
                    var chart = false;

                    var initChart = function(){
                        if (chart) chart.destroy();
                        var config = scope.config || {};

                        chart = AmCharts.makeChart(scope.chartId,{
                            "type": scope.type,
                            "theme": "light",
                            "pathToImages": "../bower_components/amcharts3/amcharts/images/.",
                            "dataProvider": scope.source,
                            "valueField": "stub",
                            "titleField": "direction",
                            "colorField": "color",
                            "labelText": "[[title]]",
                            "balloonText": "[[balloon]]",
                            "listeners": [{
                                "event": "clickSlice",
                                "method": function(e) {
                                    var dp = e.dataItem.dataContext;
                                    if (dp[chart.colorField] === "#76EE00") {
                                        for(var i = 0; i < scope.source.length; i++) {
                                            scope.source[i].color = "#76EE00";
                                        }
                                        dp[chart.colorField] = "#cc0000";
                                    }
                                    else {
                                        dp[chart.colorField] = "#76EE00";
                                    }
                                    e.chart.validateData();
                                }
                            }]
                        });
                    };
                    initChart();
                }
            }
        })

})();
