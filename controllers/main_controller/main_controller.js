'use strict';
(function(){
    angular.module('main_module')
        .controller('main_controller', function($scope, $http){

            $scope.sort_order = 'full';
            $scope.choice = null;
            $scope.checked_status = 'false';

            $scope.changeCheck = function(){
                if($scope.checked_status == 'false'){
                    $scope.checked_status = '';
                }
                else{
                    $scope.checked_status = 'false';
                }
            };

            $scope.getProfiles = function(){
                $http.get('http://duda-api-test.herokuapp.com/profiles')
                    .then(function(result){
                        $scope.profiles = result.data;
                    });
            };

            $scope.fullProfiles = [];
            $scope.getFullProfileData = function(){
                while ($scope.profiles.length > 0) {
                    var singleProfile = $scope.profiles.pop();
                    $http.get('http://duda-api-test.herokuapp.com/profile/'+singleProfile.id)
                        .then(function(result){
                            $scope.fullProfiles.push(result.data);
                        });
                }
            };

            $scope.refresh = function () {
                $scope.profiles = "";
                $scope.fullProfiles = [];
                $scope.getProfiles();
            };

            $scope.populate = function(profile){
                $scope.name_search_input = profile.full;
                $scope.bio_search_input = profile.bio;
            };

            $scope.create_card = function(full, bio){
                fullProfiles.push({"id":"","full":full,"bio":bio,"fbprof":"","isprivate":false});
            };
        });
})();
