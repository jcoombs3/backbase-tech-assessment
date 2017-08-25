backbase.app.run(["$templateCache", function($templateCache) {  'use strict';

  $templateCache.put('partials/home.html',
    "<div id=\"header\">\n" +
    "    <div class=\"main-wrapper\">\n" +
    "        <div class=\"wrapper_inner\">\n" +
    "            <img src=\"images/logo.jpg\" />\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div id=\"btn-transactions\" ng-click=\"toggleWidget()\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"content\" class=\"main-wrapper\">\n" +
    "    <div class=\"content-bg\" ng-click=\"toggleWidget()\" ng-class=\"{'active': widgetActive}\"></div>\n" +
    "    <div class=\"wrapper_inner widget-container\">\n" +
    "        <div id=\"make-a-transfer\" ng-class=\"{'mobile-active': widgetActive}\">\n" +
    "            <div class=\"widget widget-transfer\">\n" +
    "                <div class=\"widget-header\">\n" +
    "                    <h2>Make a Transfer</h2>\n" +
    "                </div>\n" +
    "                <div class=\"widget-content\">\n" +
    "                    <div class=\"input\">\n" +
    "                        <label for=\"fromAccount\">From Account</label>\n" +
    "                        <input name=\"fromAccount\" type=\"text\" value=\"Free Checking(4629) - ${{bankAmount}}\" disabled/>\n" +
    "                    </div>\n" +
    "                    <div class=\"input\" ng-class=\"{'error': toAccountFlag}\">\n" +
    "                        <label for=\"toAccount\">To Account</label>\n" +
    "                        <input name=\"toAccount\" type=\"text\" ng-model=\"toAccount\" value=\"Georgia Power\" />\n" +
    "                        <div class=\"error-msg\">\n" +
    "                            Please enter an account to transfer to. \n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"input\" ng-class=\"{'error': transferFlag}\">\n" +
    "                        <label for=\"amount\">Amount</label>\n" +
    "                        <input type=\"text\" name=\"amount\" ng-model=\"transferAmount\" ui-money-mask=\"2\" />\n" +
    "                        <div class=\"error-msg\" >\n" +
    "                            Please enter an amount between $500 and 1 cent\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"widget-footer\">\n" +
    "                    <button class=\"btn btn-primary\" ng-click=\"submitTransfer()\">Submit</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div id=\"transactions\">\n" +
    "            <div class=\"widget widget-transactions\">\n" +
    "                <div class=\"widget-header\">\n" +
    "                    <h2>Recent Transactions</h2>\n" +
    "                </div>\n" +
    "                <div class=\"widget-content\">\n" +
    "                    <div class=\"widget-table transaction-sort\">\n" +
    "                        <div class=\"widget-cell cell-search input\">\n" +
    "                            <input type=\"text\" spellcheck=\"false\" onkeyup=\"if(event.keyCode == 13)this.blur();\" ng-model=\"search\" placeholder=\"Search by typing...\" />\n" +
    "                            <button class=\"clear-search\" ng-if=\"search.length\" ng-click=\"clearSearch()\">X</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"widget-cell cell-sort\">\n" +
    "                            <div class=\"widget-table\">\n" +
    "                                <div class=\"widget-cell sort-by\">Sort by</div>\n" +
    "                                <div class=\"widget-cell sort-btn\" ng-class=\"{'active': selectedSort === SORT_DATE, 'inverse': inverse}\" ng-click=\"selectSort(SORT_DATE)\">Date</div>\n" +
    "                                <div class=\"widget-cell sort-btn\" ng-class=\"{'active': selectedSort === SORT_BENEFICIARY, 'inverse': inverse}\" ng-click=\"selectSort(SORT_BENEFICIARY)\">Beneficiary</div>\n" +
    "                                <div class=\"widget-cell sort-btn\" ng-class=\"{'active': selectedSort === SORT_AMOUNT, 'inverse': inverse}\" ng-click=\"selectSort(SORT_AMOUNT)\">Amount</div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"transaction-list\">\n" +
    "                        <div class=\"list-container\">\n" +
    "                            <transaction ng-repeat=\"transaction in transactions | filterTransactions:search:selectedSort:inverse\"></transaction>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('partials/styleguide.html',
    "<button class=\"btn btn-primary\">Submit</button>\n" +
    "\n" +
    "<div style=\"margin-top:20px;\"></div>\n" +
    "\n" +
    "<div class=\"tabs\">\n" +
    "    <button class=\"tab\">Date</button>\n" +
    "    <button class=\"tab\">Beneficiary</button>\n" +
    "    <button class=\"tab\">Amount</button>\n" +
    "</div>\n" +
    "\n" +
    "<div style=\"margin-top:20px;\"></div>\n" +
    "\n" +
    "<div class=\"widget\">\n" +
    "    <div class=\"widget-header\"><h2>Make a Transfer</h2></div>\n" +
    "    <div class=\"widget-content\">\n" +
    "        <div class=\"input\">\n" +
    "            <label for=\"fromAccount\">From Account</label>\n" +
    "            <input id=\"fromAccount\" type=\"text\" value=\"Free Checking(4629) - $5824.76\" disabled/>\n" +
    "        </div>\n" +
    "        <div class=\"input\">\n" +
    "            <label for=\"toAccount\">To Account</label>\n" +
    "            <input id=\"toAccount\" type=\"text\" value=\"Georgia Power\" />\n" +
    "        </div>\n" +
    "        <div class=\"input\">\n" +
    "            <label for=\"amount\">Amount</label>\n" +
    "            <input id=\"amount\" type=\"number\" placeholder=\"0.00\" />\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"widget-footer\">\n" +
    "        <button class=\"btn btn-primary\">Submit</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div style=\"margin-top:20px;\"></div>\n" +
    "\n" +
    "<input type=\"text\" spellcheck=\"false\" onkeyup=\"if(event.keyCode == 13)this.blur();\" ng-model=\"search\" placeholder=\"search by typing...\" />\n" +
    "\n" +
    "<!--input id=\"client-searchbook\" placeholder=\"\"  onkeyup=\"if(event.keyCode == 13)this.blur();\" ng-model=\"email\" ng-change=\"updateDirectoryForm('email')\" ng-disabled=\"emailDisabled\"-->\n" +
    "\n" +
    "<transaction ng-repeat=\"transaction in transactions | filterTransactions:search\"></transaction>"
  );


  $templateCache.put('partials/templates/transaction.html',
    "<div class=\"transaction\">\n" +
    "    <div class=\"transaction-content\">\n" +
    "        <div class=\"cell-category\" style=\"background:{{transaction.categoryCode}}\"></div>\n" +
    "        <div class=\"cell-date\">{{transaction.dateFormatted}}</div>\n" +
    "        <div class=\"cell-img\">\n" +
    "            <img ng-src=\"{{transaction.merchantLogo}}\" ng-if=\"transaction.merchantLogo\" />\n" +
    "            <img ng-src=\"images/placeholder.jpg\" ng-if=\"!transaction.merchantLogo\" />\n" +
    "        </div>\n" +
    "        <div class=\"cell-name\">\n" +
    "            <h2 class=\"h-transaction-header\">{{transaction.merchant}}</h2>\n" +
    "            <h3 class=\"h-transaction-detail\">{{transaction.transactionType}}</h3>\n" +
    "        </div>\n" +
    "        <div class=\"cell-amount\">\n" +
    "            -${{transaction.amount}}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );
}]);