app.controller("ItemEditCtrl", function($scope, $location, $routeParams, addressStorage) {
	$scope.title = "Edit Item";
	$scope.submitButtonText = "Update";
	$scope.newAddress = {};

	addressStorage.getOneAddress($routeParams.addressId)
	 	 .then(function successCallback(response){
		 $scope.newAddress = response;
	 	 console.log("response in ItemEditCtrl.js", response);
	});

	 $scope.addNewAddress = function() {
	 	addressStorage.updateAddress($routeParams.addressId, $scope.newAddress)
	 		.then(function successCallback(response){
	 			$location.url("/addresses/list");
	 		});
	 		console.log("ItemEditCtrl.js this is after scope.addNewAddress","/addresses/list")
	 	};
});