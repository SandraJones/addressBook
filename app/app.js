var app = angular.module("AddressBookApp", ["ngRoute"])	
	.constant("firebaseURL", "https://addressbooksj.firebaseio.com/");

app.config(function($routeProvider) {
	$routeProvider.when("/addresses/list", {
		templateUrl: "partials/item-list.html",
		controller: "ItemListCtrl"

	}).when("/addresses/new", {
		templateUrl: "partials/item-new.html",
		controller: "ItemNewCtrl"

	}).when("/addresses/:addressId", {
		templateUrl: "partials/item-details.html",
		controller: "ItemViewCtrl"

	}).when("/addresses/:addressId/edit", {
		templateUrl: "partials/item-new.html",
		controller: "ItemEditCtrl"

	}).otherwise("addresses/list");
});
	
