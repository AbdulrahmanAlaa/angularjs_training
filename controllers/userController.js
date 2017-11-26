applist.controller('userController', 
function userController ($scope,getusers) {
    getusers.getusersdata(function(user){
        $scope.users = user;
        
    });
}

)