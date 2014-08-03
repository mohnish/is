
/**
 * Identifies the type of the given argument
 *
 * @param {Array|Object|Number|String|Undefined|Null|Function|Boolean|Date|RegExp} i Input item
 */
function is(i) {
  if (!(this instanceof is)) return new is(i);
  if(0 == arguments.length) throw new Error('"is" needs a value to be passed in.');

  var toString = ({}).toString
      , availableTypes = ['Array', 'Object', 'Number', 'String', 'Undefined', 'Null', 'Function', 'Boolean', 'Date', 'RegExp']
      , typesRegEx = new RegExp(availableTypes.join('|'));

  this.type = toString.call(i).match(typesRegEx)[0];
}

/**
 * Checks if the given argument is an Array
 * @return {Boolean}
 */
is.prototype.isArray = function() {
  return 'Array' == this.type;
};

/**
 * Checks if the given argument is an Object
 * @return {Boolean}
 */
is.prototype.isObject = function() {
  return 'Object' == this.type;
};

/**
 * Checks if the given argument is a Number
 * @return {Boolean}
 */
is.prototype.isNumber = function() {
  return 'Number' == this.type;
};

/**
 * Checks if the given argument is a String
 * @return {Boolean}
 */
is.prototype.isString = function() {
  return 'String' == this.type;
};

/**
 * Checks if the given argument is Undefined
 * @return {Boolean}
 */
is.prototype.isUndefined = function() {
  return 'Undefined' == this.type;
};

/**
 * Checks if the given argument is Null
 * @return {Boolean}
 */
is.prototype.isNull = function() {
  return 'Null' == this.type;
};

/**
 * Checks if the given argument is a Function
 * @return {Boolean}
 */
is.prototype.isFunction = function() {
  return 'Function' == this.type;
};

/**
 * Checks if the given argument is a Boolean
 * @return {Boolean}
 */
is.prototype.isBoolean = function() {
  return 'Boolean' == this.type;
};

/**
 * Checks if the given argument is a Date
 * @return {Boolean}
 */
is.prototype.isDate = function() {
  return 'Date' == this.type;
};

/**
 * Checks if the given argument is a Regular Expression
 * @return {Boolean}
 */
is.prototype.isRegExp = function() {
  return 'RegExp' == this.type;
};

