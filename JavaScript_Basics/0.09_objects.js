
//Object Literal
var player = {
	//Properties
	name           : "",
	life           : 100,
	damage         : 0, //attack damage
	hasSniperRifle : true,
	hasEnergySword : true,
	rank           : ["solider","mage","spartan","barbarian"],

	challenge: function () {
			console.log("Sir would you care to do battle?")
		},

		fightme     : function(){
			console.log("Would you care to fight " + this.name + "?") 
		},

		attack      :function (target) {
			console.log(this.name + " attacks " + target.name + " for " + this.damage)
			target.life -= this.damage;
		},

		pickedUpSword  : function(){
			if(this.hasEnergySword == true){
				console.log(this.name + " picked up the sword ");
			}
		},

		UseSplashPotion  : function (){
			console.log(this.name + " uses splash potion " )
		},

		healthleft  :function (target){
			console.log(this.name + " Has this much health left " + )
		}



};



var saul = Object.create(player);
saul.name = "Saul";
saul.life = 120;
saul.damage = 20;
saul.hasEnergySword = true;
saul.hasSniperRifle = true;
saul.challenge();
saul.fightme();
saul.UseSplashPotion();

var david = Object.create(player);
david.name = "David";
david.life = 120;
david.damage = 200;
david.hasSniperRifle = true;
david.rank = "spartan";
david.fightme();
david.attack(saul);
david.pickedUpSword();



	