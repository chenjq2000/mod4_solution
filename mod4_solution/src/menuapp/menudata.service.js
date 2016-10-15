(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;
  service.getCategories = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

  };
  service.getMenuListForCategory = function (categoryShortName) {
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?categoryShortName="+categoryShortName)

    });
    return promise;

  };

}
