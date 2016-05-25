app.controller("ItemListCtrl", function($scope, $http, $location, addressStorage) {
	$scope.addresses = [];
		addressStorage.getAddressList().then(function(addressCollection){
			$scope.addresses = addressCollection;
		})

	$scope.addressDelete = function(addressId){
		addressStorage.deleteAddress(addressId).then(function(response){
			addressStorage.getAddressList().then(function(addressCollection){
				$scope.addresses = addressCollection;
			})
		})
	}
});