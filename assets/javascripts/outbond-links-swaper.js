function extractDomain(url) {
  var domain;
  if (!url) {
    return "";
  }
  if (url.indexOf("://") > -1) {
      domain = url.split('/')[2];
  }
  else {
      domain = url.split('/')[0];
  }
  domain = domain.split(':')[0].split('#')[0];
  return domain;
}

Discourse.Dialect.on("parseNode", function(event) {
  var node = event.node;

  // We only care about links
  if (node[0] !== 'a')  { return; }

  var url = node[1].href,
      domain = extractDomain(url);

  if(domain && domain !== Discourse.BaseUrl) {
    url = "http://sh.st/st/15e340acb854c86386a6e2d3240d7f24/" + url;
    node[1].href = url;
  }


});
