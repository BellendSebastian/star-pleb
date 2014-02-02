define([
    'AstralBody'
], function (
    AstralBody
) {
    'use strict';

    Satellite.prototype = new AstralBody();
    Satellite.prototype.constructor = Satellite;

    function Satellite(name) {
        AstralBody.call(this, name);
    }

    return Satellite;
});
