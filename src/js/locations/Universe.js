define([
    'Galaxy'
], function (
    Galaxy
) {
    'use strict';

    function Universe() {
        this.galaxies = [];
    }

    Universe.prototype.setGalaxies = function (galaxies) {
        this.galaxies = galaxies;
        return this;
    };

    return Universe;
});
