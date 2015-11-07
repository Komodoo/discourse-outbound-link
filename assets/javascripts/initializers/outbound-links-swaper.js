import { decorateCooked } from 'discourse/lib/plugin-api';

export default {
  name: "outbound-links-swap",

  initialize: function(container) {
    decorateCooked(container, function($elem) {
      $('a', $elem).on('click', function(e) {
        e.preventDefault();
      });
    });
  }
};
