(function() {

    angular
        .module('crowdspy')
        .controller('gameCtrl', gameCtrl);

    gameCtrl.$inject = ['$scope', '$location'];

    function gameCtrl ($scope, $location) {

        var vm = this;

        var counter = 0;

        $scope.image = '../styles/images/menschenmenge.jpg';
        $scope.single = "";
        $scope.direction = "";
        $scope.move = "";
        $scope.juxtapose = "";

        $scope.procedure = function() {
                switch (counter) {
                    case 0:
                        console.log("Bild 1");
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Count1.png';
                        counter++;
                        break;
                    case 1:
                        console.log("Bild 2");
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Density1.png';
                        counter++;
                        break;
                    case 2:
                        console.log("Bild 3");
                        $scope.type = 'direction';
                        $scope.dir1 = '../styles/images/AnalyseData/Direction1/Number1.png';
                        $scope.dir2 = '../styles/images/AnalyseData/Direction1/Number2.png';
                        $scope.dir3 = '../styles/images/AnalyseData/Direction1/Number3.png';
                        $scope.dir4 = '../styles/images/AnalyseData/Direction1/Number4.png';
                        $scope.dir5 = '../styles/images/AnalyseData/Direction1/Number5.png';
                        counter++;
                        break;
                    case 3:
                        console.log("Bild 4");
                        $scope.type = 'move';
                        $scope.move1 = '../styles/images/AnalyseData/static-mobile1/Number1.png';
                        $scope.move2 = '../styles/images/AnalyseData/static-mobile1/Number2.png';
                        $scope.move3 = '../styles/images/AnalyseData/static-mobile1/Number3.png';
                        counter++;
                        break;
                    case 4:
                        console.log("Bild 5");
                        $scope.type = 'juxtapose';
                        $scope.jux1 = '../styles/images/AnalyseData/Direction1/Number1.png';
                        $scope.jux2 = '../styles/images/AnalyseData/Direction1/Number5.png';
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