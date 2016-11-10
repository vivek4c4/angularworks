(function () {
  angular.module("myFirstApp",[])
  .controller("myFirstController",function($scope) {
    $scope.name="vivek";
    $scope.total=0;
    $scope.calculateName=function(){

      total=calculateNumericString($scope.name);
      $scope.total=total;
    }

    function calculateNumericString(string) {
      var calculation=0;
      for (var i = 0; i < string.length; i++) {
        calculation+=string.charCodeAt(i);
      }
      return calculation;
    }

  })
})();
