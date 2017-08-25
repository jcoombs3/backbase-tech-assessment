// ----------------------------------------------------
// HOME CONTROLLER
// ----------------------------------------------------

backbase.ctrls.controller('homeController', ["$scope", "backbaseService", function ($scope, backbaseService) {

    // console.log('// HOME CONTROLLER //');
    
    // ------------------------------------------------- //
    // global variables //
    // ------------------------------------------------- //
    
    $scope.bankAmount = 5824.76;
    $scope.toAccount = ''; //Georgia Power;
    $scope.transferAmount = 0;
    
    // A User shouldn't be able to transfer money beyond a balance of $ -500.00.
    var amountCapacity = 500.00;
    
    // error flags
    $scope.transferFlag = false;
    $scope.toAccountFlag = false;
    
    // sort
    $scope.SORT_DATE = 1;
    $scope.SORT_BENEFICIARY = 2;
    $scope.SORT_AMOUNT = 3;
    $scope.selectedSort = $scope.SORT_DATE;
    $scope.inverse = false;
    
    // ------------------------------------------------- //
    // transactions //
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
    // creation //
    // ------------------------------------------------- //
    
    // Press "Submit" and preview the entered data.
    $scope.submitTransfer = function() {
        $scope.transferFlag = verifyTransferAmount();
        $scope.toAccountFlag = verifyToAccount();
        if (!$scope.transferFlag && !$scope.toAccountFlag) {
            createTransaction();
            resetTransferWidget();
        }
    };
    
    function createTransaction() {
        $scope.bankAmount = ($scope.bankAmount - $scope.transferAmount).toFixed(2); 
        var transaction = {
            "amount": $scope.transferAmount,
            "categoryCode": '#0B6768', //'#'+Math.floor(Math.random()*16777215).toString(16),
            "merchant": $scope.toAccount,
            "merchantLogo": null,
            "transactionDate": new Date(),
            "transactionType": "Card Payment",
        };
        $scope.transactions.push(transaction);
    }
    
    // ------------------------------------------------- //
    // verification //
    // ------------------------------------------------- //
    
    // A User shouldn't be able to transfer money beyond a balance of $ -500.00.
    function verifyTransferAmount() {
        if ($scope.transferAmount > amountCapacity) {
            return true;
        } else if ($scope.transferAmount <= 0) {
            return true;
        } 
        return false;
    }
                   
    function verifyToAccount() {
        if (!$scope.toAccount || $scope.toAccount === '') {
            return true;
        }    
        return false;
    }
    
    // ------------------------------------------------- //
    // reset //
    // ------------------------------------------------- //
    
    // Reset the form to its initial state after the transfer has been completed successfully.
    function resetTransferWidget() {
        $scope.toAccount = null;
        $scope.transferAmount = 0.00;
        $scope.$emit('resetTransferWidget_mobile');
    }
    
    $scope.$on('resetTransferWidget_desktop', function(e) { 
        $scope.transferFlag = false;
        $scope.toAccountFlag = false;
    });
    
    // ------------------------------------------------- //
    // onSelectedSort //
    // ------------------------------------------------- //

    $scope.selectSort = function(sortType) {
        if ($scope.selectedSort === sortType) {
            $scope.inverse = !$scope.inverse;
        } else {
            $scope.selectedSort = sortType;
            $scope.inverse = false;
        }
    };
    
    $scope.clearSearch = function() {
        $scope.search = null;  
    };
    
}]);
// ----------------------------------------------------
// MAIN CONTROLLER
// ----------------------------------------------------

backbase.ctrls.controller('mainController', ["$scope", function (scope) {

    // console.log('// MAIN CONTROLLER //');

    // ------------------------------------------------- //
	
    

    // ------------------------------------------------- //
	
}]);
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