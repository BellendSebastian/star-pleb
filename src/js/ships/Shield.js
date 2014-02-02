define([
    'Component'
], function (
    Component
) {
    'use strict';

    Shield.prototype = new Component();
    Shield.prototype.constructor = Shield;

    function Shield(capacity) {
        this.capacity = capacity;
    }

    return Shield;
});
