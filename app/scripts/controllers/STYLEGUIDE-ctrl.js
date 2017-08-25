// ----------------------------------------------------
// STYLEGUIDE CONTROLLER
// ----------------------------------------------------

backbase.ctrls.controller('styleguideController', ["$scope", "backbaseService", function ($scope, backbaseService) {

    console.log('// STYLEGUIDE CONTROLLER //');

    // ------------------------------------------------- //
    
    backbaseService.getTransactions(function (data) {
        $scope.transactions = data;
        formatTransactions();
    });
    
    function formatTransactions() {
        _.forEach($scope.transactions, function (iTransaction) {
            var dateFormatted = new Date(iTransaction.transactionDate);
            iTransaction.dateFormatted = backbase.constants.CALENDAR_MONTHS[dateFormatted.getMonth()] + '. ' + new Date(iTransaction.transactionDate).getDay();
        });
    }

    // ------------------------------------------------- //

}]);