(function () {

    angular.module('crowdspy', ['ngRoute']);

    function config ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .when('/game', {
                templateUrl: 'views/game.html',
                controller: 'gameCtrl',
                controllerAs: 'vm'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'aboutCtrl',
                controllerAs: 'vm'
            })
            .when('/leaderboard', {
                templateUrl: 'views/leaderboard.html',
                controller: 'leaderboardCtrl',
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
/*
    function run($rootScope, $location, authentication) {
        $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
            if ($location.path() === '/profile' && !authentication.isLoggedIn()) {
                $location.path('/');
            }
        });
    }
*/
    angular
        .module('crowdspy')
        .config(['$routeProvider', '$locationProvider', config]);
        //.run(['$rootScope', '$location', 'authentication', run]);

})();
