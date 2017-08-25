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