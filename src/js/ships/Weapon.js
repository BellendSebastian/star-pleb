define([
    'Component'
], function (
    Component
) {
    'use strict';

    Weapon.prototype = new Component();
    Weapon.prototype.constructor = Weapon;

    function Weapon() { }

    return Weapon;
});

