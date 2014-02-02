define([
    'AstralBody'
], function (
    AstralBody
) {
    'use strict';

    Planet.prototype = new AstralBody();
    Planet.prototype.constructor = Planet;

    function Planet(name) {
        AstralBody.call(this, name);
        this.satellites = [];
    }

    Planet.prototype.setSatellites = function (satellites) {
        this.satellites = satellites;
        return this;
    };

    return Planet;
});

