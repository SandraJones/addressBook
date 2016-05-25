"use strict";
app.factory("addressStorage", function($q, $http){

//get 
	var getAddressList = function(){
	var address = [];
		return $q(function(resolve, reject){
		$http.get("https://addressbooksj.firebaseio.com/addresses.json")	
			.success(function(addressObject) {
				var addressCollection = addressObject;
				// console.log("addressObject", addressObject);
				//this loops through each address and pulls out the key value pairs
				Object.keys(addressCollection).forEach(function(key){
					addressCollection[key];
					address.push(addressCollection[key]);
				})
				resolve(addresses);
				})
			.error(Function(error){
				reject(error);
			});
			})
	}
//delete
	var deleteAddress = function(){
		return $q(function(resolve, reject){
			$http
				.delete(`https://addressbooksj.firebaseio.com/addresses/${addressId}.json`)
				.success(function(objectFromFirebase){
					resolve(objectFromFirebase)
				})
		})
	}
	//post
	var postNewAddress = function(newAddress){
		return $q(function(resolve, reject){
			$http.post(
				"https://addressbooksj.firebaseio.com/address/${addressId}.json",
				JSON.stringify({
					name: newAddress.name,
					street: newStreet.street,
					city: newCity.city,
					state: newState.state,
					zip: newZip.zip,
					email: newEmail.email
				})
			)
			.success(
				function(objectFromFirebase){
					resolve(objectFromFirebase);
				}
			);
		});
	}
  return{getAddressList:getAddressList, deleteAddress:deleteAddress, postNewAddress:postNewAddress}
});



