import 'source-map-support'

import * as tap from 'tap'
import * as lib from '../lib/index'

tap.test('lib#opop', (opop) => {
 const OPTIONS = {one: 1}

  opop.test('w/ callback', (assert) => {
    lib.opop({two: 2}, OPTIONS, (error, results) => {
      assert.same(results, {one: 1, two: 2})
    })
    assert.end()
  })
     
  opop.test('w/o callback', (assert) => {
    let results = lib.opop({two: 2}, OPTIONS)
    assert.same(results, {one: 1, two: 2})
    assert.end()
  })

  opop.end()
})
