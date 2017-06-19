(function() {

    angular
        .module('crowdspy')
        .controller('gameCtrl', gameCtrl);

    gameCtrl.$inject = ['$scope', 'dataService', '$timeout'];

    function gameCtrl ($scope, dataService, $timeout) {

        var vm = this;

        vm.question = {
            first: "",
            second: "",
            difficulty: "",
            userID: ""
        };

        vm.countFirst = "";
        vm.selected = "";
        vm.movement = "";
        vm.hide = false;

        var counter = 0;

        $scope.image = '../styles/images/menschenmenge.jpg';
        $scope.single = "";
        $scope.direction = "";
        $scope.move = "";
        $scope.juxtapose = "";
        $scope.canvas = "";
        $scope.canvas2 = "";
        $scope.type = "start";
        $scope.menu = "start";
        $scope.selected = "nothing";
        $scope.movement = "nothing";
        $scope.idGenerated = dataService.generateId();
        $scope.userId = $scope.idGenerated;
        $scope.coords = "";

        $scope.procedure = function() {
                switch (counter) {
                    case 0:
                        console.log("Bild 1");
                        vm.hide = true;
                        $scope.menu = 'count';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Count1.png';
                        counter++;
                        break;
                    case 1:
                        console.log("Bild 2");
                        $scope.canvas2 = '../styles/images/AnalyseData/Density1.png';
                        $scope.menu = 'decision';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Density1.png';
                        counter++;
                        break;
                    case 2:
                        console.log("Bild 3");
                        $scope.menu = 'circle';
                        $scope.type = 'direction';
                        $scope.dir1 = '../styles/images/AnalyseData/Direction1/Number1.jpg';
                        $scope.dir2 = '../styles/images/AnalyseData/Direction1/Number2.jpg';
                        $scope.dir3 = '../styles/images/AnalyseData/Direction1/Number3.jpg';
                        $scope.dir4 = '../styles/images/AnalyseData/Direction1/Number4.jpg';
                        $scope.dir5 = '../styles/images/AnalyseData/Direction1/Number5.jpg';
                        $scope.canvas = '../styles/images/AnalyseData/Direction1/Number1.jpg';
                        counter++;
                        break;
                    case 3:
                        console.log("Bild 4"); //some reload function to reload the div
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction1/Number1.jpg';
                        $scope.canvas = '../styles/images/AnalyseData/Direction1/Number1.jpg';
                        counter++;
                        break;
                    case 4:
                        console.log("Bild 5");
                        $scope.menu = 'circle';
                        $scope.type = 'juxtapose';
                        $scope.jux1 = '../styles/images/AnalyseData/Direction1/Number1.jpg';
                        $scope.jux2 = '../styles/images/AnalyseData/Direction1/Number2.jpg';
                        $scope.canvas = '../styles/images/AnalyseData/Direction1/Number1.jpg';
                        counter++;
                        break;
                    case 5:
                        console.log("Bild 6");
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction1/Dir1.gif';
                        $scope.canvas = '../styles/images/AnalyseData/Direction1/Number1.jpg';
                        counter++;
                        break;
                    case 6:
                        console.log("Bild 7");
                        $scope.menu = 'count';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Count2.png';
                        counter++;
                        break;
                    case 7:
                        console.log("Bild 8");
                        $scope.canvas2 = '../styles/images/AnalyseData/Density2.png';
                        $scope.menu = 'decision';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Density2.png';
                        counter++;
                        break;
                    case 8:
                        console.log("Bild 9");
                        $scope.menu = 'circle';
                        $scope.type = 'direction';
                        $scope.dir1 = '../styles/images/AnalyseData/Direction3/Number1.jpg';
                        $scope.dir2 = '../styles/images/AnalyseData/Direction3/Number2.jpg';
                        $scope.dir3 = '../styles/images/AnalyseData/Direction3/Number3.jpg';
                        $scope.dir4 = '../styles/images/AnalyseData/Direction3/Number4.jpg';
                        $scope.dir5 = '../styles/images/AnalyseData/Direction3/Number5.jpg';
                        $scope.canvas = '../styles/images/AnalyseData/Direction3/Number1.jpg';
                        counter++;
                        break;
                    case 9:
                        console.log("Bild 10");
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction3/Number1.jpg';
                        $scope.canvas = '../styles/images/AnalyseData/Direction3/Number1.jpg';
                        counter++;
                        break;
                    case 10:
                        console.log("Bild 11");
                        $scope.menu = 'circle';
                        $scope.type = 'juxtapose';
                        $scope.jux1 = '../styles/images/AnalyseData/Direction3/Number1.jpg';
                        $scope.jux2 = '../styles/images/AnalyseData/Direction3/Number2.jpg';
                        $scope.canvas = '../styles/images/AnalyseData/Direction3/Number1.jpg';
                        counter++;
                        break;
                    case 11:
                        console.log("Bild 12");
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction3/Dir3.gif';
                        $scope.canvas = '../styles/images/AnalyseData/Direction3/Number1.jpg';
                        counter++;
                        break;
                    case 12:
                        console.log("Bild 13");
                        $scope.menu = 'count';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Count3.png';
                        counter++;
                        break;
                    case 13:
                        console.log("Bild 14");
                        $scope.canvas2 = '../styles/images/AnalyseData/Density3.png';
                        $scope.menu = 'decision';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Density3.png';
                        counter++;
                        break;
                    case 14:
                        console.log("Bild 15");
                        $scope.menu = 'circle';
                        $scope.type = 'direction';
                        $scope.dir1 = '../styles/images/AnalyseData/Direction2/Number1.jpg';
                        $scope.dir2 = '../styles/images/AnalyseData/Direction2/Number2.jpg';
                        $scope.dir3 = '../styles/images/AnalyseData/Direction2/Number3.jpg';
                        $scope.dir4 = '../styles/images/AnalyseData/Direction2/Number4.jpg';
                        $scope.dir5 = '../styles/images/AnalyseData/Direction2/Number5.jpg';
                        $scope.canvas = '../styles/images/AnalyseData/Direction2/Number1.jpg';
                            counter++;
                        break;
                    case 15:
                        console.log("Bild 16");
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction2/Number1.jpg';
                        $scope.canvas = '../styles/images/AnalyseData/Direction2/Number1.jpg';
                        counter++;
                        break;
                    case 16:
                        console.log("Bild 17");
                        $scope.menu = 'circle';
                        $scope.type = 'juxtapose';
                        $scope.jux1 = '../styles/images/AnalyseData/Direction2/Number1.jpg';
                        $scope.jux2 = '../styles/images/AnalyseData/Direction2/Number2.jpg';
                        $scope.canvas = '../styles/images/AnalyseData/Direction2/Number1.jpg';
                        counter++;
                        break;
                    case 17:
                        console.log("Bild 18");
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction2/Dir2.gif';
                        $scope.canvas = '../styles/images/AnalyseData/Direction2/Number1.jpg';
                        counter++;
                        break;
                    case 18:
                        console.log("Bild 19");
                        $scope.menu = 'count';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Count4.png';
                        counter++;
                        break;
                    case 19:
                        console.log("Bild 20");
                        $scope.canvas2 = '../styles/images/AnalyseData/Density4.png';
                        $scope.menu = 'decision';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Density4.png';
                        counter++;
                        break;
                    case 20:
                        console.log("Bild 21");
                        $scope.menu = 'circle';
                        $scope.type = 'direction';
                        $scope.dir1 = '../styles/images/AnalyseData/Direction4/Number1.jpg';
                        $scope.dir2 = '../styles/images/AnalyseData/Direction4/Number2.jpg';
                        $scope.dir3 = '../styles/images/AnalyseData/Direction4/Number3.jpg';
                        $scope.dir4 = '../styles/images/AnalyseData/Direction4/Number4.jpg';
                        $scope.dir5 = '../styles/images/AnalyseData/Direction4/Number5.jpg';
                        $scope.canvas = '../styles/images/AnalyseData/Direction4/Number1.jpg';
                        counter++;
                        break;
                    case 21:
                        console.log("Bild 22");
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction4/Number1.jpg';
                        $scope.canvas = '../styles/images/AnalyseData/Direction4/Number1.jpg';
                        counter++;
                        break;
                    case 22:
                        console.log("Bild 23");
                        $scope.menu = 'circle';
                        $scope.type = 'juxtapose';
                        $scope.jux1 = '../styles/images/AnalyseData/Direction4/Number1.jpg';
                        $scope.jux2 = '../styles/images/AnalyseData/Direction4/Number2.jpg';
                        $scope.canvas = '../styles/images/AnalyseData/Direction4/Number1.jpg';
                        counter++;
                        break;
                    case 23:
                        console.log("Bild 24");
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction4/Dir4.gif';
                        $scope.canvas = '../styles/images/AnalyseData/Direction4/Number1.jpg';
                        counter++;
                        break;
                    case 24:
                        console.log("Bild 25");
                        $scope.menu = 'count';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Count5.png';
                        counter++;
                        break;
                    case 25:
                        console.log("Bild 26");
                        $scope.canvas2 = '../styles/images/AnalyseData/Density5.png';
                        $scope.menu = 'decision';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Density5.png';
                        counter++;
                        break;
                    case 26:
                        console.log("Bild 27");
                        $scope.menu = 'movement';
                        $scope.type = 'move';
                        $scope.move1 = '../styles/images/AnalyseData/static-mobile2/Number1.jpg';
                        $scope.move2 = '../styles/images/AnalyseData/static-mobile2/Number2.jpg';
                        $scope.move3 = '../styles/images/AnalyseData/static-mobile2/Number3.jpg';
                        counter++;
                        break;
                    case 27:
                        console.log("Bild 28");
                        $scope.menu = 'movement';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/static-mobile2/Number1.jpg';
                        counter++;
                        break;
                    case 28:
                        console.log("Bild 29");
                        $scope.menu = 'movement';
                        $scope.type = 'juxtapose';
                        $scope.jux1 = '../styles/images/AnalyseData/static-mobile2/Number1.jpg';
                        $scope.jux2 = '../styles/images/AnalyseData/static-mobile2/Number3.jpg';
                        counter++;
                        break;
                    case 29:
                        console.log("Bild 30");
                        $scope.menu = 'movement';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/static-mobile2/s-m2.gif';
                        counter++;
                        break;
                    case 30:
                        console.log("Ende");
                        $scope.menu = 'end';
                        $scope.type = 'end';
                        counter++;
                        break;
                }
        };

        $scope.restart = function() {
            counter = 0;
            $scope.type = "start";
            $scope.menu = "start";
            location.reload();
        };

        $scope.countSave = function() {

            if(vm.countFirst == "" || vm.question.difficulty == ""){
                alert("please fill in all the blanks.");
            } else {

                vm.question.first = vm.countFirst;
                vm.question.second = "no value";
                vm.question.userID = $scope.userId;
                var number = counter;

                dataService
                    .save(vm.question, number)
                    .then(function () {
                        console.log("Frage gespeichert");
                        $scope.procedure();
                    })
                    .catch(function (e) {
                        console.log(e);
                    });
            }
        };

        $scope.decisionSave = function(){

            if(vm.selected == "" || vm.question.difficulty == ""){
                alert("please fill in all the blanks.");
            } else {

                var coords = dataService.getSquareCoords();

                vm.question.first = vm.selected;
                vm.question.second = coords;
                vm.question.userID = $scope.userId;
                var number = counter;

                dataService
                    .save(vm.question, number)
                    .then(function (){
                        console.log("Frage gespeichert");
                        $scope.procedure();
                    })
                    .catch(function (e) {
                        console.log(e);
                    });
            }
        };

        $scope.circleSave = function(){

            var coords = dataService.getArrowCoords();

            var chart = dataService.getChartValue();

            if(coords == "" || vm.question.difficulty == ""){
                alert("please fill in all the blanks and draw at least one arrow.");
            } else {
                var coordsJoined = coords.join();
                console.log(coordsJoined);

                vm.question.first = chart;
                vm.question.second = coordsJoined;
                vm.question.userID = $scope.userId;
                var number = counter;

                dataService
                    .save(vm.question, number)
                    .then(function (){
                        console.log("Frage gespeichert");
                        $scope.procedure();
                    })
                    .catch(function (e) {
                        console.log(e);
                    });
            }
        };

        $scope.movementSave = function(){

            if(vm.movement == "" || vm.question.difficulty == ""){
                alert("please fill in all the blanks.");
            } else {

                vm.question.first = vm.movement;
                vm.question.second = "no value";
                vm.question.userID = $scope.userId;
                var number = counter;

                dataService
                    .save(vm.question, number)
                    .then(function (){
                        console.log("Frage gespeichert");
                        $scope.procedure();
                    })
                    .catch(function (e) {
                        console.log(e);
                    });
            }
        };

        $scope.setDirectiveFn = function(clearCanvas) {
            $scope.clearCanvas = clearCanvas;
        };

        $scope.setDirectiveFn2 = function(clearArrow) {
            $scope.clearArrow = clearArrow;
        };

        $scope.data = [{
            "direction": "1",
            "stub": 10,
            "color": "#cc0000"
        }, {
            "direction": "2",
            "stub": 10,
            "color": "#76EE00"
        }, {
            "direction": "3",
            "stub": 10,
            "color": "#76EE00"
        },{
            "direction": "4",
            "stub": 10,
            "color": "#76EE00"
        }, {
            "direction": "5",
            "stub": 10,
            "color": "#76EE00"
        }, {
            "direction": "6",
            "stub": 10,
            "color": "#76EE00"
        }, {
            "direction": "7",
            "stub": 10,
            "color": "#76EE00"
        }, {
            "direction": "8",
            "stub": 10,
            "color": "#76EE00"
        }];
    }

})();