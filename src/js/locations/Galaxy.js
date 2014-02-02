define(function () {
    'use strict';

    function Galaxy() {
        this.systems = [];
    }

    Galaxy.prototype.setSystems = function (systems) {
        this.systems = systems;
        return this;
    };

    return Galaxy;
});
