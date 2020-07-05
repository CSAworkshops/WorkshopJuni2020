var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var totalRounds = 5;
var roundNumber = 0;
var inc = 1;
var voters = 0;
var voteDiff;
var events = [
  "Public Speech",
  "Public Affair",
  "Fake News Spreading",
  "Television Debate",
];
var currentEvent;
var hintText;
var game = new Phaser.Game(config);

function preload() {}

function create() {}

function update() {
  round.bind(this)();
}

function round() {
  if ((roundNumber != inc) & (roundNumber <= totalRounds)) {
    roundNumber++;
    var thisEvent = Phaser.Math.Between(0, 3);
    currentEvent = this.add.text(10, 10, events[thisEvent], {
      fontSize: "20px",
      fill: "#FFFFFF",
    });
    hintText = this.add.text(
      50,
      50,
      "Press Enter to continue to the next phase.",
      {
        fontSize: "20px",
        fill: "#FFFFFF",
      }
    );
    var enter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );
    enter.on("down", function (key, event) {
      inc++;
    });
  } else if (roundNumber > totalRounds) {
    hintText = this.add.text(
      50,
      50,
      "It's Voting Day! Let's see the results.",
      {
        fontSize: "20px",
        fill: "#FFFFFF",
      }
    );
  }
}
