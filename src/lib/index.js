import 'source-map-support'

/*
 * Callback utility
 */
export function callop(error, value) {
  return error ? error : value
}

export function opop(options, defaults={}, callback=callop) {
  return callback(null, Object.keys(defaults).reduce((previous, current) => {
    previous[current] = current in previous
      ? previous[current]
      : defaults[current]

    return previous
  }, options))
}

export default opop
