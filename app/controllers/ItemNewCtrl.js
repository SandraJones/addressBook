app.controller("ItemNewCtrl", function($scope, $location, addressStorage) {
	$scope.title = "New Address";
	$scope.submitButtonText = "addNewAddress";
	
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
		.then(function successCallback(response){  
			$location.url("/addresses/list");    
			// console.log("response of addNewAddress in ItemNewCtrl.js", response);      //using items here so I don't have to alter the app.js 
			});
  };
});