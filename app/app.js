var dci = angular.module("DcIcons", []);

//basic controllers...
dci.controller('IconsCtrl', ['$scope', '$http', function($scope, $http){
    
    $http.get('app/data.json').success(function(data){
        $scope.icons = data.icons;
        
    });
}]);
