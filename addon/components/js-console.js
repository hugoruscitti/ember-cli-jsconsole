import Ember from 'ember';
import layout from '../templates/components/js-console';

export default Ember.Component.extend({
  layout: layout,
  didInsertElement() {
    var elementId = this.$('#jsconsole-container')[0];

    var jsconsole = new Console(elementId);

    window['jsconsole'] = jsconsole;

    jsconsole.input.on("inputRead", function(cm, event) {

      if (!cm.state.completionActive && event.keyCode != 13) {
           CodeMirror.commands.autocomplete(cm, null, {completeSingle: false});
       }

    });
  }
});
