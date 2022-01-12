(function () {

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/html/home.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/html/categories.html',
      controller: "categoriesController as catCon",   
      resolve: {
        allCategories: ['MenuDataService', function(MenuDataService){ 
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{catId}',
      templateUrl: 'src/html/items.html',
      controller: "itemsController as itemsCon",   
      resolve: {
        itemsForCategory: ['MenuDataService','$stateParams', function(MenuDataService,$stateParams){ 
          return MenuDataService.getItemsForCategory($stateParams.catId);
        }]
      }
    });
}


})();
