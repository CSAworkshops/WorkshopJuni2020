class FireTruck {
  gameObject = {};
  animation = {};
  speedSteps = 120;
  start = () => {
    this.gameObject.setVelocityX(this.speedSteps);
  };
  stop = () => {
    this.gameObject.setVelocityX(0);
  };

  siren = () => {
    if (this.gameObject.anims.isPlaying) {
      this.gameObject.anims.stopOnFrame(this.animation.getFrameAt(0));
    } else {
      this.gameObject.anims.play("blue", true, 0);
    }
  };

  update = () => {};

  onClick = (truck) => this.siren();

  constructor(obj, anim) {
    this.gameObject = obj;
    this.animation = anim;

    this.gameObject.setInteractive();
    this.gameObject.on("clicked", this.onClick, this);
  }
}
