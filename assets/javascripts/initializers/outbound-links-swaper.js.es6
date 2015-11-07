// import { decorateCooked } from 'discourse/lib/plugin-api';
//
// export default {
//   name: "outbound-links-swap",
//
//   initialize: function(container) {
//     console.log('Init called');
//
//     var that = this;
//
//     decorateCooked(container, function($elem) {
//       $('a', $elem).each(function() {
//         var url = $(this).attr('href'),
//             domain = that.extractDomain(url);
//
//         if(domain && domain !== window.location.hostname) {
//           url = "http://sh.st/st/15e340acb854c86386a6e2d3240d7f24/" + url;
//           $(this).attr('href', url);
//         }
//
//       });
//     });
//   },
//
//   extractDomain: function(url) {
//     var domain;
//     if (!url) {
//       return "";
//     }
//     if (url.indexOf("://") > -1) {
//         domain = url.split('/')[2];
//     }
//     else {
//         domain = url.split('/')[0];
//     }
//     domain = domain.split(':')[0].split('#')[0];
//     return domain;
//   }
// };
