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