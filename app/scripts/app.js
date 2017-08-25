// Application namespace
window.backbase = {};

// Application global variables
backbase.constants = {
    PARTIALS_DIR: 'partials/',
    CALENDAR_MONTHS: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
};

// Cache Controllers module
backbase.ctrls = angular.module('backbase.controllers', []);

// Cache services module
backbase.services = angular.module('backbase.services', []);

// Cache directives module
backbase.directives = angular.module('backbase.directives', []);

// Cache main app module
backbase.app = angular.module('backbase', ['ui.router', 'backbase.services', 'backbase.controllers', 'backbase.directives', 'ui.utils.masks']);

// App configurations
backbase.app.config(['$stateProvider', '$urlRouterProvider', '$compileProvider', function ($stateProvider, $urlRouterProvider, $compileProvider) {
    var partialsDir = backbase.constants.PARTIALS_DIR;

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file):/);
    // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)

    // Fallback route
    $urlRouterProvider.otherwise('/home');

    // ------------------------------------------------- //
    
    // Configs for page states and sub states
    $stateProvider
    
        // ------------------------------------------------- //
	
        .state('home', {
            url: '/home',
            templateUrl: partialsDir + 'home.html',
            controller: 'homeController'
        })
        .state('styleguide', {
            url: '/style',
            templateUrl: partialsDir + 'styleguide.html',
            controller: 'styleguideController'
        });
    
    // ------------------------------------------------- //
    
}]);