/*
 * Callback utility
 */
function callop(error, value) {
  return error ? error : value
}

module.exports = function defop(options, defaults={}, callback=callop) {
  return callback(null, Object.keys(defaults).reduce((previous, current) => {
    previous[current] = current in previous
      ? previous[current]
      : defaults[current]

    return previous
  }, options))
}
