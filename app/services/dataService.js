(function () {

    angular
        .module('crowdspy')
        .service('dataService', dataService);

    dataService.$inject = ['$http'];
    function dataService ($http) {

        var save = function(question) {
            return $http.post('/api/save', question);
        };

        return{
            save: save
        };
    }

})();