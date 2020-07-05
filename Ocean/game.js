var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {},
},
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);
var keyW;
var keyA;
var keyS;
var keyD;
var player;
var speed;
var trash = []
var trashNumber = 10;
// var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });


function preload() {
  this.load.image("player", "assets/placeholder1.png");
  this.load.spritesheet("trash", "assets/trashSheet.png",{
    frameWidth : 128,
    frameHeight : 128,
  });
  // this.load.image("player2", "assets/placeholder2.png");
  this.load.spritesheet("playerSheet", "assets/placeholderSheet.png",{
    frameWidth : 359,
    frameHeight : 602,
  });
  keyW = this.input.keyboard.addKey('W');
  keyA = this.input.keyboard.addKey('A');
  keyS = this.input.keyboard.addKey('S');
  keyD = this.input.keyboard.addKey('D');
  speed = 100;
  // game.load.image("player", "assets/pl")
  
}

function create() {
  for(var i = 0; i < trashNumber; i++){
    trash.push(this.physics.add.image(Phaser.Math.Between(0, 800), Phaser.Math.Between(0, -664), "trash"))
    trash[i].setFrame(Phaser.Math.Between(0, 4));
    trash[i].scale = .5;
    trash[i].setInteractive();
    trash[i].on('clicked', clickHandler, this)
    trash[i].setVelocityY(50);
  }
  player = this.physics.add.image(200, 200, "playerSheet");
  for(var i = 0; i < trash.length; i++){
    trash[i].inputEnabled = true;
  }

  this.input.on('gameobjectup', function (pointer, gameObject)
    {
        gameObject.emit('clicked', gameObject);
    }, this);

  //player.addFrame("player2", "assets/placeholder2.png");
  
  player.scale = 0.2;
}

function update() {
  if(keyW.isDown){
    player.setVelocityY(-speed);
    player.setFrame(2);
    player.scale = 0.2
  }
  if(keyA.isDown){
    player.setVelocityX(-speed);
    player.setFrame(1);
    player.scale = 0.2
  }
  if(keyS.isDown){
    player.setVelocityY(speed);
    player.setFrame(0);
    player.scale = 0.2
  }
  if(keyD.isDown){
    player.setVelocityX(speed);
    player.setFrame(1);
    player.scaleX = -0.2

  }
  if(keyW.isUp && keyS.isUp){
    player.setVelocityY(0);  
  }
  if(keyA.isUp && keyD.isUp){
    player.setVelocityX(0);
  }
  for(var i = 0; i < trash.length; i++){
    if(trash[i].y >= 664){
      // trash[i].y = Phaser.Math.Between(-(128/2), -128);
      trash[i].y = -64;
      trash[i].x = Phaser.Math.Between(0, 800)
      trash[i].setFrame(Phaser.Math.Between(0, 4));
    }
  }
}

function clickHandler(object){
  // object.setVisible(false);
  if(trash.includes(object)){
    //object.setVisible(false);
    object.y = Phaser.Math.Between(-(128/2), -664);
    object.setFrame(Phaser.Math.Between(0, 4));
  }
}

function randomiseTrash(min, max){
  for(var i = 0; i < trash.length; i++){
    trash[i].y = Phaser.Math.Between(-(128/2), -664);
    trash[i].x = Phaser.Math.Between(0, 800)
    trash[i].setFrame(Phaser.Math.Between(0, 4));
  }
}
