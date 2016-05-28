"use strict";
app.factory("addressStorage", function($q, $http, firebaseURL){

	var getAddressList = function(){
	var addresses = [];
		return $q(function(resolve, reject){
		$http.get(firebaseURL + "addresses.json")	//logged the url and it returned an object
			.success(function(addressObject) {
				var addressCollection = addressObject;
				Object.keys(addressCollection).forEach(function(key){
					addressCollection[key].id=key;
					addresses.push(addressCollection[key]);
				});
				resolve(addresses);
				})
			.error(function(error){
				reject(error);
			});
			});
	};

	var deleteAddress = function(addressId){
		return $q(function(resolve, reject){
			$http
				.delete(firebaseURL +"addresses/" + addressId +".json")
				.success(function(objectFromFirebase){
					resolve(objectFromFirebase);
				});
		});
	};
	
	var postNewAddress = function(newAddress){
		return $q(function(resolve, reject){
			$http.post(
				firebaseURL + "addresses.json",
				JSON.stringify({
					name: newAddress.name,
					street: newAddress.street,
					city: newAddress.city,
					state: newAddress.state,
					zip: newAddress.zip,
					email: newAddress.email
				})
			)
			.success(
				function(objectFromFirebase){
					resolve(objectFromFirebase);
				}
			);
		});
	};

	var getOneAddress = function(addressId){
			return $q(function(resolve, reject){
			$http.get(firebaseURL + "addresses/" + addressId + ".json")	
				.success(function(addressObject){
					resolve(addressObject);
				})
				.error(function(error){
					reject(error);
				});
			});
	};

	var updateAddress = function(addressId, newAddress){
		return $q(function(resolve, reject){
			$http.put(
				firebaseURL + "addresses/" + addressId + ".json",
				  JSON.stringify({
				  	name: newAddress.name,
						street: newAddress.street,
						city: newAddress.city,
						state: newAddress.state,
						zip: newAddress.zip,
						email: newAddress.email
				  })
				).success(
					function(objectFromFirebase){
						resolve(objectFromFirebase);
					}
				);
		});
	};

  return{getAddressList:getAddressList, updateAddress:updateAddress, getOneAddress:getOneAddress, deleteAddress:deleteAddress, postNewAddress:postNewAddress};
});