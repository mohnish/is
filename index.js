
module.exports = is;

var availableTypes = ['Array', 'Object', 'Number', 'String', 'Undefined', 'Null', 'Function', 'Boolean', 'Date', 'RegExp']

/**
 * Identifies the type of the given argument
 *
 * @param {Multiple} i Input item
 */
function is(i) {
  if(0 == arguments.length) throw new Error('"is" needs a value to be passed in.');
  if (!(this instanceof is)) return new is(i);

  var toString = ({}).toString
      , typesRegEx = new RegExp(availableTypes.join('|'));

  this.type = toString.call(i).match(typesRegEx)[0];
}

availableTypes.forEach(function(type) {
  is.prototype['is' + type] = function() {
    return type == this.type;
  };
});
