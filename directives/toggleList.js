applist.directive('toggleList', function(){
    return {
        replace:true,
        template: '<div><h4 class="panel panel-danger" ng-click="ToggleVisible()">Toggle Me</h4><div ng-show="visible" ng-transclude></div></div>',
        controller: function($scope){
            $scope.visible= true;
            $scope.ToggleVisible = function(){
                $scope.visible = !$scope.visible;
            }


        },
        transclude:true
    }
})