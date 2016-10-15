(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoryListController', MainCategoryListController);


MainCategoryListController.$inject = ['MenuDataService','items'];
function MainCategoryListController(MenuDataService, items) {
  var $ctrl = this;
  $ctrl.items = items.data;
  console.log($ctrl.items);
}

})();
