(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  .state('categoryList', {
    url: '/categoryList',
    templateUrl: 'src/menuapp/templates/main-categorylist.template.html',
    controller: 'MainCategoryListController',
    controllerAs: 'categoryList',
    resolve: {
      items: ['MenuDataService',
              function (MenuDataService) {
        return MenuDataService.getCategories();
      }]
    }

  })
  .state('menuList', {
    url: '/menuList/{categoryShortName}',
    templateUrl: 'src/menuapp/templates/main-menulist.template.html',
    controller: 'MainMenuListController',
    controllerAs: 'menuList',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
              function ($stateParams, MenuDataService) {
        return MenuDataService.getMenuListForCategory($stateParams.categoryShortName);
      }]
    }

  });

}

})();
