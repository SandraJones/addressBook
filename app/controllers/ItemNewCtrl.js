app.controller("ItemNewCtrl", function($scope, $location, addressStorage) {
	$scope.newAddress = {
		name: "",
		street: "",
		city: "",
		state: "",
		zip: "",
		email: ""
	};
//I need to print it to DOM 
	$scope.addNewAddress = function(){
		addressStorage.postNewAddress($scope.newAddress)
		.then(function successCallback(response){     //wondering if there shouldn't be a parenthesis after function?
			$location.url("/addresses/list");          //using items here so I don't have to alter the app.js 
			});
  };
});