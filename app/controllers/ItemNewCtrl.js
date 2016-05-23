app.controller("ItemNewCtrl", function($scope) {
	$scope.newAddress = {};
	$scope.items = [
	{
		id: 0, 
		name: "Ted Brewer",
		street: "Wallbridge Ave.",
		city: "Cleveland",
		state: "Ohio",
		zip: "44189",
		email: "tedb@gmail.com"
	},
	{
		id: 1, 
		name: "Jean Abbrey",
		street: "Main St.",
		city: "Columbus",
		state: "Ohio",
		zip: "44003",
		email: "jean@gmail.com"
	},
	{
		id: 2, 
		name: "Eduardo Rodriquez",
		street: "Legend St.",
		city: "Canton",
		state: "Ohio",
		zip: "44707",
		email: "Eduardor@gmail.com"
	}
	];

	$scope.addNewAddress = function() {
		console.log("you added a new address", $scope.newAddress);
		//this is where a send to firebase will go 
		$scope.newAddress.id= $scope.items.length;
		$scope.items.push($scope.newAddress);
		$scope.newAddress = "";
		};
	});
