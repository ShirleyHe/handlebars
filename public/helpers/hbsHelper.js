var helper = {
  section: function(name, block) {
    if(!this._section) this._section = {};
    this._section[name] = block.fn(this);
    return null;
  }
}
module.exports = helper;