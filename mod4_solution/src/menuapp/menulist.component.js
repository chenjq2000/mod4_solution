(function () {
'use strict';

angular.module('MenuApp')
.component('menulist', {
  templateUrl: 'src/menuapp/templates/main-menulist.template.html',
  bindings: {
    items: '<'
  }
});

})();
