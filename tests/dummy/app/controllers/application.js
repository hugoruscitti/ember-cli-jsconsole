import Ember from 'ember';

export default Ember.Controller.extend({
  autocomplete(cm) {
    let currentWord = cm.getTokenAt(cm.getCursor()).string;
    let initial_list = ['home', 'help'];

    let list = initial_list.filter(function(e) {
      return (e.indexOf(currentWord) > -1);
    });

    let endCursor = CodeMirror.Pos(cm.getCursor().line, cm.getCursor().ch - currentWord.length);
    return {from: cm.getCursor(), to: endCursor, list: list};
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
