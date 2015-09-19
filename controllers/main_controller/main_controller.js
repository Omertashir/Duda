'use strict';
(function(){
    angular.module('main_module')
        .controller('main_controller', function($scope, $http){
            $scope.getProfiles = function(){
                $http.get('http://duda-api-test.herokuapp.com/profiles')
                    .then(function(result){
                        $scope.profiles = result.data;
                    });
            };
            $scope.getFullProfileData = function(profile_id){
                $http.get('http://duda-api-test.herokuapp.com/profile/'+profile_id)
                    .then(function(result){
                        $scope.full_profile = result.data;
                    });
            }
        });
})();