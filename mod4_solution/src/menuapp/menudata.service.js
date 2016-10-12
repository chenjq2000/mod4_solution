(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService(($http, ApiBasePath) {
  var service = this;
  service.getCategories = function () {
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (result) {
      var categories = result.data.categories;
      return categories;
    });

    return promise;

  };
  service.getItemForCategory = function (categoryShortName) {
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category="+categoryShortName)
    }).then(function (result) {
      var items = result.data.menu_items;
      
      return items;
    });

    return promise;

  };

}