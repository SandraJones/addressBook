app.controller("ItemNewCtrl", function($scope, $location, addressStorage) {
	$scope.newAddress = {
		name: "",
		street: "",
		city: "",
		state: "",
		zip: "",
		email: ""
	};
//I need to print it to DOM and add it to firebase
	$scope.addNewAddress = function(){
		addressStorage.postNewAddress($scope.newAddress)
		.then(function successCallback(response){     //wondering if there shouldn't be a parenthesis after function? no, we are naming the function there
			$location.url("/addresses/list");          //using items here so I don't have to alter the app.js 
			});
  };
});