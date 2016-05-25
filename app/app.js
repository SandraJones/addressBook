var app = angular.module("AddressBookApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.when("/adresses/list", {
		templateUrl: "partials/item-list.html",
		controller: "ItemListCtrl"
	}).when("/adresses/new", {
		templateUrl: "partials/item-new.html",
		controller: "ItemNewCtrl"
	}).when("/adresses/details", {
		templateUrl: "partials/item-details.html",
		controller: "ItemViewCtrl"
	}).otherwise("adresses/list");
});
	

//took out the "d" in addresses
