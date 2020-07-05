function makecollider (){
    this.physics.add.collider(image, block1, colladeblock1);
	this.physics.add.collider(image, block2, colladeblock2);
	this.physics.add.collider(image, block3, colladeblock3);
	//this.physics.add.collider(image, block4, colladeblock4);
	this.physics.add.collider(image, block5, colladeblock5);
	this.physics.add.collider(image, block6, colladeblock6);
	this.physics.add.collider(image, block7, colladeblock7);
	this.physics.add.collider(image, block8, colladeblock8);
	//this.physics.add.collider(image, block9, colladeblock9);
	//this.physics.add.collider(image, block10, colladeblock10);
	//this.physics.add.collider(image, block11, colladeblock11);
	//this.physics.add.collider(image, block12, colladeblock12);
	this.physics.add.collider(image2, block1, colladeblock102);
	this.physics.add.collider(image2, block2, colladeblock202);
	this.physics.add.collider(image2, block3, colladeblock302);
	//this.physics.add.collider(image2, block4, colladeblock4,2);
	this.physics.add.collider(image2, block5, colladeblock502);
	this.physics.add.collider(image2, block6, colladeblock602);
	this.physics.add.collider(image2, block7, colladeblock702);
	this.physics.add.collider(image2, block8, colladeblock802);
	//this.physics.add.collider(image2, block9, colladeblock902);
	//this.physics.add.collider(image2, block10, colladeblock1002);
	//this.physics.add.collider(image2, block11, colladeblock1102);
	//this.physics.add.collider(image2, block12, colladeblock1202);
    this.physics.add.collider(image, image2, colladetanks1);
}
//
//function ifcollider () {
//    if(Right && collade1block){colladerightblock1();}
//	if(Left && collade1block){colladeleftblock1();}
//	if(Down && collade1block){colladedownblock1();}
//	if(Up && collade1block){colladeupblock1();}
//	if(Right && collade2block){colladerightblock2();}
//	if(Left && collade2block){colladeleftblock2();}
//	if(Down && collade2block){colladedownblock2();}
//	if(Up && collade2block){colladeupblock2();}
//	if(Right && collade3block){colladerightblock3();}
//	if(Left && collade3block){colladeleftblock3();}
//	if(Down && collade3block){colladedownblock3();}
//	if(Up && collade3block){colladeupblock3();}
//	if(Right && collade4block){colladerightblock4();}
//	if(Left && collade4block){colladeleftblock4();}
//	if(Down && collade4block){colladedownblock4();}
//	if(Up && collade4block){colladeupblock4();}
//	if(Right && collade5block){colladerightblock5();}
//	if(Left && collade5block){colladeleftblock5();}
//	if(Down && collade5block){colladedownblock5();}
//	if(Up && collade5block){colladeupblock5();}
//	if(Right && collade6block){colladerightblock6();}
//	if(Left && collade6block){colladeleftblock6();}
//	if(Down && collade6block){colladedownblock6();}
//	if(Up && collade6block){colladeupblock6();}
//	if(Right && collade7block){colladerightblock7();}
//	if(Left && collade7block){colladeleftblock7();}
//	if(Down && collade7block){colladedownblock7();}
//	if(Up && collade7block){colladeupblock7();}
//	if(Right && collade8block){colladerightblock8();}
//	if(Left && collade8block){colladeleftblock8();}
//	if(Down && collade8block){colladedownblock8();}
//	if(Up && collade8block){colladeupblock8();}
//	if(Right && collade9block){colladerightblock9();}
//	if(Left && collade9block){colladeleftblock9();}
//	if(Down && collade9block){colladedownblock9();}
//	if(Up && collade9block){colladeupblock9();}
//	if(Right && collade10block){colladerightblock10();}
//	if(Left && collade10block){colladeleftblock10();}
//	if(Down && collade10block){colladedownblock10();}
//	if(Up && collade10block){colladeupblock10();}
//	if(Right && collade11block){colladerightblock11();}
//	if(Left && collade11block){colladeleftblock11();}
//	if(Down && collade11block){colladedownblock11();}
//	if(Up && collade11block){colladeupblock11();}
//	if(Right && collade12block){colladerightblock12();}
//	if(Left && collade12block){colladeleftblock12();}
//	if(Down && collade12block){colladedownblock12();}
//	if(Up && collade12block){colladeupblock12();}
//	if(Right2 && collade1block2){colladeright2block1();}
//	if(Left2 && collade1block2){colladeleft2block1();}
//	if(Down2 && collade1block2){colladedown2block1();}
//	if(Up2 && collade1block2){colladeup2block1();}
//	if(Right2 && collade2block2){colladeright2block2();}
//	if(Left2 && collade2block2){colladeleft2block2();}
//	if(Down2 && collade2block2){colladedown2block2();}
//	if(Up2 && collade2block2){colladeup2block2();}
//	if(Right2 && collade3block2){colladeright2block3();}
//	if(Left2 && collade3block2){colladeleft2block3();}
//	if(Down2 && collade3block2){colladedown2block3();}
//	if(Up2 && collade3block2){colladeup2block3();}
//	if(Right2 && collade4block2){colladeright2block4();}
//	if(Left2 && collade4block2){colladeleft2block4();}
//	if(Down2 && collade4block2){colladedown2block4();}
//	if(Up2 && collade4block2){colladeup2block4();}
//	if(Right2 && collade5block2){colladeright2block5();}
//	if(Left2 && collade5block2){colladeleft2block5();}
//	if(Down2 && collade5block2){colladedown2block5();}
//	if(Up2 && collade5block2){colladeup2block5();}
//	if(Right2 && collade6block2){colladeright2block6();}
//	if(Left2 && collade6block2){colladeleft2block6();}
//	if(Down2 && collade6block2){colladedown2block6();}
//	if(Up2 && collade6block2){colladeup2block6();}
//	if(Right2 && collade7block2){colladeright2block7();}
//	if(Left2 && collade7block2){colladeleft2block7();}
//	if(Down2 && collade7block2){colladedown2block7();}
//	if(Up2 && collade7block2){colladeup2block7();}
//	if(Right2 && collade8block2){colladeright2block8();}
//	if(Left2 && collade8block2){colladeleft2block8();}
//	if(Down2 && collade8block2){colladedown2block8();}
//	if(Up2 && collade8block2){colladeup2block8();}
//	if(Right2 && collade9block2){colladeright2block9();}
//	if(Left2 && collade9block2){colladeleft2block9();}
//	if(Down2 && collade9block2){colladedown2block9();}
//	if(Up2 && collade9block2){colladeup2block9();}
//	if(Right2 && collade10block2){colladeright2block10();}
//	if(Left2 && collade10block2){colladeleft2block10();}
//	if(Down && collade10block2){colladedown2block10();}
//	if(Up2 && collade10block2){colladeup2block10();}
//	if(Right2 && collade11block2){colladeright2block11();}
//	if(Left2 && collade11block2){colladeleft2block11();}
//	if(Down2 && collade11block2){colladedown2block11();}
//	if(Up2 && collade11block2){colladeup2block11();}
//	if(Right2 && collade12block2){colladeright2block12();}
//	if(Left2 && collade12block2){colladeleft2block12();}
//	if(Down2 && collade12block2){colladedown2block12();}
 //   if(Up2 && collade12block2){colladeup2block12();}
//}
//function colliderfalse () {
 //if(Frame = 5){collade3block = false}
	//if(Frame = 5){collade4block = false}
	//if(Frame = 5){collade5block = false}
	//if(Frame = 5){collade6block = false}
//if(Frame = 5){collade7block = false}
//if(Frame = 5){collade8block = false}
//if(Frame = 5){collade9block = false}
//if(Frame = 5){collade10block = false}
//if(Frame = 5){collade11block = false}
//if(Frame = 5){collade12block = false}
//if(Frame = 5){collade1block2 = false}
//if(Frame = 5){collade1block2 = false}
//	if(Frame = 5){collade2block2 = false}
//	if(Frame = 5){collade3block2 = false}
//	if(Frame = 5){collade4block2 = false}
//	if(Frame = 5){collade5block2 = false}
//	if(Frame = 5){collade6block2 = false}
//	if(Frame = 5){collade7block2 = false}
//	if(Frame = 5){collade8block2 = false}
//	if(Frame = 5){collade9block2 = false}
//	if(Frame = 5){collade10block2 = false}
//	if(Frame = 5){collade11block2 = false}
 //   if(Frame = 5){collade12block2 = false}
//}
    function colladerightblock1(){
        Velocity = 0
    }
    function colladeleftblock1(){
        Velocity = 0
    }
    function colladedownblock1(){
        VelocityUp = 0
    }
    function colladeupblock1(){
        VelocityUp = 0
    }
    function colladerightblock2(){
        Velocity = 0
    }
    function colladeleftblock2(){
        Velocity = 0
    }
    function colladedownblock2(){
        VelocityUp = 0
    }
    function colladeupblock2(){
        VelocityUp = 0
    }
    function colladerightblock3(){
        Velocity = 0
    }
    function colladeleftblock3(){
        Velocity = 0
    }
    function colladedownblock3(){
        VelocityUp = 0
    }
    function colladeupblock3(){
        VelocityUp = 0
    }
    function colladerightblock4(){
        Velocity = 0
    }
    function colladeleftblock4(){
        Velocity = 0
    }
    function colladedownblock4(){
        VelocityUp = 0
    }
    function colladeupblock4(){
        VelocityUp = 0
    }
    function colladerightblock5(){
        Velocity = 0
    }
    function colladeleftblock5(){
        Velocity = 0
    }
    function colladedownblock5(){
        VelocityUp = 0
    }
    function colladeupblock5(){
        VelocityUp = 0
    }
    function colladerightblock6(){
        Velocity = 0
    }
    function colladeleftblock6(){
        Velocity = 0
    }
    function colladedownblock6(){
        VelocityUp = 0
    }
    function colladeupblock6(){
        VelocityUp = 0
    }
    function colladerightblock7(){
        Velocity = 0
    }
    function colladeleftblock7(){
        Velocity = 0
    }
    function colladedownblock7(){
        VelocityUp = 0
    }
    function colladeupblock7(){
        VelocityUp = 0
    }
    function colladerightblock8(){
        Velocity = 0
    }
    function colladeleftblock8(){
        Velocity = 0
    }
    function colladedownblock8(){
        VelocityUp = 0
    }
    function colladeupblock8(){
        VelocityUp = 0
    }
    function colladerightblock9(){
        Velocity = 0
    }
    function colladeleftblock9(){
        Velocity = 0
    }
    function colladedownblock9(){
        VelocityUp = 0
    }
    function colladeupblock9(){
        VelocityUp = 0
    }
    function colladerightblock10(){
        Velocity = 0
    }
    function colladeleftblock10(){
        Velocity = 0
    }
    function colladedownblock10(){
        VelocityUp = 0
    }
    function colladeupblock10(){
        VelocityUp = 0
    }
    function colladerightblock11(){
        Velocity = 0
    }
    function colladeleftblock11(){
        Velocity = 0
    }
    function colladedownblock11(){
        VelocityUp = 0
    }
    function colladeupblock11(){
        VelocityUp = 0
    }
    function colladerightblock12(){
        Velocity = 0
    }
    function colladeleftblock12(){
        Velocity = 0
    }
    function colladedownblock12(){
        VelocityUp = 0
    }
    function colladeupblock12(){
        VelocityUp = 0
    }
    function colladeright2block1(){
        Velocity2 = 0
    }
    function colladeleft2block1(){
        Velocity2 = 0
    }
    function colladedown2block1(){
        VelocityUp2 = 0
    }
    function colladeup2block1(){
        VelocityUp2 = 0
    }
    function colladeright2block2(){
        Velocity2 = 0
    }
    function colladeleft2block2(){
        Velocity2 = 0
    }
    function colladedown2block2(){
        VelocityUp2 = 0
    }
    function colladeup2block2(){
        VelocityUp2 = 0
    }
    function colladeright2block3(){
        Velocity2 = 0
    }
    function colladeleft2block3(){
        Velocity2 = 0
    }
    function colladedown2block3(){
        VelocityUp2 = 0
    }
    function colladeup2block3(){
        VelocityUp2 = 0
    }
    function colladeright2block4(){
        Velocity2 = 0
    }
    function colladeleft2block4(){
        Velocity2 = 0
    }
    function colladedown2block4(){
        VelocityUp2 = 0
    }
    function colladeup2block4(){
        VelocityUp2 = 0
    }
    function colladeright2block5(){
        Velocity2 = 0
    }
    function colladeleft2block5(){
        Velocity2 = 0
    }
    function colladedown2block5(){
        VelocityUp2 = 0
    }
    function colladeup2block5(){
        VelocityUp2 = 0
    }
    function colladeright2block6(){
        Velocity2 = 0
    }
    function colladeleft2block6(){
        Velocity2 = 0
    }
    function colladedown2block6(){
        VelocityUp2 = 0
    }
    function colladeup2block6(){
        VelocityUp2 = 0
    }
    function colladeright2block7(){
        Velocity2 = 0
    }
    function colladeleft2block7(){
        Velocity2 = 0
    }
    function colladedown2block7(){
        VelocityUp2 = 0
    }
    function colladeup2block7(){
        VelocityUp2 = 0
    }
    function colladeright2block8(){
        Velocity2 = 0
    }
    function colladeleft2block8(){
        Velocity2 = 0
    }
    function colladedown2block8(){
        VelocityUp2 = 0
    }
    function colladeup2block8(){
        VelocityUp2 = 0
    }
    function colladeright2block9(){
        Velocity2 = 0
    }
    function colladeleft2block9(){
        Velocity2 = 0
    }
    function colladedown2block9(){
        VelocityUp2 = 0
    }
    function colladeup2block9(){
        VelocityUp2 = 0
    }
    function colladeright2block10(){
        Velocity2 = 0
    }
    function colladeleft2block10(){
        Velocity2 = 0
    }
    function colladedown2block10(){
        VelocityUp2 = 0
    }
    function colladeup2block10(){
        VelocityUp2 = 0
    }
    function colladeright2block11(){
        Velocity2 = 0
    }
    function colladeleft2block11(){
        Velocity2 = 0
    }
    function colladedown2block11(){
        VelocityUp2 = 0
    }
    function colladeup2block11(){
        VelocityUp2 = 0
    }
    function colladeright2block12(){
        Velocity2 = 0
    }
    function colladeleft2block12(){
        Velocity2 = 0
    }
    function colladedown2block12(){
        VelocityUp2 = 0
    }
    function colladeup2block12(){
        VelocityUp2 = 0
    }
    function colladeblock1(image,block1){
        //Velocity = -601
        //VelocityUp = -601
        collade1block = true
        //collade1block = false
    }
    function colladeblock2(image,block2){
        //Velocity = -601
        //VelocityUp = -601
        collade2block = true
    }
    function colladeblock3(image,block3){
        //Velocity = -601
        //VelocityUp = -601
        collade3block = true
    }
    //function colladeblock4(image,block4){
    //	Velocity = -601
    //VelocityUp = -601
    //collade4block = true
    //}
    function colladeblock5(image,block5){
        //Velocity = -601
        //VelocityUp = -601
        collade5block = true
    }
    function colladeblock6(image,block6){
        //Velocity = -601
        //VelocityUp = -601
        collade6block = true
    }
    function colladeblock7(image,block7){
        //Velocity = -601
        //VelocityUp = -601
        collade7block = true
    }
    function colladeblock8(image,block8){
        //Velocity = -601
        //VelocityUp = -601
        collade8block = true
    }
    //function colladeblock9(image,block9){
    //	Velocity = -601
    //VelocityUp = -601
    //collade9block = true
    //}
    //function colladeblock10(image,block10){
    //	Velocity = -601
    //VelocityUp = -601
    //collade10block = true
    //}
    //function colladeblock11(image,block11){
    //	Velocity = -601
    //VelocityUp = -601
    //collade11block = true
    //}
    //function colladeblock12(image,block12){
    //	Velocity = -601
    //VelocityUp = -601
    //collade12block = true
    //}
    function colladeblock102(image2,block1){
        //Velocity2 = -601
        //VelocityUp2 = -601
        collade1block2 = true
    }
    function colladeblock202(image2,block2){
        //Velocity2 = -601
        //VelocityUp2 = -601
        collade2block2 = true
    }
    function colladeblock302(image2,block3){
        //Velocity2 = -601
        //VelocityUp2 = -601
        collade3block2 = true
    }
    //function colladeblock402(image2,block4){
    //	Velocity2 = -601
    //VelocityUp2 = -601
    //collade4block2 = true
    //}
    function colladeblock502(image2,block5){
        //Velocity2 = -601
        //VelocityUp2 = -601
        collade5block2 = true
    }
    function colladeblock602(image2,block6){
        //Velocity2 = -601
        //VelocityUp2 = -601
        collade6block2 = true
    }
    function colladeblock702(image2,block7){
        //Velocity2 = -601
        //VelocityUp2 = -601
        collade7block2 = true
    }
    function colladeblock802(image2,block8){
        //Velocity2 = -601
        //VelocityUp2 = -601
        collade8block2 = true
    }
    //function colladeblock902(image2,block9){
    //	Velocity2 = -601
    //VelocityUp2 = -601
    //collade9block2 = true
    //}
    //function colladeblock1002(image2,block10){
    //	Velocity2 = -601
    //VelocityUp2 = -601
    //collade10block2 = true
    //}
    //function colladeblock1102(image2,block11){
    //	Velocity2 = -601
    //VelocityUp2 = -601
    //collade11block2 = true
    //}
    //function colladeblock1202(image2,block12){
    //	Velocity2 = -601
    //VelocityUp2 = -601
    //collade12block2 = true
    //}
    function colladetanks1(image,image2){
        //Velocity = -601
        //VelocityUp = -601
        //Velocity2 = 601
        //VelocityUp2 = 601
    }