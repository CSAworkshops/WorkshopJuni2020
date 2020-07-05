let config = {
  type: Phaser.AUTO,
  width: 1490,
  height: 715,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 0,
        x: 0,
      },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: onCreate,
    update: onUpdate,
    extend: {
      player: null,
      healthpoints: null,
      reticle: null,
      moveKeys: null,
      playerBullets: null,
      enemyBullets: null,
      time: 0,
    },
  },
};
var game;
window.onload = () => {
  game = new Phaser.Game(config);
};

function onCreate() {
  create.bind(this)();
}

function onUpdate() {
  update.bind(this)();
}

let image = {};
let image2 = {};
//var barrel = {};
//var bullets = {};
var Velocity = 5;
var Velocity2 = 5;
var Frame = 0;
var Spawn = 400;
var VelocityUp = 0;
var VelocityUp2 = 0;
var Rotation = 0;
var Rotation2 = 0;
var ScoreBlack = 0;
var ScoreBlue = 0;
var Timer = 5000;
var Spawn1x = 200;
var Spawn1y = 0;
var Spawn2x = 1400;
var Spawn2y = 500;
var Spawnpicturex1 = 20;
var Spawnpicturex2 = 1455;
var Spawnpicturey1 = 20;
var Spawnpicturey2 = 685;
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
let point = getRandomStartPoint(0, config.width, 0, config.height, [
  image,
  image2,
  block1,
  block2,
  block3,
  block4,
  block5,
  block6,
  block7,
  block8,
  block9,
  block10,
  block11,
  block12,
]);
var Bullet = new Phaser.Class({
  Extends: Phaser.GameObjects.Image,
  initialize:
    // Bullet Constructor
    function Bullet(scene) {
      Phaser.GameObjects.Image.call(this, scene, 0, 0, "bullet");
      this.speed = 1;
      this.born = 0;
      this.direction = 0;
      this.xSpeed = 0;
      this.ySpeed = 0;
      this.setSize(12, 12, true);
    },
  // Fires a bullet from the player to the reticle
  fire: function (shooter, target) {
    this.setPosition(shooter.x, shooter.y); // Initial position
    this.direction = Math.atan((target.x - this.x) / (target.y - this.y));
    // Calculate X and y velocity of bullet to moves it from shooter to target
    if (target.y >= this.y) {
      this.xSpeed = this.speed * Math.sin(this.direction);
      this.ySpeed = this.speed * Math.cos(this.direction);
    } else {
      this.xSpeed = -this.speed * Math.sin(this.direction);
      this.ySpeed = -this.speed * Math.cos(this.direction);
    }
    this.rotation = shooter.rotation; // angle bullet with shooters rotation
    this.born = 0; // Time since new bullet spawned
  },
  // Updates the position of the bullet each cycle
  update: function (time, delta) {
    this.x += this.xSpeed * delta;
    this.y += this.ySpeed * delta;
    this.born += delta;
    if (this.born > 1800) {
      this.setActive(false);
      this.setVisible(false);
    }
  },
});
function preload() {
  this.load.image("bullet", "bulletSilver_outline_for_Black.png");
  this.load.image("barrel1", "barrelBlack_outline.png");
  this.load.image("crosshair", "crosshair_red_small.png");
  this.load.image("tank1_black", "tankBlack_outline.png");
  this.load.image("tank2_blue", "tankBlue_outline.png");
  this.load.image("Sandbag1", "sandbagBrown.png");
  this.load.image("barrelrustgr1", "barrelGrey_sde_rust.png");
  this.load.image("barrelgreenup", "barrelGreen_up.png");
  this.load.image("tree_s1", "treeSmall.png");
  this.load.image("barrelgrey1", "barrelGrey_side.png");
  this.load.image("barrelred1", "barrelRed_side.png");
  this.load.image("barrelgreendamaged", "barrelGreen_side_damaged.png");
  this.load.image("oil1", "oil.png");
  this.load.image("tree_s2", "treeSmall2.png");
  this.load.image("tree_l1", "treeLarge.png");
  this.load.image("tree_l2", "treeLarge2.png");
  this.load.image("tree_s3", "treeSmall3.png");
  this.load.spritesheet("background", "Plainsfinit.png", {
    frameWidth: 32,
    frameHeight: 32,
  });
}
function getRandomStartPoint(minX, maxX, minY, maxY, spawn) {
  let spawnAreas = [];
  for (let index = 0; index < spawn.length; index++) {
    var spawnArea = spawn[index];
    spawnAreas[index] = new Phaser.Geom.Rectangle(
      spawnArea.x,
      spawnArea.y,
      spawnArea.width,
      spawnArea.height
    );
  }
  let x = 0;
  let y = 0;
  do {
    x = Phaser.Math.Between(minX, maxX);
    y = Phaser.Math.Between(minY, maxY);
  } while (pointIsInArea(spawnAreas, x, y));

  return { x: x, y: y };
}

function pointIsInArea(areas, x, y) {
  for (let index = 0; index < areas.length; index++) {
    if (areas[index].contains(x, y)) return true;
  }
  return false;
}

function updateLockText(isLocked) {
  lockText.setText([
    "Press R to release pointer lock.",
    //"Press M for single Device Multiplayer."
  ]);
}
function updateLockText2(isLocked) {
  lockText2.setText(["Pre-Access", "Version: 0.79.74.3"]);
}
function enemyHitCallback(tank, bullet) {
  ScoreBlack += 1;
  image.setPosition(Spawn1x, Spawn1y);
  image2.setPosition(Spawn2x, Spawn2y);
  bullet.destroy();
}

function Timerover() {
  Timer = 5000;
  ScoreBlue += 1;
  image.setPosition(Spawn1x, Spawn1y);
  image2.setPosition(Spawn2x, Spawn2y);
  lockTexttimerover.setVisible(true);
}
function Bluewin() {
  lockTextbluewin.setVisible(true);
  lockText4.setVisible(false);
  lockTextscoreblue.setVisible(false);
  lockTextscoreblack.setVisible(false);
  lockTexttimer.setVisible(false);
  Timer = 12510;
  //image.setVisible(false)
  image2.setVisible(false);
  //sprite.setVisible(false)
  barrel.setVisible(false);
  //sprite.setActive(false)
  bullet.setVisible(false);
  sprite.destroy();
  image.destroy();
}
function Blackwin() {
  lockTextblackwin.setVisible(true);
  lockText4.setVisible(false);
  lockTextscoreblue.setVisible(false);
  lockTextscoreblack.setVisible(false);
  lockTexttimer.setVisible(false);
  Timer = 12510;
  image.setVisible(false);
  image2.setVisible(false);
  //sprite.setVisible(false)
  barrel.setVisible(false);
  bullet.setVisible(false);
  sprite.destroy();
  //releasePointerLock (event);
  //sprite.isLocked(true)
}
function Leftdown() {
  Velocity = -150;
  Rotation = -32.98673;
}
function Rightdown() {
  Velocity = 150;
  Rotation = 32.98673;
}
function Updown() {
  VelocityUp = -150;
  Rotation = 0;
}
function Downdown() {
  VelocityUp = 150;
  Rotation = 65.97346;
}
function Leftdown2() {
  Velocity2 = -150;
  Rotation2 = -32.98673;
}
function Rightdown2() {
  Velocity2 = 150;
  Rotation2 = 32.98673;
}
function Updown2() {
  VelocityUp2 = -150;
  Rotation2 = 0;
}
function Downdown2() {
  VelocityUp2 = 150;
  Rotation2 = 65.97346;
}
function onevent(event) {
  if (event.key == "s") {
    Downdown();
  }
  if (event.key == "w") {
    Updown();
  }
  if (event.key == "a") {
    Leftdown();
  }
  if (event.key == "d") {
    Rightdown();
  }
  if (event.key == "ArrowDown") {
    Downdown2();
  }
  if (event.key == "ArrowUp") {
    Updown2();
  }
  if (event.key == "ArrowLeft") {
    Leftdown2();
  }
  if (event.key == "ArrowRight") {
    Rightdown2();
  }
}
