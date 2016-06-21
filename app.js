var app = angular.module('gemCart',[]);

app.controller('mainCtrl', function($scope){
	$scope.name = "";
	$scope.price = 0.0;
	$scope.total = 0;
	$scope.items = [];
	
	$scope.addItem = function(){
		var name_in = $scope.name;
		if(!name_in){
			name_in = "Annoying Dog";
		}
		$scope.items.push({
			name: name_in,
			price: $scope.price
		});
		$scope.total += $scope.price;
		$scope.name = "";
		$scope.price = 0.0;
	};

	$scope.removeItem = function(array, index){
		var price = $scope.items[index].price;
		array.splice(index, 1);
		$scope.total -= price;
	};

	$scope.annoying = function(){
		$scope.total = 0;
		$scope.items = [];
		for(var i = 0; i < 999; ++i){
			$scope.items.push({
				name: "Dog Salad",
				price: 99999
			});
			$scope.total += 99999;
		}
	};
	
});