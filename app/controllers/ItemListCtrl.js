app.controller("ItemListCtrl", function($scope, $http, $location, addressStorage) {
	$scope.addresses = [];
		addressStorage.getAddressList().then(function(addressCollection){
			$scope.addresses = addressCollection;
			console.log("addressCollection", addressCollection );
		});

	$scope.addressDelete = function(addressId){
		console.log("addressId", addressId);
		addressStorage.deleteAddress(addressId).then(function(response){
			addressStorage.getAddressList().then(function(addressCollection){
				$scope.addresses = addressCollection;
				// console.log("addressCollection", addressCollection);
			});
			return $scope.addresses;//added this line just now Friday night
		});
	};
});
//NOTHING IS LOGGING :( so I commented it out