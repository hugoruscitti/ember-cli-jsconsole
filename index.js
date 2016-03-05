/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-jsconsole',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + "/codemirror/lib/codemirror.css");
    app.import(app.bowerDirectory + "/codemirror/theme/eclipse.css");
    app.import(app.bowerDirectory + "/codemirror/lib/codemirror.js");
    app.import(app.bowerDirectory + "/codemirror/addon/hint/javascript-hint.js");
    app.import(app.bowerDirectory + "/codemirror/addon/hint/show-hint.css");
    app.import(app.bowerDirectory + "/codemirror/addon/hint/show-hint.js");
   
    app.import(app.bowerDirectory + "/codemirror/mode/javascript/javascript.js");
   
    app.import(app.bowerDirectory + "/jsconsole/styles/console.css");
    app.import(app.bowerDirectory + "/jsconsole/styles/gutter-icons.png", {destDir: 'assets/'});
    app.import(app.bowerDirectory + "/jsconsole/styles/meslo/MesloLGSDZ-Regular.woff", {destDir: 'assets/meslo'});

  }
};
