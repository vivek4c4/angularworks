(function () {
  angular.module("myFirstApp",[])
  .controller("myFirstController",function($scope,$filter) {
    $scope.name="vivek";
    $scope.total=0;
    $scope.upper=function () {
      var upCase=$filter('uppercase')
      $scope.name=upCase($scope.name);
    };
    $scope.calculateName=function(){

      total=calculateNumericString($scope.name);
      $scope.total=total;
    }

$scope.statesofbeing="hungry";
$scope.feedVivek=function(){
  $scope.statesofbeing="food";
};

    function calculateNumericString(string) {
      var calculation=0;
      for (var i = 0; i < string.length; i++) {
        calculation+=string.charCodeAt(i);
      }
      return calculation;
    }

  })
})();
