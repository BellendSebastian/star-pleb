define([
    'LocationFactory',
    'Player'
], function (
    LocationFactory,
    Player
) {
    'use strict';

    function StarPleb() {
        this.universe = LocationFactory.generateUniverse();
        this.player = new Player();
    }

    return StarPleb;
});
