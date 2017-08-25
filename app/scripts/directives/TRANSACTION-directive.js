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