function update(){
	lockTextscoreblack.setText([
		ScoreBlack
	])
	lockText4.setText([
		":"
	])
	lockTextscoreblue.setText([
		ScoreBlue
	])
	lockTexttimer.setText([
		Timer
	])
	lockTextbluewin.setText([
		"Blue won"
	])
	lockTextblackwin.setText([
		"Black won"
	])
	lockTexttimerover.setText([
		"Timer over"
	])
	if (Frame = 650000000){lockTexttimerover.setVisible(false)}
	if (Frame = 10000){Timer -= 1}
	if(Timer <= 0){Timerover();}
	if(Down){Downdown2();}
	if(Down2){Downdown();}
	if(Up){Updown2();}
	if(Up2){Updown();}
	if(Left){Leftdown2();}
	if(Left2){Leftdown();}
	if(Right){Rightdown2();}
	if(Right2){Rightdown();}
	if (ScoreBlue >= 5){Bluewin();
		this.input.mouse.releasePointerLock();
	}
	if (ScoreBlack >= 5){Blackwin();
		this.input.mouse.releasePointerLock();
	}
	if(Right && collade1block){colladerightblock1();}
	if(Left && collade1block){colladeleftblock1();}
	if(Down && collade1block){colladedownblock1();}
	if(Up && collade1block){colladeupblock1();}
	if(Right && collade2block){colladerightblock2();}
	if(Left && collade2block){colladeleftblock2();}
	if(Down && collade2block){colladedownblock2();}
	if(Up && collade2block){colladeupblock2();}
	if(Right && collade3block){colladerightblock3();}
	if(Left && collade3block){colladeleftblock3();}
	if(Down && collade3block){colladedownblock3();}
	if(Up && collade3block){colladeupblock3();}
	if(Right && collade4block){colladerightblock4();}
	if(Left && collade4block){colladeleftblock4();}
	if(Down && collade4block){colladedownblock4();}
	if(Up && collade4block){colladeupblock4();}
	if(Right && collade5block){colladerightblock5();}
	if(Left && collade5block){colladeleftblock5();}
	if(Down && collade5block){colladedownblock5();}
	if(Up && collade5block){colladeupblock5();}
	if(Right && collade6block){colladerightblock6();}
	if(Left && collade6block){colladeleftblock6();}
	if(Down && collade6block){colladedownblock6();}
	if(Up && collade6block){colladeupblock6();}
	if(Right && collade7block){colladerightblock7();}
	if(Left && collade7block){colladeleftblock7();}
	if(Down && collade7block){colladedownblock7();}
	if(Up && collade7block){colladeupblock7();}
	if(Right && collade8block){colladerightblock8();}
	if(Left && collade8block){colladeleftblock8();}
	if(Down && collade8block){colladedownblock8();}
	if(Up && collade8block){colladeupblock8();}
	if(Right && collade9block){colladerightblock9();}
	if(Left && collade9block){colladeleftblock9();}
	if(Down && collade9block){colladedownblock9();}
	if(Up && collade9block){colladeupblock9();}
	if(Right && collade10block){colladerightblock10();}
	if(Left && collade10block){colladeleftblock10();}
	if(Down && collade10block){colladedownblock10();}
	if(Up && collade10block){colladeupblock10();}
	if(Right && collade11block){colladerightblock11();}
	if(Left && collade11block){colladeleftblock11();}
	if(Down && collade11block){colladedownblock11();}
	if(Up && collade11block){colladeupblock11();}
	if(Right && collade12block){colladerightblock12();}
	if(Left && collade12block){colladeleftblock12();}
	if(Down && collade12block){colladedownblock12();}
	if(Up && collade12block){colladeupblock12();}
	if(Right2 && collade1block2){colladeright2block1();}
	if(Left2 && collade1block2){colladeleft2block1();}
	if(Down2 && collade1block2){colladedown2block1();}
	if(Up2 && collade1block2){colladeup2block1();}
	if(Right2 && collade2block2){colladeright2block2();}
	if(Left2 && collade2block2){colladeleft2block2();}
	if(Down2 && collade2block2){colladedown2block2();}
	if(Up2 && collade2block2){colladeup2block2();}
	if(Right2 && collade3block2){colladeright2block3();}
	if(Left2 && collade3block2){colladeleft2block3();}
	if(Down2 && collade3block2){colladedown2block3();}
	if(Up2 && collade3block2){colladeup2block3();}
	if(Right2 && collade4block2){colladeright2block4();}
	if(Left2 && collade4block2){colladeleft2block4();}
	if(Down2 && collade4block2){colladedown2block4();}
	if(Up2 && collade4block2){colladeup2block4();}
	if(Right2 && collade5block2){colladeright2block5();}
	if(Left2 && collade5block2){colladeleft2block5();}
	if(Down2 && collade5block2){colladedown2block5();}
	if(Up2 && collade5block2){colladeup2block5();}
	if(Right2 && collade6block2){colladeright2block6();}
	if(Left2 && collade6block2){colladeleft2block6();}
	if(Down2 && collade6block2){colladedown2block6();}
	if(Up2 && collade6block2){colladeup2block6();}
	if(Right2 && collade7block2){colladeright2block7();}
	if(Left2 && collade7block2){colladeleft2block7();}
	if(Down2 && collade7block2){colladedown2block7();}
	if(Up2 && collade7block2){colladeup2block7();}
	if(Right2 && collade8block2){colladeright2block8();}
	if(Left2 && collade8block2){colladeleft2block8();}
	if(Down2 && collade8block2){colladedown2block8();}
	if(Up2 && collade8block2){colladeup2block8();}
	if(Right2 && collade9block2){colladeright2block9();}
	if(Left2 && collade9block2){colladeleft2block9();}
	if(Down2 && collade9block2){colladedown2block9();}
	if(Up2 && collade9block2){colladeup2block9();}
	if(Right2 && collade10block2){colladeright2block10();}
	if(Left2 && collade10block2){colladeleft2block10();}
	if(Down && collade10block2){colladedown2block10();}
	if(Up2 && collade10block2){colladeup2block10();}
	if(Right2 && collade11block2){colladeright2block11();}
	if(Left2 && collade11block2){colladeleft2block11();}
	if(Down2 && collade11block2){colladedown2block11();}
	if(Up2 && collade11block2){colladeup2block11();}
	if(Right2 && collade12block2){colladeright2block12();}
	if(Left2 && collade12block2){colladeleft2block12();}
	if(Down2 && collade12block2){colladedown2block12();}
	if(Up2 && collade12block2){colladeup2block12();}
	if(Frame = 5){collade1block = false}
	if(Frame = 5){collade2block = false}
	if(Frame = 5){collade3block = false}
	if(Frame = 5){collade4block = false}
	if(Frame = 5){collade5block = false}
	if(Frame = 5){collade6block = false}
	if(Frame = 5){collade7block = false}
	if(Frame = 5){collade8block = false}
	if(Frame = 5){collade9block = false}
	if(Frame = 5){collade10block = false}
	if(Frame = 5){collade11block = false}
	if(Frame = 5){collade12block = false}
	if(Frame = 5){collade1block2 = false}
	if(Frame = 5){collade2block2 = false}
	if(Frame = 5){collade3block2 = false}
	if(Frame = 5){collade4block2 = false}
	if(Frame = 5){collade5block2 = false}
	if(Frame = 5){collade6block2 = false}
	if(Frame = 5){collade7block2 = false}
	if(Frame = 5){collade8block2 = false}
	if(Frame = 5){collade9block2 = false}
	if(Frame = 5){collade10block2 = false}
	if(Frame = 5){collade11block2 = false}
    if(Frame = 5){collade12block2 = false}
	barrel.setPosition (image.x, image.y, 0);
	barrel.rotation = Phaser.Math.Angle.Between(barrel.x, barrel.y, sprite.x, sprite.y);
	Frame += 1;
	var right  = config.width - image.width / 5;
	if(image.x == (0 + image.width / 2)){Velocity = 200;}
	if(image.x >= right){Velocity = -300;}
	if(Frame>200&&image.body.velocity.x<-500){Velocity = 200}
	if(Frame>60){Frame=0}
	barrel.setVelocityX(Velocity);
	image.setVelocityX(Velocity);
	if(Frame>600){Spawn -= 5;}
	if(Frame = 5){Velocity = 0}
	var right  = config.width - image2.width / 5;
	if(image2.x == (0 + image2.width / 2)){Velocity2 = 200;}
	if(image2.x >= right){Velocity2 = -300;}
	if(Frame>200&&image2.body.velocity.x<-500){Velocity2 = 200}
	if(Frame>60){Frame=0}
	image2.setVelocityX(Velocity2);
	if(Frame = 5){Velocity2 = 0}
	//if(!Rightdown && !Leftdown){Velocity = 0}
	image.setVelocityY(VelocityUp);
	barrel.setVelocityY(VelocityUp);
	if(Frame = 5){VelocityUp = -0}
	image.setRotation(Rotation);
	image2.setVelocityY(VelocityUp2);
	if(Frame = 5){VelocityUp2 = -0}
	image2.setRotation(Rotation2);
}