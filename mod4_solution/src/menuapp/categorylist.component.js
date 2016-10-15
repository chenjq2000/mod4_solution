(function () {
'use strict';

angular.module('MenuApp')
.component('categorylist', {
  templateUrl: 'src/menuapp/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
