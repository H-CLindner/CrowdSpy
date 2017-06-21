(function() {

    angular
        .module('crowdspy')
        .controller('gameCtrl', gameCtrl);

    gameCtrl.$inject = ['$scope', 'dataService', '$location', 'myVar'];

    function gameCtrl ($scope, dataService, $location, myVar) {

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
        vm.opinion = "";
        vm.hide = false;
        vm.show = true;
        vm.info = "";
        $scope.myVar = myVar;

        var counter = parseInt($scope.myVar);
        console.log(counter);

        $scope.image = '../styles/images/menschenmenge.jpg';
        $scope.single = "";
        $scope.direction = "";
        $scope.move = "";
        $scope.juxtapose = "";
        $scope.canvas = "";
        $scope.canvas2 = "";
        $scope.selected = "nothing";
        $scope.movement = "nothing";
        $scope.userId = "";
        $scope.coords = "";

        if($scope.myVar == "start"){
            $scope.type = "start";
            $scope.menu = "start";
        }

        $scope.procedure = function(){
            console.log("something");
            if(counter == undefined){
                console.log("alles in ordnung");
            }else {
                $location.path('/game/' + counter);
                window.scrollTo(0,0);
            }
        };

                switch (counter) {
                    case 0:
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "1 of 30: Single Image, Counting";
                        $scope.menu = 'count';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Count1.png';
                        $scope.userId = dataService.generateId();
                        dataService.setId($scope.userId);
                        break;
                    case 1:
                        $scope.canvas2 = '../styles/images/AnalyseData/Density1.png';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "2 of 30: Single Image, Density";
                        $scope.menu = 'decision';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Density1.png';
                        $scope.userId = dataService.getId();
                        break;
                    case 2:
                        $scope.canvas = '../styles/images/AnalyseData/Direction1/Number1.jpg';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "3 of 30: Five Images Carousel, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'direction';
                        $scope.dir1 = '../styles/images/AnalyseData/Direction1/Number1.jpg';
                        $scope.dir2 = '../styles/images/AnalyseData/Direction1/Number2.jpg';
                        $scope.dir3 = '../styles/images/AnalyseData/Direction1/Number3.jpg';
                        $scope.dir4 = '../styles/images/AnalyseData/Direction1/Number4.jpg';
                        $scope.dir5 = '../styles/images/AnalyseData/Direction1/Number5.jpg';
                        $scope.userId = dataService.getId();
                        break;
                    case 3:
                        $scope.canvas = '../styles/images/AnalyseData/Direction1/Number1.jpg';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "4 of 30: Single Image, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction1/Number1.jpg';
                        $scope.userId = dataService.getId();
                        break;
                    case 4:
                        $scope.canvas = '../styles/images/AnalyseData/Direction1/Number1.jpg';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "5 of 30: Juxtapose Slider, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'juxtapose';
                        $scope.jux1 = '../styles/images/AnalyseData/Direction1/Number1.jpg';
                        $scope.jux2 = '../styles/images/AnalyseData/Direction1/Number2.jpg';
                        $scope.userId = dataService.getId();
                        break;
                    case 5:
                        $scope.canvas = '../styles/images/AnalyseData/Direction1/Number1.jpg';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "6 of 30: Gif, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction1/Dir1.gif';
                        $scope.userId = dataService.getId();
                        break;
                    case 6:
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "7 of 30: Single Image, Counting";
                        $scope.menu = 'count';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Count2.png';
                        $scope.userId = dataService.getId();
                        break;
                    case 7:
                        $scope.canvas2 = '../styles/images/AnalyseData/Density2.png';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "8 of 30: Single Image, Density";
                        $scope.menu = 'decision';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Density2.png';
                        $scope.userId = dataService.getId();
                        break;
                    case 8:
                        $scope.canvas = '../styles/images/AnalyseData/Direction3/Number1.jpg';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "9 of 30: Five Images Carousel, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'direction';
                        $scope.dir1 = '../styles/images/AnalyseData/Direction3/Number1.jpg';
                        $scope.dir2 = '../styles/images/AnalyseData/Direction3/Number2.jpg';
                        $scope.dir3 = '../styles/images/AnalyseData/Direction3/Number3.jpg';
                        $scope.dir4 = '../styles/images/AnalyseData/Direction3/Number4.jpg';
                        $scope.dir5 = '../styles/images/AnalyseData/Direction3/Number5.jpg';
                        $scope.userId = dataService.getId();
                        break;
                    case 9:
                        $scope.canvas = '../styles/images/AnalyseData/Direction3/Number1.jpg';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "10 of 30: Single Image, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction3/Number1.jpg';
                        $scope.userId = dataService.getId();
                        break;
                    case 10:
                        $scope.canvas = '../styles/images/AnalyseData/Direction3/Number1.jpg';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "11 of 30: Juxtapose Slider, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'juxtapose';
                        $scope.jux1 = '../styles/images/AnalyseData/Direction3/Number1.jpg';
                        $scope.jux2 = '../styles/images/AnalyseData/Direction3/Number2.jpg';
                        $scope.userId = dataService.getId();
                        break;
                    case 11:
                        $scope.canvas = '../styles/images/AnalyseData/Direction3/Number1.jpg';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "12 of 30: Gif, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction3/Dir3.gif';
                        $scope.userId = dataService.getId();
                        break;
                    case 12:
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "13 of 30: Single Image, Counting";
                        $scope.menu = 'count';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Count3.png';
                        $scope.userId = dataService.getId();
                        break;
                    case 13:
                        $scope.canvas2 = '../styles/images/AnalyseData/Density3.png';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "14 of 30: Single Image, Density";
                        $scope.menu = 'decision';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Density3.png';
                        $scope.userId = dataService.getId();
                        break;
                    case 14:
                        $scope.canvas = '../styles/images/AnalyseData/Direction2/Number1.jpg';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "15 of 30: Five Images Carousel, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'direction';
                        $scope.dir1 = '../styles/images/AnalyseData/Direction2/Number1.jpg';
                        $scope.dir2 = '../styles/images/AnalyseData/Direction2/Number2.jpg';
                        $scope.dir3 = '../styles/images/AnalyseData/Direction2/Number3.jpg';
                        $scope.dir4 = '../styles/images/AnalyseData/Direction2/Number4.jpg';
                        $scope.dir5 = '../styles/images/AnalyseData/Direction2/Number5.jpg';
                        $scope.userId = dataService.getId();
                        break;
                    case 15:
                        $scope.canvas = '../styles/images/AnalyseData/Direction2/Number1.jpg';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "16 of 30: Single Image, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction2/Number1.jpg';
                        $scope.userId = dataService.getId();
                        break;
                    case 16:
                        $scope.canvas = '../styles/images/AnalyseData/Direction2/Number1.jpg';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "17 of 30: Juxtapose Slider, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'juxtapose';
                        $scope.jux1 = '../styles/images/AnalyseData/Direction2/Number1.jpg';
                        $scope.jux2 = '../styles/images/AnalyseData/Direction2/Number2.jpg';
                        $scope.userId = dataService.getId();
                        break;
                    case 17:
                        $scope.canvas = '../styles/images/AnalyseData/Direction2/Number1.jpg';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "18 of 30: Gif, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction2/Dir2.gif';
                        $scope.userId = dataService.getId();
                        break;
                    case 18:
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "19 of 30: Single Image, Counting";
                        $scope.menu = 'count';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Count4.png';
                        $scope.userId = dataService.getId();
                        break;
                    case 19:
                        $scope.canvas2 = '../styles/images/AnalyseData/Density4.png';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "20 of 30: Single Image, Density";
                        $scope.menu = 'decision';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Density4.png';
                        $scope.userId = dataService.getId();
                        break;
                    case 20:
                        $scope.canvas = '../styles/images/AnalyseData/Direction4/Number1.jpg';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "21 of 30: Five Images Carousel, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'direction';
                        $scope.dir1 = '../styles/images/AnalyseData/Direction4/Number1.jpg';
                        $scope.dir2 = '../styles/images/AnalyseData/Direction4/Number2.jpg';
                        $scope.dir3 = '../styles/images/AnalyseData/Direction4/Number3.jpg';
                        $scope.dir4 = '../styles/images/AnalyseData/Direction4/Number4.jpg';
                        $scope.dir5 = '../styles/images/AnalyseData/Direction4/Number5.jpg';
                        $scope.userId = dataService.getId();
                        break;
                    case 21:
                        $scope.canvas = '../styles/images/AnalyseData/Direction4/Number1.jpg';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "22 of 30: Single Image, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction4/Number1.jpg';
                        $scope.userId = dataService.getId();
                        break;
                    case 22:
                        $scope.canvas = '../styles/images/AnalyseData/Direction4/Number1.jpg';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "23 of 30: Juxtapose Slider, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'juxtapose';
                        $scope.jux1 = '../styles/images/AnalyseData/Direction4/Number1.jpg';
                        $scope.jux2 = '../styles/images/AnalyseData/Direction4/Number2.jpg';
                        $scope.userId = dataService.getId();
                        break;
                    case 23:
                        $scope.canvas = '../styles/images/AnalyseData/Direction4/Number1.jpg';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "24 of 30: Gif, Direction";
                        $scope.menu = 'circle';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Direction4/Dir4.gif';
                        $scope.userId = dataService.getId();
                        break;
                    case 24:
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "25 of 30: Single Image, Counting";
                        $scope.menu = 'count';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Count5.png';
                        $scope.userId = dataService.getId();
                        break;
                    case 25:
                        $scope.canvas2 = '../styles/images/AnalyseData/Density5.png';
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "26 of 30: Single Image, Density";
                        $scope.menu = 'decision';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/Density5.png';
                        $scope.userId = dataService.getId();
                        break;
                    case 26:
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "27 of 30: Three Images Carousel, Movement";
                        $scope.menu = 'movement';
                        $scope.type = 'move';
                        $scope.move1 = '../styles/images/AnalyseData/static-mobile2/Number1.jpg';
                        $scope.move2 = '../styles/images/AnalyseData/static-mobile2/Number2.jpg';
                        $scope.move3 = '../styles/images/AnalyseData/static-mobile2/Number3.jpg';
                        $scope.userId = dataService.getId();
                        break;
                    case 27:
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "28 of 30: Single Image, Movement";
                        $scope.menu = 'movement';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/static-mobile2/Number1.jpg';
                        $scope.userId = dataService.getId();
                        break;
                    case 28:
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "29 of 30: Juxtapose Slider, Movement";
                        $scope.menu = 'movement';
                        $scope.type = 'juxtapose';
                        $scope.jux1 = '../styles/images/AnalyseData/static-mobile2/Number1.jpg';
                        $scope.jux2 = '../styles/images/AnalyseData/static-mobile2/Number3.jpg';
                        $scope.userId = dataService.getId();
                        break;
                    case 29:
                        vm.show = false;
                        vm.hide = true;
                        vm.info = "30 of 30: Gif, Movement";
                        $scope.menu = 'movement';
                        $scope.type = 'single';
                        $scope.image = '../styles/images/AnalyseData/static-mobile2/s-m2.gif';
                        $scope.userId = dataService.getId();
                        break;
                    case 30:
                        vm.hide = false;
                        vm.show = true;
                        $scope.menu = 'end';
                        $scope.type = 'end';
                        counter++;
                        break;
                }

        $scope.restart = function() {
            $location.path('/game/start');
        };

        $scope.countSave = function() {

            if(vm.countFirst == "" || vm.question.difficulty == ""){
                alert("please fill in all the blanks.");
            } else {

                vm.question.first = vm.countFirst;
                vm.question.second = "no value";
                vm.question.userID = $scope.userId;
                var number = counter + 1;

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
                var number = counter + 1;

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
            dataService.editArrowCoords("all");

            var chart = dataService.getChartValue();

            if(coords == "" || vm.question.difficulty == ""){
                alert("please fill in all the blanks and draw at least one arrow.");
            } else {
                var coordsJoined = coords.join();

                vm.question.first = chart;
                vm.question.second = coordsJoined;
                vm.question.userID = $scope.userId;
                var number = counter + 1;

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

            if(vm.movement == "" || vm.opinion || vm.question.difficulty == ""){
                alert("please fill in all the blanks.");
            } else {

                vm.question.first = vm.movement;
                vm.question.second = vm.opinion;
                vm.question.userID = $scope.userId;
                var number = counter + 1;

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