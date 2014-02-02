define([
    'Ship',
    'HullTypes',
    'WeaponTypes',
    'Weapon',
    'Shield'
], function (
    Ship,
    HullTypes,
    WeaponTypes,
    Weapon,
    Shield
) {
    'use strict';

    function ShipFactory() { }

    ShipFactory.generatePod = function () {
        var ship = new Ship();
        ship.setHullType(HullTypes.POD)
            .addShield(new Shield(80));
        return ship;
    };

    return ShipFactory;
});
