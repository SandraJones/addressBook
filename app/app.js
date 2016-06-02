"use strict";
var app = angular.module("AddressBookApp", ["ngRoute"])	
	.constant("firebaseURL", "https://addressbooksj.firebaseio.com/");

let isAuth = (AuthFactory) => new Promise ((resolve, reject){
	if(AuthFactory.isAuthenticated()){
		console.log("User is authenticated", resolve route promise");
		resolve();
		} else {
			console.log("User is not authenticated, reject route promise");
			reject();
		}
	});

app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
		templateUrl: "partials/item-list.html",
		controller: "ItemListCtrl",
		resolve: {isAuth}

	}).when("/addresses/list", {
		templateUrl: "partials/item-list.html",
		controller: "ItemListCtrl",
		resolve: {isAuth}

	}).when("/addresses/new", {
		templateUrl: "partials/item-new.html",
		controller: "ItemNewCtrl",
		resolve: {isAuth}

	}).when("/addresses/:addressId", {
		templateUrl: "partials/item-details.html",
		controller: "ItemViewCtrl",
		resolve: {isAuth}

	}).when("/addresses/:addressId/edit", {
		templateUrl: "partials/item-new.html",
		controller: "ItemEditCtrl",
		resolve: {isAuth}

	}).when("/login", {
		templateUrl: "partials/login.html",
		controller: "LoginCtrl"

	}).when("/logout", {
		templateUrl: "partials/login.html",
		controller: "LoginCtrl"

	}).otherwise("/");

	app.run($location) => {
		let todoRef = new Firebase("https://addressbooksj.firebaseio.com/");

		todoRef.onAuth(authData => {
			if(!authData) {
				$location.path("/login");
			};
		})
		);
	};	
});
