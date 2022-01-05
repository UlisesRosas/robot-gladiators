// Game States
// "WIN" - Player robot has defeated all enemy-robots
//   * fight all enemy-robots
//   * defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
var playerName = window.prompt("What is your robots name?"); 
var playerHealth = 100; 
var playerAttack = 10; 
var playerMoney = 10;

// log multiple valuies like this 
console.log(playerName, playerAttack + "AT", playerHealth + "HP"); 

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;




var fight = function(enemyName) {
//repeat and execute as long as the enemy-robot is alive
while (playerHealth > 0 && enemyHealth > 0) {
  // ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + ' has decided to skip this fight. Goodbye!');
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney)
      break;
    }
  }

  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + ' has died!');

    // award player money for winning
    playerMoney = playerMoney + 20;

    // leave while() loop since enemy is dead
    break;
  } else {
    window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
  }

  // remove players's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + ' has died!');
    // leave while() loop if player is dead
    break;
  } else {
    window.alert(playerName + ' still has ' + playerHealth + ' health left.');
  }
  

}
}; 

// function to start a new game
var startGame = function() {
// fight each enemy-robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
  //reset palyer stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
  // if player is still alive, keep fighting
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = 50;

      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
    }
    // if player isn't alive, stop the game
    else {
      window.alert('You have lost your robot in battle! Game Over!');
      break;
    }
  }
  // play again
 
  // after the loop ends, player is either out of health or enemies to fight, so run the endgame function
  endGame();
}; 
// start ther game when the game loads
startGame();

// function to end the game 
var endGame = function() {
//  if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  }
  else{
    window.alert("You've lost your robot in battle.");
  }
  // ask player if they'd like to play again
  var playerPlayAgainConfirm = window.confirm("would you like to play agin?");

  if (playAgainConfirm) {
    startGame();
  }
  else{
    window.alert("thank youy for playing Robot Gladiators! Come back soon!");
  }
};