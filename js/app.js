const Enemy = function(x, y) {
    "use strict";
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    // set x,y coordinate for each enemy object location
    this.width = 80;
    this.height = 60;
    // make enemy as a rectangular object for checking collisions
    this.speed = 100 + 50 * Math.random();
    // generate random speed for each enemy
};


Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed * dt;
    this.checkCollisions();
    if (this.x > 500) {
        this.reset();
    }
};

Enemy.prototype.reset = function() {
    //reset the enemy from random negtive values
    this.x = Math.floor(Math.random()*200) - 400;
};
Enemy.prototype.checkCollisions = function() {
    if (this.x < player.x + player.width &&
        this.x + this.width > player.x &&
        this.y < player.y + player.height &&
        this.height + this.y > player.y) {
        // collision detected!
        player.reset();
    }
}


Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

const Player = function() {
    "use strict";
    //you can change the player img
    this.sprite = 'images/char-cat-girl.png';
    this.x = 200;
    this.y = 400;
    this.width = 70;
    this.height = 80;
};

Player.prototype.update = function(dt) {
    if (this.y < 80) {
    this.reset();
  }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(input) {
    switch (input) {
    case "left":
      if (this.x > 40) {
        this.x -= 30;
      }
      break;
    case "right":
      if (this.x < 400) {
        this.x += 30;
      }
      break;
    case "up":
      if (this.y > 80) {
        this.y -= 50;
      }
      break;
    case "down":
      if (this.x < 400) {
        this.y += 50;
      }
      break;
  }
};

document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
}

const player = new Player();

const amy = new Enemy(-150, 150);
const ben = new Enemy(-400, 200);
const cathy = new Enemy(-200, 100);
const daniel = new Enemy(-300, 250);
const elena = new Enemy(-550, 180);
const frank = new Enemy(-50, 180);

const allEnemies = [
    amy,
    ben,
    cathy,
    daniel,
    elena,
    frank
];
