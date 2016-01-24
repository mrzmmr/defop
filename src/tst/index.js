import * as tap from 'tap'
var defop = require('../lib/index')

const OPTIONS = {one: 1}

tap.test('w/ callback', (assert) => {
  defop({two: 2}, OPTIONS, (error, results) => {
    assert.same(results, {one: 1, two: 2})
  })
  assert.end()
})
     
tap.test('w/o callback', (assert) => {
  let results = defop({two: 2}, OPTIONS)
  assert.same(results, {one: 1, two: 2})
  assert.end()
})
