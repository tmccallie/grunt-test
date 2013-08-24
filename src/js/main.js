
function TodoCtrl($scope) {

	$scope.bar = 'xxxx';

	$scope.doSomething = function () {
		$scope.bar = $scope.foo;
	}

}
