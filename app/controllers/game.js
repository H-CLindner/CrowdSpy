(function() {

    angular
        .module('crowdspy')
        .controller('gameCtrl', gameCtrl);

    gameCtrl.$inject = ['$location'];

    function gameCtrl ($location) {

        var vm = this;

        console.log("game controller is here");

    }

})();