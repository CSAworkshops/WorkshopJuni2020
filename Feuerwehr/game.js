var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        // y: 0,
      },
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game;
window.onload = () => game = new Phaser.Game(config);

var hlf;
var missionText;
var hintText;
var targetPosition = 400;
var points = 0;
var missionCompleted = false;
function preload() {
  this.load.spritesheet("firecar", "firecar_sprite.png", {
    frameWidth: 218,
    frameHeight: 66,
  });
}

function create() {
  this.input.on("gameobjectup", (pointer, obj) => {
    obj.emit("clicked", obj);
  });

  let gameObject = this.physics.add.sprite(-218, 200, "firecar");
  let animation = this.anims.create({
    key: "blue",
    frames: this.anims.generateFrameNumbers("firecar", { start: 0, end: 3 }),
    frameRate: 6,
    repeat: -1,
  });
  hlf = new FireTruck(gameObject, animation);

  this.input.keyboard.on("keydown-SPACE", callFireFighters.bind(this));
  missionText = this.add.text(20, 20, "Mission: -", {
    fontSize: "20px",
    fill: "#FFFFFF",
  });
  hintText = this.add.text(50, 300, "", {
    fontSize: "25px",
    fill: "#E72E21",
  });

  pointText = this.add.text(
    20,
    config.height - 20,
    "Punkte: " + points.toString(),
    {
      fontSize: "15px",
      fill: "#FFFFFF",
    }
  );

  this.time.addEvent({
    delay: Phaser.Math.Between(5000, 6000),
    callback: createMission.bind(this),
  });
}

function update() {
  if (hlf.gameObject.x >= targetPosition && !missionCompleted) {
    hlf.stop();
    hintText.text = "Super die Feuerwehr ist da!";
    points += 100;
    missionCompleted = true;
  }

  pointText.text = "Punkte: " + points.toString();
  hlf.update();
}

function createMission(event) {
  missionText.text = "Mission: 🔥 Es brennt! Rufe die Feuerwehr";
  hintText.text = "Drücke die Leertaste um die Feuerwehr zu rufen";
}

function callFireFighters(event) {
  hlf.siren();
  hlf.start();
}
