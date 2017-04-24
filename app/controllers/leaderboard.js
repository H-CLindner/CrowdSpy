(function() {

    angular
        .module('crowdspy')
        .controller('leaderboardCtrl', leaderboardCtrl);

    leaderboardCtrl.$inject = ['$location'];

    function leaderboardCtrl ($location) {

        var vm = this;

        console.log("leaderboard controller is here");

    }

})();