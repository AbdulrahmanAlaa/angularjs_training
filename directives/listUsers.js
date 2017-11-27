applist.directive('listUsers', function(){
    return {
        templateUrl:'templates/directives/listUsers.html',
        //scope to just this att
        scope:{
            user:'=user'
        }

        
    }
});