app.controller("ItemNewCtrl", function($scope, $location, addressStorage) {
	$scope.newAddress = {
		name: "",
		street: "",
		city: "",
		state: "",
		zip: "",
		email: ""
	};

	$scope.addNewAddress = function(){
		addressStorage.postNewAddress($scope.newAddress)
		.then(function successCallback(response){     //wondering if there shouldn't be a parenthesis after function?
			$location.url("/items/list");          //using items here so I don't have to alter the app.js 
			});
  }
});