var Session;
var CodeMirror;
var translateCode;
var Template;
var Codes;

var fail;
var BSOMetaJSParser;
var objectThatDelegatesTo;


Template.editors.codes = function() {
  return Codes.find();
}

Template.editor.rendered = function() {
  var data = this.data;
  var editor = CodeMirror(this.firstNode, {
    value: data.code,
    mode:  data.type,
    onKeyEvent: function(editor, evt) {
      try {
        if(evt.type=="keyup" && evt.keyCode==13 && evt.ctrlKey) {
          Codes.update(data._id, {$set: { code: editor.getValue() }});
          var output;
          if(data.type == "javascript") {
            output = eval(editor.getValue());
          } else if(data.type == "ometa") {
            var tree = BSOMetaJSParser.matchAll(editor.getValue(), "topLevel", undefined, 
              function(m, i) { throw objectThatDelegatesTo(fail, {errorPos: i}) });
            output = tree.toString();
            eval(translateCode( editor.getValue() ));
          } else {
            var tree = eval(data.type + ".matchAll(editor.getValue(), 'begin')");
            var html = eval(data.type + "ToHtml.matchAll(tree, 'begin')");
            output = html;
          }
          Session.set('output', output.toString());
          return true;
        }
      } catch(e) {
        alert(e);
      }
    }
  });
}
