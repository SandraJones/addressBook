"use strict";
app.factory("addressStorage", function($q, $http){

//get 
	var getAddressList = function(){
	var address = [];
		return $q(function(resolve, reject){
		$http.get("https://todo-appskj.firebaseio.com/items.json")	
			.success(function(addressObject) {
				var addressCollection = addressObject;
				console.log("addressObject", addressObject);
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
				.delete(`https://todo-appskj.firebaseio.com/items/${itemId}.json`)
				.success(function(objectFromFirebase){
					resolve(objectFromFirebase)
				})
		})
	}
	
	











//post



});