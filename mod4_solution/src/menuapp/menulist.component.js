(function () {
'use strict';

angular.module('MenuApp')
.component('menuList', {
  templateUrl: 'src/menuapp/templates/menulist.template.html',
  bindings: {
    items: '<'
  }
});

})();
