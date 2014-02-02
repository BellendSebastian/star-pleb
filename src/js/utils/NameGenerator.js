define(function () {
    'use strict';

    function NameGenerator() { }

    NameGenerator.generateStarName = function () {
        var str = 'ST-';
        var rand = Math.ceil(Math.random() * 99999);
        str = str + rand.toString(16);
        return str.toUpperCase();
    };

    NameGenerator.generatePlanetName = function () {
        var str = 'PL-';
        var rand = Math.ceil(Math.random() * 99999);
        str = str + rand.toString(16);
        return str.toUpperCase();
    };

    NameGenerator.generateSatelliteName = function (parent) {
        var str = parent;
        var rand = Math.ceil(Math.random() * 99);
        str = str + '-' + rand.toString(16);
        return str.toUpperCase();
    };

    return NameGenerator;
});
