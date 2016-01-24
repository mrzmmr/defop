/**
 * ## install
 *
 * ```sh
 * npm install [ --save ] defop
 * ```
 *
 * #### then
 *
 * ```js
 * import defop from 'defop'
 * ```
 *
 * @module defop
 * @version 1.1.12
 * @author mrzmmr
 */

/* Callback utility */
export function callop(error, value) {
  return error ? error : value
}

/**
 * @param {Object} options
 * @param {Object} [defaults={}] -
 * @param {Function} [callback=callop]
 * @return {Object}
 *
 * @example
 * import defop from 'defop'
 *
 * let one = { "key1": 1, "key3": 3 }
 * let two = { "key2": 2, "key3": 4 }
 *
 * defop(one, two, (error, result) => {
 *   // result => {"key1": 1, "key2": 2, "key3": 3}
 * })
 */
export default function defop(options, defaults={}, callback=callop) {
  return callback(null, Object.keys(defaults).reduce((previous, current) => {
    previous[current] = current in previous
      ? previous[current]
      : defaults[current]

    return previous
  }, options))
}
