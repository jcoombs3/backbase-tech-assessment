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
// ----------------------------------------------------
// TRANSACTION DIRECTIVE
// ----------------------------------------------------

backbase.directives.directive('mobileTransactions', [function () {

    return {
        restrict: "AE",
		scope: true,
        link: function (scope, element, attrs) {
			
			// console.log('/ mobile transaction /');
            
            scope.widgetActive = false;

            // ------------------------------------------------- //
			
            scope.toggleWidget = function() {
                scope.widgetActive = !scope.widgetActive;
                scope.$broadcast('resetTransferWidget_desktop');
            };
            
            scope.$on('resetTransferWidget_mobile', function (e) {
                scope.widgetActive = false;
            });
            
            // ------------------------------------------------- //
			
        }
    };
}]);
// ----------------------------------------------------
// TRANSACTION DIRECTIVE
// ----------------------------------------------------

backbase.directives.directive('transaction', [function () {

    return {
        templateUrl: "partials/templates/transaction.html",
        restrict: "AE",
		scope: true,
        link: function (scope, element, attrs) {
			
			// console.log('/ transaction directive /');

            // ------------------------------------------------- //
			
			var dateFormatted = new Date(scope.transaction.transactionDate);
            scope.transaction.dateFormatted = backbase.constants.CALENDAR_MONTHS[dateFormatted.getMonth()] + '. ' + new Date(dateFormatted).getDate();

            // ------------------------------------------------- //
			
        }
    };
}]);