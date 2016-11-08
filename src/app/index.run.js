(function() {
  'use strict';

  angular
    .module('ogilvy')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
