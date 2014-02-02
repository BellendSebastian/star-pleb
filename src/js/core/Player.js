define([
    'ShipFactory'
], function (
    ShipFactory
) {
    'use strict';

    function Player() {
        this.ship = ShipFactory.generatePod();
    }

    return Player;
});
