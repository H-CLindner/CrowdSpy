(function() {

    angular
        .module('crowdspy')
        .controller('gameCtrl', gameCtrl);

    gameCtrl.$inject = ['$scope', '$location'];

    function gameCtrl ($scope, $location) {

        var vm = this;

        var counter = 0;

        $scope.image = '../styles/images/menschenmenge.jpg';

        $scope.procedure = function() {
                switch (counter) {
                    case 0:
                        console.log("Bild 1");
                        $scope.type = single;
                        $scope.image = '../styles/images/AnalyseData/Count1.png';
                        counter++;
                        break;
                    case 1:
                        console.log("Bild 2");
                        $scope.type = single;
                        $scope.image = '../styles/images/AnalyseData/Density1.png';
                        counter++;
                        break;
                    case 2:
                        console.log("Bild 3");
                        counter++;
                        break;
                    case 3:
                        console.log("Bild 4");
                        counter++;
                        break;
                    case 4:
                        console.log("Bild 5");
                        counter++;
                        break;
                    case 5:
                        console.log("Bild 6");
                        counter++;
                        break;
                    case 6:
                        console.log("Bild 7");
                        counter++;
                        break;
                    case 7:
                        console.log("Bild 8");
                        counter++;
                        break;
                    case 8:
                        console.log("Bild 9");
                        counter++;
                        break;
                    case 9:
                        console.log("Bild 10");
                        counter++;
                        break;
                    case 10:
                        console.log("Bild 11");
                        counter++;
                        break;
                    case 11:
                        console.log("Bild 12");
                        counter++;
                        break;
                    case 12:
                        console.log("Bild 13");
                        counter++;
                        break;
                    case 13:
                        console.log("Bild 14");
                        counter++;
                        break;
                    case 14:
                        console.log("Bild 15");
                        counter++;
                        break;
                    case 15:
                        console.log("Bild 16");
                        counter++;
                        break;
                    case 16:
                        console.log("Bild 17");
                        counter++;
                        break;
                    case 17:
                        console.log("Bild 18");
                        counter++;
                        break;
                    case 18:
                        console.log("Bild 19");
                        counter++;
                        break;
                    case 19:
                        console.log("Bild 20");
                        counter++;
                        break;
                    case 20:
                        console.log("Bild 21");
                        counter++;
                        break;
                }
        }

    }

})();