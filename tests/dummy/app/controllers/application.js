import Ember from 'ember';

export default Ember.Controller.extend({
  autocomplete(cm) {
    //let currentWord = cm.getTokenAt(cm.getCursor()).string);
    return {list: ['home', 'help']};
  },

  my_eval(code) {
    var out = {};

    alert("Your code: " + code);

    try {
      out.completionValue = eval.call(null, code);
    } catch(e) {
      out.error = true;
      out.completionValue = e;
      out.recoverable = (e instanceof SyntaxError && e.message.match('^Unexpected (token|end)'));
    }
    return out;
  }
});
