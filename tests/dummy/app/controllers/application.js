import Ember from 'ember';

export default Ember.Controller.extend({
  autocomplete(cm) {

    /*

    To get all tocken under cursor (including . values ) you need to
    get the current word with this strategy.

    let full_line = cm.getValue();
    let end = cm.getCursor().ch;
    full_line = full_line.substr(0, end);
    let start = full_line.lastIndexOf(" ");

    if (start === -1) {
      start = 0;
    }

    let currentWord = full_line.substr(start, end - start);
    */

    let currentWord = cm.getTokenAt(cm.getCursor()).string;

    let initial_list = ['home', 'help'];

    console.log(currentWord);

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
