(function() {

    angular
        .module('crowdspy')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$location'];

    function homeCtrl ($location) {

        var vm = this;

        console.log("home controller is here");

    }

})();