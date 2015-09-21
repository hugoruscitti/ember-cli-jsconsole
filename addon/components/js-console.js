import Ember from 'ember';
import layout from '../templates/components/js-console';

export default Ember.Component.extend({
  layout: layout,
  didInsertElement() {
    var elementId = this.$('#jsconsole-container')[0];
    var repl = new Console(elementId);
  }
});
