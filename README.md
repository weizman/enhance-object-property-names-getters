# enhance-object-property-names-getter

Enhance `Object.getOwnPropertyNames` with `getAllPropertyNames` and `getNPropertyNames`

## Install

Simply require/import `@weizman/enhance-object-property-names-getter` from npm/yarn

## Use

After requiring/importing, `Object` will have new configurable descriptors:

```javascript
Object.getOwnPropertyNames(document); // ['location'] (length:1)
Object.getNPropertyNames(document, 0); // [] (length:0)
Object.getNPropertyNames(document, 1); // ['location'] (length:1)
Object.getNPropertyNames(document, 2); // ['location', 'constructor'] (length:2)
Object.getNPropertyNames(document, 3); // ['location', 'constructor', ...] (length:235)
Object.getAllPropertyNames(document); // ['location', 'constructor', ...] (length:299)
```

You can also pass to both a final boolean argument to either use or avoid caching of properties (default:true)

## Explanation

`Object.getOwnPropertyNames` gives you the own props of an object, sometimes you might want more properties that are inherited as part of the prototype chain. You can ask for all properties using `getAllPropertyNames` by climbing up the chain to the final root, or climb only a fixed amount of levels using `getNPropertyNames`.
