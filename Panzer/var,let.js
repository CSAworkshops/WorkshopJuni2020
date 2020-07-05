let image = {};
let image2 = {};
//var barrel = {};
//var bullets = {};
var Velocity = 5
var Velocity2 = 5
var Frame = 0;
var Spawn = 400;
var VelocityUp = 0
var VelocityUp2 = 0
var Rotation = 0
var Rotation2 = 0
var ScoreBlack = 0
var ScoreBlue = 0
var Timer = 5000
var Spawn1x = 200
var Spawn1y = 0
var Spawn2x = 1400
var Spawn2y = 500
var Spawnpicturex1 = 20
var Spawnpicturex2 = 1455
var Spawnpicturey1 = 20
var Spawnpicturey2 = 685
let block1 = {};
let block2 = {};
let block3 = {};
let block4 = {};
let block5 = {};
let block6 = {};
let block7 = {};
let block8 = {};
let block9 = {};
let block10 = {};
let block11 = {};
let block12 = {};
var sprite;
var lockText;
var Down2 = false;
var Down = false;
var Up = false;
var Up2 = false;
var Left = false;
var Left2 = false;
var Right = false;
var Right2 = false;
var collade1block = false;
var collade2block = false;
var collade3block = false;
var collade4block = false;
var collade5block = false;
var collade6block = false;
var collade7block = false;
var collade8block = false;
var collade9block = false;
var collade10block = false;
var collade11block = false;
var collade12block = false;
var collade1block2 = false;
var collade2block2 = false;
var collade3block2 = false;
var collade4block2 = false;
var collade5block2 = false;
var collade6block2 = false;
var collade7block2 = false;
var collade8block2 = false;
var collade9block2 = false;
var collade10block2 = false;
var collade11block2 = false;
var collade12block2 = false;
var bullet;
var releasePointerLock;
var Bullet = new Phaser.Class({

    Extends: Phaser.GameObjects.Image,

    initialize:

    // Bullet Constructor
    function Bullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bullet');
        this.speed = 1;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan( (target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = shooter.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }

});