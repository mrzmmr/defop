# .

## defop

### install

```sh
npm install [ --save ] defop
```

##### then

```js
import defop from 'defop'
```

**Meta**

-   **version**: 1.1.12
-   **author**: mrzmmr

## defop

**Parameters**

-   `options` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
-   `defaults` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)=** - (optional, default `{}`)
-   `callback` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)=**  (optional, default `callop`)

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
