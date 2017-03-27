(function () {

    angular.module('crowdspy', ['ngRoute']);

    function config ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeCtrl',
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
