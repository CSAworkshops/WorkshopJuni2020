function create(){
	//this.input.keyboard.on("keydown", onevent);
	this.input.keyboard.on("keydown_S",()=>Down = true);
	this.input.keyboard.on("keydown_DOWN",()=>Down2 = true);
	this.input.keyboard.on("keyup_S",()=>Down = false);
	this.input.keyboard.on("keyup_DOWN",()=>Down2 = false);
	this.input.keyboard.on("keydown_W",()=>Up = true);
	this.input.keyboard.on("keydown_UP",()=>Up2 = true);
	this.input.keyboard.on("keyup_W",()=>Up = false);
	this.input.keyboard.on("keyup_UP",()=>Up2 = false);
	this.input.keyboard.on("keydown_A",()=>Left = true);
	this.input.keyboard.on("keydown_LEFT",()=>Left2 = true);
	this.input.keyboard.on("keyup_A",()=>Left = false);
	this.input.keyboard.on("keyup_LEFT",()=>Left2 = false);
	this.input.keyboard.on("keydown_D",()=>Right = true);
	this.input.keyboard.on("keydown_RIGHT",()=>Right2 = true);
	this.input.keyboard.on("keyup_D",()=>Right = false);
	this.input.keyboard.on("keyup_RIGHT",()=>Right2 = false);
	let group = this.make.group({
        key: "background",
        frame: Phaser.Utils.Array.NumberArray(0, 4500),
        randomFrame: true,
        gridAlign: {
            x: 1,
            y: 1,
            width: 100,
            height: 90,
            cellWidth: 20,
            cellHeight: 20
        }
    });
    let spawnPoints = [image, image2];
    let point = getRandomStartPoint(0, config.width, 0, config.height, spawnPoints);
    block1 = this.physics.add.staticImage(point.x, point.y, "Sandbag1");
    spawnPoints.push(block1);
    point = getRandomStartPoint(0, config.width, 0, config.height, spawnPoints);
    block2 = this.physics.add.staticImage(point.x, point.y, "barrelrustgr1");
    spawnPoints.push(block2);
    point = getRandomStartPoint(0, config.width, 0, config.height, spawnPoints);
	block3 = this.physics.add.staticImage(point.x, point.y, "barrelgreenup");
	spawnPoints.push(block3);
	point = getRandomStartPoint(0, config.width, 0, config.height, spawnPoints);
	block5 = this.physics.add.staticImage(point.x, point.y, "barrelgrey1");
	spawnPoints.push(block5);
	point = getRandomStartPoint(0, config.width, 0, config.height, spawnPoints);
	block6 = this.physics.add.staticImage(point.x, point.y, "barrelred1");
	spawnPoints.push(block6);
	point = getRandomStartPoint(0, config.width, 0, config.height, spawnPoints);
	block7 = this.physics.add.staticImage(point.x, point.y, "barrelgreendamaged");
	spawnPoints.push(block7);
	point = getRandomStartPoint(0, config.width, 0, config.height, spawnPoints);
	block8 = this.physics.add.staticImage(point.x, point.y, "oil1");
	spawnPoints.push(block8);
	this.physics.world.setBounds(0, 0, 1492.5, 714.5);
	image = this.physics.add.sprite(Spawn1x, Spawn1y, "tank1_black");
	image2 = this.physics.add.sprite(Spawn2x, Spawn2y, "tank2_blue");
	playerBullets = this.physics.add.group({ classType: Bullet, runChildUpdate: true });
	barrel = this.physics.add.sprite(image.x, image.y, "barrel1");
	//barrel.anchor.set(0.5);
	//barrel.body.allowRotation = false;
	point = getRandomStartPoint(0, config.width, 0, config.height, spawnPoints);
	block10 = this.physics.add.staticImage(point.x, point.y, "tree_l1");
	spawnPoints.push(block10);
	point = getRandomStartPoint(0, config.width, 0, config.height, spawnPoints);
	block9 = this.physics.add.staticImage(point.x, point.y, "tree_s2");
	spawnPoints.push(block9);
	point = getRandomStartPoint(0, config.width, 0, config.height, spawnPoints);
	block4 = this.physics.add.staticImage(point.x, point.y, "tree_s1");
	spawnPoints.push(block4);
	point = getRandomStartPoint(0, config.width, 0, config.height, spawnPoints);
	block11 = this.physics.add.staticImage(point.x, point.y, "tree_s3");
	spawnPoints.push(block11);
	point = getRandomStartPoint(0, config.width, 0, config.height, spawnPoints);
	block12 = this.physics.add.staticImage(point.x, point.y, "tree_l2");
	spawnPoints.push(block12);
	sprite = this.add.sprite(400, 300, "crosshair");
	this.input.on("pointerdown", function (pointer) {
        this.input.mouse.requestPointerLock();
    }, this);
	this.input.on("pointermove", function (pointer) {
        if (this.input.mouse.locked)
        {
            sprite.x += pointer.movementX;
            sprite.y += pointer.movementY;
            // Force the sprite to stay on screen
            sprite.x = Phaser.Math.Wrap(sprite.x, 0, game.renderer.width);
            sprite.y = Phaser.Math.Wrap(sprite.y, 0, game.renderer.height);
            if (pointer.movementX > 0) { sprite.setRotation(0); }
            else if (pointer.movementX < 0) { sprite.setRotation(0); }
            else { sprite.setRotation(0); }
			updateLockText(true);
			updateLockText2(true);
        }
	}, this);
	this.input.keyboard.on("keydown_R", function (event) {
        if (this.input.mouse.locked)
        {
            this.input.mouse.releasePointerLock();
        }
	}, this);
	this.input.on("pointerlockchange", function (event) {
        console.log(event);
        updateLockText(event.isPointerLocked, sprite.x, sprite.y);
    }, this);
	this.input.on("pointerlockchange", function (event) {
        console.log(event);
        updateLockText2(event.isPointerLocked, sprite.x, sprite.y);
	}, this);
    lockText = this.add.text(550, 7, '', {
        fontSize: '25px',
        fill: '#ffffff'
	});
	lockText2 = this.add.text(16, 10, '', {
        fontSize: '12px',
        fill: '#d7223b'
	});
	lockTextscoreblack = this.add.text(265, 5, '', {
        fontSize: '50px',
        fill: '#ffffff',
	});
	lockText4 = this.add.text(282, 3, '', {
        fontSize: '50px',
        fill: '#ffffff',
	});
	lockTextscoreblue = this.add.text(299, 5, '', {
        fontSize: '50px',
        fill: '#ffffff',
	});
	lockTexttimer = this.add.text(1100, 5, '', {
        fontSize: '35px',
        fill: '#ffffff',
	});
	lockTextbluewin = this.add.text(600, 200.5, '', {
        fontSize: '65px',
        fill: '#ffffff',
	});
	lockTextblackwin = this.add.text(600, 200.5, '', {
        fontSize: '65px',
        fill: '#ffffff',
	});
	lockTexttimerover = this.add.text(600, 200.5, '', {
        fontSize: '65px',
        fill: '#ffffff',
	});
	this.input.on('pointerdown', function (pointer, time, lastFired) {
        if (Image.active === false)
            return;
        // Get bullet from bullets group
        bullet = playerBullets.get().setActive(true).setVisible(true);

        if (bullet)
        {
            bullet.fire(image, sprite);
            this.physics.add.collider(image2, bullet, enemyHitCallback);
        }
	}, this);
	lockTextbluewin.setVisible(false)
	lockTextblackwin.setVisible(false)
	lockTexttimerover.setVisible(false)
	updateLockText(false);
	updateLockText2(false);
	image.setScale(0.75)
	image.setCollideWorldBounds(true);
	image.setBounce(false);
	image.setGravity(false);
	image2.setScale(0.75)
	image2.setCollideWorldBounds(true);
	image2.setBounce(false);
	image2.setGravity(false);
	makecollider.bind(this)();
}