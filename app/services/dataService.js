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
        var ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var ID_LENGTH = 8;

        var save = function(question, count) {
            return $http.post('/api/save/'+count, question);
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
            arrowCoords = uniqueArrows;
            console.log(arrowCoords);
        }

        function editArrowCoords(type){
            if(type == "all"){
                arrows = [];
            } else if(type == "single"){
                arrows.pop();
            }
            console.log(arrowCoords);
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

        var generateId = function() {
            var rtn = '';
            for (var i = 0; i < ID_LENGTH; i++) {
                rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
            }
            return rtn;
        };

        return{
            save: save,
            setSquareCoords: setSquareCoords,
            getSquareCoords: getSquareCoords,
            setArrowCoords: setArrowCoords,
            editArrowCoords: editArrowCoords,
            getArrowCoords: getArrowCoords,
            setChartValue: setChartValue,
            getChartValue: getChartValue,
            generateId: generateId
        };
    }

})();