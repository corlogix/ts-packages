/**
 * @name isFunction
 * @description Will determine if `value` is classified as a `Function` object. *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * console.log ( isFunction(/asdf/) ) // false
 * 
 * console.log( isFunction(class MyClass{}) ) // true
 *
 * console.log ( isFunction(function * MyFunc() {}) ) // true
 * 
 * console.log ( isFunction(() => {}) ) // true
 *
 * console.log ( isFunction(async () => {}) ) // true
 *
 * console.log ( isFunction(Math.random) ) // true
 * 
 */
export function isFunction(value) {
    return typeof value === 'function'
}