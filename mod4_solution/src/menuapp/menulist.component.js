(function () {
'use strict';

angular.module('MenuApp')
.component('menulist', {
  templateUrl: 'src/menuapp/templates/menulist.template.html',
  bindings: {
    items: '<'
  }
});

})();
