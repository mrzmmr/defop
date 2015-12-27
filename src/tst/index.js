import 'source-map-support'

import * as tap from 'tap'
import * as lib from '../lib/index'

tap.test('lib#defop', (defop) => {
 const OPTIONS = {one: 1}

  defop.test('w/ callback', (assert) => {
    lib.defop({two: 2}, OPTIONS, (error, results) => {
      assert.same(results, {one: 1, two: 2})
    })
    assert.end()
  })
     
  defop.test('w/o callback', (assert) => {
    let results = lib.defop({two: 2}, OPTIONS)
    assert.same(results, {one: 1, two: 2})
    assert.end()
  })

  defop.end()
})
