if (Meteor.isClient) {
  Meteor.startup(function() {
    var editor = CodeMirror(document.getElementById("editors"), {
      value: "\nfunction myScript() { return 100; }\n",
      mode:  "typescript",
    });
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
