// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', 
['ionic',
  'ionic-material',
  'starter.controllers',
  'starter.factory',
  'starter.factory2',
  'starter.login',
  'starter.installation',
  'starter.breakDown',
  'starter.pm',
  'starter.inbox',
  'starter.attendance',
  'starter.settings',
  'starter.mediaUpload',
  'starter.registrationCall',
  'starter.assignCall',
  'starter.assignedCall'
])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: "templates/login.html",
        controller: "loginCtrl"
      })

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })


      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
          }
        }
      })


      .state('installation', {
        url: '/installation',
        abstract: false,
        templateUrl: 'templates/installation.html',
        controller: 'installationCtrl'
      })

      .state('breakDown', {
        url: '/breakDown',
        abstract: false,
        templateUrl: 'templates/breakDown.html',
        controller: 'breakDownCtrl'
      })

      .state('pm', {
        url: '/pm',
        abstract: false,
        templateUrl: 'templates/pm.html',
        controller: 'pmCtrl'
      })

      .state('inbox', {
        url: '/inbox',
        abstract: false,
        templateUrl: 'templates/inbox.html',
        controller: 'inboxCtrl'
      })

      .state('attendance', {
        url: '/attendance',
        abstract: false,
        templateUrl: 'templates/attendance.html',
        controller: 'attendanceCtrl'
      })

      .state('settings', {
        url: '/settings',
        abstract: false,
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      })

      .state('mediaUpload', {
        url: '/mediaUpload',
        abstract: false,
        templateUrl: 'templates/mediaUpload.html',
        controller: 'mediaUploadCtrl'
      })

      .state('app.registrationCall', {
        url: '/registrationCall',
        views: {
          'menuContent': {
            templateUrl: 'templates/registrationCall.html',
            controller: 'registrationCallCtrl'
          }
        }
      })

      .state('app.assignCall', {
        url: '/assignCall',
        views: {
          'menuContent': {
            templateUrl: 'templates/assignCall.html',
            controller: 'assignCallCtrl'
          }
        }
      })

      .state('app.assignedCall', {
        url: '/assignedCall',
        views: {
          'menuContent': {
            templateUrl: 'templates/assignedCall.html',
            controller: 'assignedCallCtrl'
          }
        }
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
  });






      // .state('app.search', {
      //   url: '/search',
      //   views: {
      //     'menuContent': {
      //       templateUrl: 'templates/search.html'
      //     }
      //   }
      // })

      // .state('app.browse', {
      //   url: '/browse',
      //   views: {
      //     'menuContent': {
      //       templateUrl: 'templates/browse.html'
      //     }
      //   }
      // })




      // .state('app.single', {
      //   url: '/playlists/:playlistId',
      //   views: {
      //     'menuContent': {
      //       templateUrl: 'templates/playlist.html',
      //       controller: 'PlaylistCtrl'
      //     }
      //   }
      // });