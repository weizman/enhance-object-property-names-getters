(function(){
    Object.entries({
        getAllPropertyNames: function(obj, useCache = true) {
            return getAllPropertyNames(obj, -1, useCache);
        },
        getNPropertyNames: function(obj, n = -1, useCache = true) {
            return getAllPropertyNames(obj, n, useCache);
        },
    }).forEach(([n, f]) => {
        Object.defineProperty(Object, n, {
            configurable: true,
            writable: true,
            enumerable: false,
            value: f,
        });    
      });

    function getAllPropertyNames(obj, n, useCache, props = []) {
        if (!obj || !n) {
            return props;
        }

        props = [...props, ...getPropertyName(obj, useCache)];
        return getAllPropertyNames(Object.getPrototypeOf(obj), n - 1, useCache, props);
    }

    const cache = new Map();

    function getPropertyName(obj, useCache) {
        let ownProps = cache.get(obj);
        if (!ownProps || !useCache) {
            ownProps = Object.getOwnPropertyNames(obj);
            cache.set(obj, ownProps);
        }

        return ownProps;
    }
}());
