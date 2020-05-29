/* 
character 
prototype default values 
speed : 6
strength : 8
hitpoints : 150 
method to determine damage per sec and returns it => speed * strength 
*/

// CLASS DEF
class Character {
    constructor(speed = 6, strength = 8, hitpoints = 150) {
        this.speed = speed;
        this.strength = strength;
        this.hitpoints = hitpoints;
    }
    damageSec() {
        console.log("Damage per sec is" + this.speed * this.strength);
        return this.speed * this.strength;
    }
}

var newCharacter = new Character(
    (speed = 10),
    this.strength,
    (hitpoints = 130)
);

// OTHER CLASS DEF

class Game {
    constructor(speed, strength, hitpoints) {
        if (speed) {
            this.speed = speed;
        }

        if (strength) {
            this.strength = strength;
        }

        if (hitpoints) {
            this.hitpoints = hitpoints;
        }
    }
    dam() {
        console.log("Damage per sec is" + this.speed * this.strength);
        return this.speed * this.strength;
    }
}
Game.prototype.speed = 6;
Game.prototype.strength = 8;
Game.prototype.hitpoints = 150;
var dingo = new Game(12, null, 120);

// FUNCTION

function Person(speed, strength, hitpoints) {
    if (speed) {
        this.speed = speed;
    }

    if (strength) {
        this.strength = strength;
    }

    if (hitpoints) {
        this.hitpoints = hitpoints;
    }
}

Person.prototype.speed = 6;
Person.prototype.strength = 8;
Person.prototype.hitpoints = 150;
Person.prototype.damage = function () {
    console.log("Damage per sec is " + this.speed * this.strength);
    return this.speed * this.strength;
};

var goblin = new Person(10, null, 130);

// OBJECT.CREATE()

var gameCharacter = {
    spe: 6,
    str: 8,
    hitp: 150,
    damagePerSec: function () {
        console.log(this.spe * this.str);
        return this.spe * this.str;
    },
};

var char1 = Object.create(gameCharacter);
char1.spe = 9;
char1.hitp = 200;
