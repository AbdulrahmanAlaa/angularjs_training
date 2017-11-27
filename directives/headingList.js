applist.directive('headingList', function(){
    return {
        replace:true,
        template: '<div ng-class="sample-show-hide"><h4 class="panel panel-danger sample-show-hide" ng-click="ToggleVisible()">Toggle Me</h4><div ng-show="visible" ng-transclude></div></div>',
        controller: function($scope){
            $scope.visible= true;
            $scope.ToggleVisible = function(){
                $scope.visible = !$scope.visible;
            }


        },
        transclude:true
    }
})