app.controller("ItemEditCtrl", function($scope, $location, $routeParams, addressStorage) {
	$scope.title = "Edit Item";
	$scope.submitButtonText = "Update";
	$scope.newAddress = {};

	addressStorage.getOneAddress($routeParams.addressId)
	console.log("addressId", addressId )
	 	 .then(function successCallback(response){
	 	 	// console.log("response", response);
		 $scope.newAddress = response;
	});

	 $scope.addNewAddress = function() {
	 	addressStorage.updateAddress($routeParams.addressId, $scope.newAddress)
	 		.then(function successCallback(response){
	 			console.log("response", response);
	 			$location.url("/addresses/list");
	 			console.log("/addresses/list")
	 		});
	 };
});