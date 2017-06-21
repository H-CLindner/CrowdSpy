(function () {

    angular.module('crowdspy', ['ngRoute', 'ngJuxtapose']);

    function config ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .when('/game/:id', {
                templateUrl: 'views/game.html',
                controller: 'gameCtrl',
                controllerAs: 'vm',
                resolve: {
                    myVar: function($route){
                        console.log("something");
                        console.log($route.current.params.id);
                        if($route.current.params.id == "start"){
                            return "start";
                        } else {
                            var number = parseInt($route.current.params.id);
                            var numberPlus = number + 1;
                            return numberPlus;
                        }
                    }
                }
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'aboutCtrl',
                controllerAs: 'vm'
            })
            .when('/legalInfo', {
                templateUrl: 'views/legalInfo.html',
                controller: 'legalInfoCtrl',
                controllerAs: 'vm'
            })
            .otherwise({redirectTo: '/'});

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }

    angular
        .module('crowdspy')
        .config(['$routeProvider', '$locationProvider', config]);
        //.run(['$rootScope', '$location', 'authentication', run]);

})();
