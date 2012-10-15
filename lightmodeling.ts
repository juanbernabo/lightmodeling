
var Meteor;
var Session;

var Codes = new Meteor.Collection("codes");

if (Meteor.isClient) {
  Meteor.startup(function() {});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if(Codes.find().count() === 0) {
      Codes.insert({type: 'ometa', code: "\nometa M { ones = 1* -> \"one\"}\nM.matchAll([1, 1, 1, 1, 1], \"ones\")\n\n"});
      Codes.insert({type: 'M', code: "11111"});
      }
  });
}
