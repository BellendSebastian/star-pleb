define([

], function (

) {
    'use strict';

    function Ship() {
        this.hullType = null;
        this.hull = 0;
        this.shields = [];
        this.weapons = [];
        this.drones = [];
        this.shieldCapacity = 0;
    }

    Ship.prototype.setHullType = function (hullType) {
        this.hullType = hullType;
        this.setHull(hullType.strength);
        return this;
    };

    Ship.prototype.setHull = function (num) {
        this.hull = num;
        return this;
    };

    Ship.prototype.addShield = function (shield) {
        if (this.shields.length >= this.hullType.shieldSlots) { return; }
        this.shields.push(shield);
        this.updateShieldCapacity();
        return this;
    };

    Ship.prototype.addWeapon = function (weapon) {
        if (this.weapons.length >= this.hullType.weaponSlots) { return; }
        this.weapons.push(weapon);
    };

    Ship.prototype.updateShieldCapacity = function () {
        var capacity = 0;
        this.shields.forEach(function (shield) {
            capacity += shield.capacity;
        });
        this.shieldCapacity = capacity;
    };

    return Ship;
});
