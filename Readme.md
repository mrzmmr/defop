# .

## defop

[![AppVeyor branch](https://img.shields.io/appveyor/ci/mrzmmr/defop/master.svg?style=flat-square)](<>)
[![CircleCI branch](https://img.shields.io/circleci/project/mrzmmr/defop/master.svg?style=flat-square)](<>)
[![Coveralls branch](https://img.shields.io/coveralls/mrzmmr/defop/master.svg?style=flat-square)](<>)

### install

```sh
npm install [ --save ] defop
```

##### then

```js
import defop from 'defop'
```

**Meta**

-   **version**: 1.1.14
-   **author**: mrzmmr

## defop

**Parameters**

-   `options` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
-   `defaults` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)=** Object to merge (optional, default `{}`)
-   `callback` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)=** Defaults to function that returns value or error (optional, default `{Function}`)

**Examples**

```javascript
import defop from 'defop'

let one = { "key1": 1, "key3": 3 }
let two = { "key2": 2, "key3": 4 }

defop(one, two, (error, result) => {
  // result => {"key1": 1, "key2": 2, "key3": 3}
})
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
