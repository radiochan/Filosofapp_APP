angular.module('filosofapp', ['ionic'])

    .run(['$ionicPlatform', function($ionicPlatform) {
      $ionicPlatform.ready(function() {

        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }

        if (window.StatusBar) {
          StatusBar.styleDefault();
        }

      });
    }])

    .config(['SETTINGS', '$logProvider', '$compileProvider', function(SETTINGS, $logProvider, $compileProvider) {
        $logProvider.debugEnabled(SETTINGS.debugEnabled);

        $compileProvider.debugInfoEnabled(SETTINGS.debugEnabled);
    }])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider)
    {
        $stateProvider

            .state('map', {
                cache: false,
                url: '/map',
                templateUrl: 'app/templates/map.html',
                controller: 'MapCtrl'
            })

            .state('place', {
                cache: false,
                url: '/place/:placeId/:sceneId',
                templateUrl: 'app/templates/place.html',
                controller: 'PlaceCtrl'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/map');

    }]);
