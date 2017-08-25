// ----------------------------------------------------
// DEV STATE DIRECTIVE
// ----------------------------------------------------

backbase.directives.directive('devState', [function () {

    return {
        templateUrl: "partials/dev/dev-state.html",
        restrict: "AE",
		scope: true,
        link: function (scope, element, attrs) {
			
			console.log('/ dev state initialized /');

            // ------------------------------------------------- //
			
			if (attrs.pageView === 'true') {
				scope.pageView = true;
			}
			
			scope.toggleDevState = function (e) {
				$(e.currentTarget).parents('#dev-state').toggleClass('active');
			};

            // ------------------------------------------------- //
			
        }
    };
}]);