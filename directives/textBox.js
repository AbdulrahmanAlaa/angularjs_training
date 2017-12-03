applist.directive('textBox', function(){
    return {
        templateUrl:'templates/directives/TextBox.html',
        controller: function($scope){
            $scope.inputType = 'password';
            $scope.glyph='glyphicon glyphicon-eye-close';
            $scope.color='green'
            
            // Hide & show password function
            $scope.div = function(){
                console.log('div!!')
                
            }
                $scope.hideShowPassword = function(){
                console.log('clicked!!')
              if ($scope.inputType == 'password'){
                $scope.inputType = 'text';
                $scope.glyph ="glyphicon glyphicon-eye-open";
                $scope.color="red";
              }
              else{
                $scope.inputType = 'password';
                $scope.glyph ="glyphicon glyphicon-eye-close";
                $scope.color="green";
                
              }
                
            };
            


        },
     

        
    }
});