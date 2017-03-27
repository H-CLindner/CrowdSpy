(function() {

    angular
        .module('crowdspy')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$location', 'authentication'];

    function homeCtrl ($location, authentication) {

        var vm = this;

    }

})();