define([
    'Universe',
    'Galaxy',
    'System',
    'Star',
    'Planet',
    'Satellite',
    'NameGenerator'
], function (
    Universe,
    Galaxy,
    System,
    Star,
    Planet,
    Satellite,
    NameGenerator
) {
    'use strict';

    function LocationFactory() { }

    LocationFactory.generateUniverse = function () {
        var universe = new Universe();
        var minUniverseSize = 10;
        var maxUniverseSize = 20;
        var galaxyCount = Math.floor(Math.random() * (maxUniverseSize - minUniverseSize) + minUniverseSize);
        var galaxies = [];
        for (var i = 0; i < galaxyCount; i++) {
            galaxies[i] = LocationFactory.generateGalaxy();
        }
        universe.setGalaxies(galaxies);
        return universe;
    };

    LocationFactory.generateGalaxy = function () {
        var galaxy = new Galaxy();
        var maxSystems = 10;
        var systemCount = Math.ceil(Math.random() * maxSystems);
        var systems = [];
        for (var i = 0; i < systemCount; i++) {
            systems[i] = LocationFactory.generateSystem();
        }
        galaxy.setSystems(systems);
        return galaxy;
    };

    LocationFactory.generateSystem = function () {
        var system = new System();
        var maxStars = 3;
        var maxPlanets = 9;
        var starCount = Math.ceil(Math.random() * maxStars);
        var planetCount = Math.ceil(Math.random() * maxPlanets);
        var bodies = [];
        for (var i = 0; i < starCount; i++) {
            bodies.push(new Star(NameGenerator.generateStarName()));
        }
        for (var j = 0; j < planetCount; j++) {
            bodies.push(LocationFactory.generatePlanet());
        }
        system.setBodies(bodies);
        return system;
    };

    LocationFactory.generatePlanet = function () {
        var planetName = NameGenerator.generatePlanetName();
        var planet = new Planet(planetName);
        var satelliteCount = Math.floor(Math.random() * 4 - 1);
        var satellites = [];
        for (var i = 0; i < satelliteCount; i++) {
            satellites[i] = new Satellite(NameGenerator.generateSatelliteName(planetName));
        }
        planet.setSatellites(satellites);
        return planet;
    };

    return LocationFactory;
});
