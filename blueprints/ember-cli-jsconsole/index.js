module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var that = this;

    return this.addBowerPackageToProject('codemirror').then(function() {
        return that.addBowerPackageToProject('jsconsole');
    });
  }
};
