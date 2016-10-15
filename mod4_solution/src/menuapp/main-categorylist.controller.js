(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoryListController', MainCategoryListController);


MainCategoryListController.$inject = ['MenuDataService'];
function MainCategoryListController(MenuDataService) {
  var categoryList = this;
  categoryList.$onInit = function () {
    MenuDataService.getMenuListForCategory()
    .then(function (result) {
      categoryList.items = result;
    });
  };
}

})();
