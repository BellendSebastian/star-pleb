define(function () {
    'use strict';

    function System() {
        this.bodies = [];
    }

    System.prototype.setBodies = function (bodies) {
        this.bodies = bodies;
        return this;
    };

    return System;
});
