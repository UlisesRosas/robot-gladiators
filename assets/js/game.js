var playerName = window.prompt("What is your robots name?"); 
var playerHealth = 100; 
var playerAttack = 10; 
var playerMoney = 10;

// log multiple valuies like this 
console.log(playerName, playerAttack + "AT", playerHealth + "HP"); 

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
     // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt ("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'skip' to choose.");
      // log the players answer
    console.log(
     "You have chosen to " + promptFight
    );
   // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
  // comfirm cpmfirm player wants to skip
  var confirmSkip = window.confirm(" Are you sure you'd likr top quit?");
  // if yes (true), lweave fight
  if(confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from player money for skipping
    playerMoney = playerMoney- 2;
  }
  else{
    fight();
  }
} else {
  window.alert("You need to choose a valid option. Try again!");
}

}; 

fight();