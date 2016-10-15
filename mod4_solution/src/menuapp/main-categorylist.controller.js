(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoryListController', MainCategoryListController);


MainCategoryListController.$inject = ['MenuDataService'];
function MainCategoryListController(MenuDataService) {
  var categoryList = this;
  categoryList.$onInit = function () {
    console.log("onInit is called");
    MenuDataService.getMenuListForCategory()
    .then(function (result) {
      console.log(result);
      categoryList.items = result;
    });
  };
}

})();
