"use strict";
app.factory("addressStorage", function($q, $http){

//get 
	var getAddressList = function(){
	var addresses = [];
		return $q(function(resolve, reject){
		$http.get("https://addressbooksj.firebaseio.com/adresses.json")	
			.success(function(addressObject) {
				var addressCollection = addressObject;
				// console.log("addressCollection", addressCollection);
				//this loops through each address and pulls out the key value pairs
				Object.keys(addressCollection).forEach(function(key){
					addressCollection[key];
					addresses.push(addressCollection[key]);
				})
				resolve(addresses);
				})
			.error(function(error){
				reject(error);
			});
			})
	}
//delete
	var deleteAddress = function(){
		return $q(function(resolve, reject){
			$http
				.delete(`https://addressbooksj.firebaseio.com/adresses/${addressId}.json`)
				.success(function(objectFromFirebase){
					resolve(objectFromFirebase)
				})
		})
	}
	//post
	var postNewAddress = function(newAddress){
		return $q(function(resolve, reject){
			$http.post(
				"https://addressbooksj.firebaseio.com/adresses/${addressId}.json",
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
	}
  return{getAddressList:getAddressList, deleteAddress:deleteAddress, postNewAddress:postNewAddress}
});



