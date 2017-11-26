applist.factory('getusers', function($http,$q) {
    return{ 
        getusersdata: function(successcb) {
         $http({
                method:'GET',
                url:'http://localhost:3000/users'
            })
            .then(function(data){
                successcb(data);
                console.log(data)
        })
        }
}
});