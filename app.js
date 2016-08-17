if (typeof jQuery === 'undefined') {
  throw new Error('This project\'s APP JavaScript requires jQuery')
}

+

function($) {
  'use strict';

  $(document).on('ready', function() {

    doneResizing();
  });

  function isPostBack() {
    return $('body').hasClass('app-loaded');
  }
  
  function setPostBack() {
    return $('body').addClass('app-loaded');
  }

  // After resize
  var id;
  $(window).resize(function() {
    clearTimeout(id);
    id = setTimeout(doneResizing, 200);
  });

  function doneResizing() {
    if (!isPostBack())
      return;
  }

  function findBootstrapEnvironment() {
    var envs = ['xs', 'sm', 'md', 'lg'];

    var $el = $('<div>');
    $el.appendTo($('body'));

    for (var i = envs.length - 1; i >= 0; i--) {
      var env = envs[i];

      $el.addClass('hidden-' + env);
      if ($el.is(':hidden')) {
        $el.remove();
        return env;
      }
    }

  }
  $(window).load(function() {
    
    setPostBack();
  });

}(jQuery);