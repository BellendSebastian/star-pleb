define([
    'AstralBody'
], function (
    AstralBody
) {
    'use strict';

    Star.prototype = new AstralBody();
    Star.prototype.constructor = Star;

    function Star(name) {
        AstralBody.call(this, name);
    }

    return Star;
});
