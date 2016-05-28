app.controller("ItemViewCtrl", function($scope, $routeParams, addressStorage) {
	$scope.addresses= [];
	$scope.selectedAddress = {};

	//this calls the list from firebase and puts an individual address onto the DOM per the url id
	addressStorage.getAddressList().then(function(addressCollection){
		$scope.addresses = addressCollection;
		$scope.selectedAddress = $scope.addresses.filter(function(addressAny){
			return addressAny.id === $routeParams.addressId;
		})[0];
	});
});