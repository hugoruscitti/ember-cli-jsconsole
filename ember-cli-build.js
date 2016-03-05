/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {

  });

/*
  app.import("./bower_components/codemirror/lib/codemirror.css");
  app.import("./bower_components/codemirror/theme/eclipse.css");
  app.import("./bower_components/codemirror/lib/codemirror.js");
  app.import("./bower_components/codemirror/addon/hint/javascript-hint.js");
  app.import("./bower_components/codemirror/addon/hint/show-hint.css");
  app.import("./bower_components/codemirror/addon/hint/show-hint.js");

  app.import("./bower_components/codemirror/mode/javascript/javascript.js");

  app.import("./bower_components/jsconsole/styles/console.css");
  app.import("./bower_components/jsconsole/dist/console.js");
  app.import("./bower_components/jsconsole/styles/gutter-icons.png", {destDir: 'assets/'});
  app.import("./bower_components/jsconsole/styles/meslo/MesloLGSDZ-Regular.woff", {destDir: 'assets/meslo'});
*/

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
