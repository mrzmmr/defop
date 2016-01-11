module.exports = defop

/*
 * Callback utility
 */
export function callop(error, value) {
  return error ? error : value
}

export function defop(options, defaults={}, callback=callop) {
  return callback(null, Object.keys(defaults).reduce((previous, current) => {
    previous[current] = current in previous
      ? previous[current]
      : defaults[current]

    return previous
  }, options))
}
