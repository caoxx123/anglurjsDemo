function MyController($scope,$timeout) {
	// body...
	var updateclock=function(){
		$scope.clock=new Date();
		$timeout(function(){updateclock()},1000);
	}
	updateclock()
}