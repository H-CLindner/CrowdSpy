(function() {

    angular
        .module('crowdspy')
        .controller('aboutCtrl', aboutCtrl);

    aboutCtrl.$inject = ['$location'];

    function aboutCtrl ($location) {

        var vm = this;

        console.log("about controller is here");

    }

})();