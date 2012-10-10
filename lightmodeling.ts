if (Meteor.isClient) {

  Meteor.startup(function() {
    var editor = CodeMirror(document.getElementById("editors"), {
      value: "\nometa M { ones = 1* }\nalert(M.matchAll([1, 1, 1, 1, 1], \"ones\"))\n\n",
      mode:  "ometa",
      parserfile: ["/client/codemirror/ometa/tokenizeometa.js", 
        "/client/codemirror/ometa/parseometa.js"],
      stylesheet: "/client/codemirror/ometa/ometacolors.css",
      path: "/",
      onKeyEvent: function(editor, evt) {
        try {
        if(evt.type=="keyup" && evt.keyCode==13) {
          eval(translateCode(editor.getValue()));
        }
        } catch(e) {
          alert(e);
        }
      }
    });
  });
  

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
