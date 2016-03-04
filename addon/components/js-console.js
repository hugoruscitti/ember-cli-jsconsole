import Ember from 'ember';
import layout from '../templates/components/js-console';

export default Ember.Component.extend({
  layout: layout,
  didInsertElement() {
    var elementId = this.$('#jsconsole-container')[0];

    var console = new Console(elementId);

    window['console'] = console;

    console.input.on("inputRead", function(cm, event) {

      if (!cm.state.completionActive && event.keyCode != 13) {
           CodeMirror.commands.autocomplete(cm, null, {completeSingle: false});
       }

    });
  }
});
