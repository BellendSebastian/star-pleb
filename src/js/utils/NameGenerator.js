define(function () {
    'use strict';

    function NameGenerator() { }

    NameGenerator.ongoingCount = 100000;

    NameGenerator.generateStarName = function () {
        var str = 'ST-';
        var rand = NameGenerator.ongoingCount;
        str = str + rand.toString(16);
        NameGenerator.ongoingCount++;
        return str.toUpperCase();
    };

    NameGenerator.generatePlanetName = function () {
        var str = 'AB-';
        var rand = NameGenerator.ongoingCount;
        str = str + rand.toString(16);
        NameGenerator.ongoingCount++;
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
