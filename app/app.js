var app = angular.module("AddressBookApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.when("/addresses/list", {
		templateUrl: "partials/item-list.html",
		controller: "ItemListCtrl"
	}).when("/addresses/new", {
		templateUrl: "partials/item-new.html",
		controller: "ItemNewCtrl"
	}).when("/addresses/details", {
		templateUrl: "partials/item-details.html",
		controller: "ItemViewCtrl"
	}).otherwise("addresses/list");
});
	


