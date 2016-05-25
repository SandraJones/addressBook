app.controller("NavCtrl", function($scope ){
	$scope.navItems = [
	{
		name: "Logout",
		url: "#/logout"
	},
	{
		name: "All Addresses",
		url: "#/adresses/list"
	},
	{
		name: "New Address",
		url: "#/adresses/new"
	}
	];
});