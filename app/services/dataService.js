(function () {

    angular
        .module('crowdspy')
        .service('dataService', dataService);

    dataService.$inject = ['$http'];
    function dataService ($http) {

        var redPiece = "1";
        var squareCoords = "";
        var arrowCoords = "";
        var arrows = [];

        var save = function(question) {
            return $http.post('/api/save', question);
        };

        function setSquareCoords(coords){
            squareCoords = coords;
        }

        function getSquareCoords(){
            return squareCoords;
        }

        function setArrowCoords(coords){

            for (var i = 0; i <= coords.length; i++) {
                if(coords[i] == undefined || coords[i].x1 == undefined || coords[i].y1 == undefined || coords[i].x2 == undefined || coords[i].y2 == undefined){
                    console.log("leeres erfasst");
                } else {
                    var x1Coord = coords[i].x1.toString();
                    var y1Coord = coords[i].y1.toString();
                    var x2Coord = coords[i].x2.toString();
                    var y2Coord = coords[i].y2.toString();
                    var aCoords = [i] + ": " + x1Coord + "," + y1Coord + "," + x2Coord + "," + y2Coord;
                    arrows.push(aCoords);
                }
            }
            var uniqueArrows = arrows.filter(onlyUnique);
            console.log(uniqueArrows);
            arrowCoords = uniqueArrows;
        }

        function getArrowCoords(){
            return arrowCoords;
        }

        function setChartValue(value){
            redPiece = value;
        }

        function getChartValue(){
            return redPiece;
        }

        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

        return{
            save: save,
            setSquareCoords: setSquareCoords,
            getSquareCoords: getSquareCoords,
            setArrowCoords: setArrowCoords,
            getArrowCoords: getArrowCoords,
            setChartValue: setChartValue,
            getChartValue: getChartValue
        };
    }

})();