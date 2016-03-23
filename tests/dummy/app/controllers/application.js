import Ember from 'ember';

export default Ember.Controller.extend({
  autocomplete(cm) {
    //let currentWord = cm.getTokenAt(cm.getCursor()).string);
    return {list: ['home', 'help']};
  }
});
