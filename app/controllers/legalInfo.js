(function() {

    angular
        .module('crowdspy')
        .controller('legalInfoCtrl', legalInfoCtrl);

    legalInfoCtrl.$inject = ['$location'];

    function legalInfoCtrl ($location) {

        var vm = this;

        console.log("legal Information controller is here");

    }

})();
