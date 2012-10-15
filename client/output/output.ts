var Template;
var Session;
var Handlebars;

Template.output.contents = function() {
  var out = Session.get('output');
  if(out===undefined)
    out="";
  return new Handlebars.SafeString(out);
}


