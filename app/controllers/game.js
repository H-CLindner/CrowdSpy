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
        vm.show = true;
        vm.info = "";

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
                        vm.show = false;
                        vm.info = "1: Single Image, Counting";
                        vm.hide = true;
                        $scope.menu = 'count';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Count1.png';
                        counter++;
                        break;
                    case 1:
                        vm.info = "2: Single Image, Density";
                        $scope.canvas2 = '../styles/images/AnalyseData/Density1.png';
                        $scope.menu = 'decision';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Density1.png';
                        counter++;
                        break;
                    case 2:
                        vm.info = "3: Five Images Carousel, Direction";
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
                        //$scope.restart(counter);
                        vm.info = "4: Single Image, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction1/Number1.jpg';
                        $scope.canvas = '../styles/images/AnalyseData/Direction1/Number1.jpg';
                        counter++;
                        break;
                    case 4:
                        vm.info = "5: Juxtapose Slider, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'juxtapose';
                        $scope.jux1 = '../styles/images/AnalyseData/Direction1/Number1.jpg';
                        $scope.jux2 = '../styles/images/AnalyseData/Direction1/Number2.jpg';
                        $scope.canvas = '../styles/images/AnalyseData/Direction1/Number1.jpg';
                        counter++;
                        break;
                    case 5:
                        vm.info = "6: Gif, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction1/Dir1.gif';
                        $scope.canvas = '../styles/images/AnalyseData/Direction1/Number1.jpg';
                        counter++;
                        break;
                    case 6:
                        vm.info = "7: Single Image, Counting";
                        $scope.menu = 'count';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Count2.png';
                        counter++;
                        break;
                    case 7:
                        vm.info = "8: Single Image, Density";
                        $scope.canvas2 = '../styles/images/AnalyseData/Density2.png';
                        $scope.menu = 'decision';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Density2.png';
                        counter++;
                        break;
                    case 8:
                        vm.info = "9: Five Images Carousel, Direction";
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
                        vm.info = "10: Single Image, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction3/Number1.jpg';
                        $scope.canvas = '../styles/images/AnalyseData/Direction3/Number1.jpg';
                        counter++;
                        break;
                    case 10:
                        vm.info = "11: Juxtapose Slider, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'juxtapose';
                        $scope.jux1 = '../styles/images/AnalyseData/Direction3/Number1.jpg';
                        $scope.jux2 = '../styles/images/AnalyseData/Direction3/Number2.jpg';
                        $scope.canvas = '../styles/images/AnalyseData/Direction3/Number1.jpg';
                        counter++;
                        break;
                    case 11:
                        vm.info = "12: Gif, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction3/Dir3.gif';
                        $scope.canvas = '../styles/images/AnalyseData/Direction3/Number1.jpg';
                        counter++;
                        break;
                    case 12:
                        vm.info = "13: Single Image, Counting";
                        $scope.menu = 'count';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Count3.png';
                        counter++;
                        break;
                    case 13:
                        vm.info = "14: Single Image, Density";
                        $scope.canvas2 = '../styles/images/AnalyseData/Density3.png';
                        $scope.menu = 'decision';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Density3.png';
                        counter++;
                        break;
                    case 14:
                        vm.info = "15: Five Images Carousel, Direction";
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
                        vm.info = "16: Single Image, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction2/Number1.jpg';
                        $scope.canvas = '../styles/images/AnalyseData/Direction2/Number1.jpg';
                        counter++;
                        break;
                    case 16:
                        vm.info = "17: Juxtapose Slider, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'juxtapose';
                        $scope.jux1 = '../styles/images/AnalyseData/Direction2/Number1.jpg';
                        $scope.jux2 = '../styles/images/AnalyseData/Direction2/Number2.jpg';
                        $scope.canvas = '../styles/images/AnalyseData/Direction2/Number1.jpg';
                        counter++;
                        break;
                    case 17:
                        vm.info = "18: Gif, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction2/Dir2.gif';
                        $scope.canvas = '../styles/images/AnalyseData/Direction2/Number1.jpg';
                        counter++;
                        break;
                    case 18:
                        vm.info = "19: Single Image, Counting";
                        $scope.menu = 'count';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Count4.png';
                        counter++;
                        break;
                    case 19:
                        vm.info = "20: Single Image, Density";
                        $scope.canvas2 = '../styles/images/AnalyseData/Density4.png';
                        $scope.menu = 'decision';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Density4.png';
                        counter++;
                        break;
                    case 20:
                        vm.info = "21: Five Images Carousel, Direction";
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
                        vm.info = "22: Single Image, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction4/Number1.jpg';
                        $scope.canvas = '../styles/images/AnalyseData/Direction4/Number1.jpg';
                        counter++;
                        break;
                    case 22:
                        vm.info = "23: Juxtapose Slider, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'juxtapose';
                        $scope.jux1 = '../styles/images/AnalyseData/Direction4/Number1.jpg';
                        $scope.jux2 = '../styles/images/AnalyseData/Direction4/Number2.jpg';
                        $scope.canvas = '../styles/images/AnalyseData/Direction4/Number1.jpg';
                        counter++;
                        break;
                    case 23:
                        vm.info = "24: Gif, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction4/Dir4.gif';
                        $scope.canvas = '../styles/images/AnalyseData/Direction4/Number1.jpg';
                        counter++;
                        break;
                    case 24:
                        vm.info = "25: Single Image, Counting";
                        $scope.menu = 'count';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Count5.png';
                        counter++;
                        break;
                    case 25:
                        vm.info = "26: Single Image, Density";
                        $scope.canvas2 = '../styles/images/AnalyseData/Density5.png';
                        $scope.menu = 'decision';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Density5.png';
                        counter++;
                        break;
                    case 26:
                        vm.info = "27: Three Images Carousel, Movement";
                        $scope.menu = 'movement';
                        $scope.type = 'move';
                        $scope.move1 = '../styles/images/AnalyseData/static-mobile2/Number1.jpg';
                        $scope.move2 = '../styles/images/AnalyseData/static-mobile2/Number2.jpg';
                        $scope.move3 = '../styles/images/AnalyseData/static-mobile2/Number3.jpg';
                        counter++;
                        break;
                    case 27:
                        vm.info = "28: Single Image, Movement";
                        $scope.menu = 'movement';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/static-mobile2/Number1.jpg';
                        counter++;
                        break;
                    case 28:
                        vm.info = "29: Juxtapose Slider, Movement";
                        $scope.menu = 'movement';
                        $scope.type = 'juxtapose';
                        $scope.jux1 = '../styles/images/AnalyseData/static-mobile2/Number1.jpg';
                        $scope.jux2 = '../styles/images/AnalyseData/static-mobile2/Number3.jpg';
                        counter++;
                        break;
                    case 29:
                        vm.info = "30: Gif, Movement";
                        $scope.menu = 'movement';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/static-mobile2/s-m2.gif';
                        counter++;
                        break;
                    case 30:
                        vm.hide = false;
                        vm.show = true;
                        $scope.menu = 'end';
                        $scope.type = 'end';
                        counter++;
                        break;
                }
        };

        $scope.restart = function(x) {
            counter = x;
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