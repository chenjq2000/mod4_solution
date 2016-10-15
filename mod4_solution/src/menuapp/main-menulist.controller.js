(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuListController', MainMenuListController);


MainMenuListController.$inject = ['items'];
function MainMenuListController(items) {
  var menuList = this;
  menuList.items = items.data;
}

})();
