// link: https://sprig.hackclub.com/share/R6zDsIgMiw5SUWRvViUc
/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const normal = "p"
const beam = "b"
const charge = "q"
const chargebeam = "c"
const superchargebeam = "h"
const ball = "y"
const tele1 = "t"
const tele2 = "a"
const efloor = "f"
const pfloor = "r"
const pillar = "i"
const enemy = "e"
const title1 = "1"
const title2 = "2"
const title3 = "3"
const title4 = "4"
const title5 = "5"
const title6 = "6"
const title7 = "7"
const title8 = "8"
const title9 = "9"
const black = "0"
const target = "-"

let charging = false;
let chargeStartTime;
let chargeAnimationTimer;
let phit = 10
let ehit = 10
 //starts timer
const playerSprites = [normal, charge, beam, chargebeam, superchargebeam]
let mode = 0;
let level = 0;
const levels = [map`
12222222
29999996
29999996
29999996
29999996
29999996
34444445`, map`
00000000
00000000
0rrrfff0
0rrrfff0
0rrrfff0
00000000
00000000`];


const titlemelody = tune`
491.8032786885246: C4-491.8032786885246,
491.8032786885246: C4-491.8032786885246 + C5^491.8032786885246 + A4/491.8032786885246,
491.8032786885246: D4-491.8032786885246 + D5^491.8032786885246 + B4/491.8032786885246,
491.8032786885246: D4-491.8032786885246,
491.8032786885246: C4-491.8032786885246 + E5^491.8032786885246 + G4/491.8032786885246,
491.8032786885246: C4-491.8032786885246 + E5^491.8032786885246 + G4/491.8032786885246,
491.8032786885246: D4-491.8032786885246 + E5^491.8032786885246 + G4/491.8032786885246,
491.8032786885246: D4-491.8032786885246,
491.8032786885246: C4-491.8032786885246 + D5^491.8032786885246 + G4/491.8032786885246,
491.8032786885246: C4-491.8032786885246 + C5^491.8032786885246 + A4/491.8032786885246 + F4/491.8032786885246,
491.8032786885246: D4-491.8032786885246 + B4^491.8032786885246 + F4/491.8032786885246,
491.8032786885246: D4-491.8032786885246 + C5^491.8032786885246 + F4/491.8032786885246,
491.8032786885246: C4-491.8032786885246 + D5^491.8032786885246 + A4/491.8032786885246 + F4/491.8032786885246,
491.8032786885246: C4-491.8032786885246 + G4/491.8032786885246,
491.8032786885246: D4-491.8032786885246 + E5^491.8032786885246 + B4/491.8032786885246,
491.8032786885246: D4-491.8032786885246,
491.8032786885246: C4-491.8032786885246 + E5^491.8032786885246 + B4/491.8032786885246,
491.8032786885246: C4-491.8032786885246,
491.8032786885246: D4-491.8032786885246 + D5^491.8032786885246 + F4/491.8032786885246,
491.8032786885246: D4-491.8032786885246 + B4^491.8032786885246 + G4/491.8032786885246,
491.8032786885246: C4-491.8032786885246,
491.8032786885246: C4-491.8032786885246 + C5^491.8032786885246 + G4/491.8032786885246,
491.8032786885246: D4-491.8032786885246 + D5^491.8032786885246 + A4/491.8032786885246,
491.8032786885246: D4-491.8032786885246,
491.8032786885246: C4-491.8032786885246 + E5^491.8032786885246,
491.8032786885246: C4-491.8032786885246,
491.8032786885246: D4-491.8032786885246 + D5^491.8032786885246 + B4/491.8032786885246,
491.8032786885246: D4-491.8032786885246 + C5^491.8032786885246 + G4/491.8032786885246,
491.8032786885246: C4-491.8032786885246,
491.8032786885246: C4-491.8032786885246 + E5^491.8032786885246 + B4/491.8032786885246,
491.8032786885246: D4-491.8032786885246 + A4/491.8032786885246,
491.8032786885246: D4-491.8032786885246 + C5^491.8032786885246`
const overheat = tune`
37.5: G4/37.5,
37.5: G4/37.5,
37.5: G4/37.5,
37.5: G4/37.5,
37.5: G4/37.5,
37.5: G4/37.5,
975`
const charges = tune`
52.35602094240838: D5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: D5^52.35602094240838,
52.35602094240838: D5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: D5^52.35602094240838,
52.35602094240838: D5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: D5^52.35602094240838,
52.35602094240838: D5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: D5^52.35602094240838,
52.35602094240838: D5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: D5^52.35602094240838,
52.35602094240838: D5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: D5^52.35602094240838,
52.35602094240838: D5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: D5^52.35602094240838,
52.35602094240838: D5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: D5^52.35602094240838`
const beams = tune`
52.35602094240838: E5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: E5^52.35602094240838,
52.35602094240838: E5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: E5^52.35602094240838,
52.35602094240838: E5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: E5^52.35602094240838,
52.35602094240838: E5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: E5^52.35602094240838,
52.35602094240838: E5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: E5^52.35602094240838,
52.35602094240838: E5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: E5^52.35602094240838,
52.35602094240838: E5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: E5^52.35602094240838,
52.35602094240838: E5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
52.35602094240838: E5^52.35602094240838`
const chargebeams = tune`
46.875: F5^46.875,
46.875: C5^46.875,
46.875: C5^46.875,
46.875: F5^46.875,
46.875: F5^46.875,
46.875: C5^46.875,
46.875: C5^46.875,
46.875: F5^46.875,
46.875: F5^46.875,
46.875: C5^46.875,
46.875: C5^46.875,
46.875: F5^46.875,
46.875: F5^46.875,
46.875: C5^46.875,
46.875: C5^46.875,
46.875: F5^46.875,
46.875: F5^46.875,
46.875: C5^46.875,
46.875: C5^46.875,
46.875: F5^46.875,
46.875: F5^46.875,
46.875: C5^46.875,
46.875: C5^46.875,
46.875: F5^46.875,
46.875: F5^46.875,
46.875: C5^46.875,
46.875: C5^46.875,
46.875: F5^46.875,
46.875: F5^46.875,
46.875: C5^46.875,
46.875: C5^46.875,
46.875: F5^46.875`
const superchargebeams = tune`
37.5: G5^37.5,
37.5: C5^37.5,
37.5: C5^37.5,
37.5: G5^37.5,
37.5: G5^37.5,
37.5: C5^37.5,
37.5: C5^37.5,
37.5: G5^37.5,
37.5: G5^37.5,
37.5: C5^37.5,
37.5: C5^37.5,
37.5: G5^37.5,
37.5: G5^37.5,
37.5: C5^37.5,
37.5: C5^37.5,
37.5: G5^37.5,
37.5: G5^37.5,
37.5: C5^37.5,
37.5: C5^37.5,
37.5: G5^37.5,
37.5: G5^37.5,
37.5: C5^37.5,
37.5: C5^37.5,
37.5: G5^37.5,
37.5: G5^37.5,
37.5: C5^37.5,
37.5: C5^37.5,
37.5: G5^37.5,
37.5: G5^37.5,
37.5: C5^37.5,
37.5: C5^37.5,
37.5: G5^37.5`
const shot = tune`
37.5,
37.5: C5-37.5,
37.5: D5-37.5 + B4-37.5 + C5-37.5,
37.5: C5-37.5,
1050`
const melody = [charges, beams, chargebeams, superchargebeams, shot]
const playerX = 2; 
const playerY = 2;  
let isButtonPressed = false;
let buttonStartTime = 0;
var Timer= 0;
let chargeTimer; 

setLegend(
  [ target, bitmap`
................
...222222.......
..223333.2......
.2232222322.....
.2322332232.....
.2323223232.....
.232322323200...
.2323223232.0...
.2323223232.0...
.2322332232.0...
.22322223220....
..2233332200....
...222222L.00...
......11111.0...
.....111111L0...
....LLLLLLLL0...` ],
  [ charge, bitmap`
................
....55..........
.0.5555.........
..007755........
...000000.......
...39911........
.9933993..333.7.
99993339993F17..
99339999..333.7.
99.3999.........
33.99999........
...99999........
..999.999.......
.3339.333.......
3333..3333......
................` ],
  [ normal, bitmap`
................
....55..........
.0.5555.........
..007755........
...000000.......
...39911........
.9933993..333...
99993339993F1...
99339999..333...
99.3999.........
33.99999........
...99999........
..999.999.......
.3339.333.......
3333..3333......
................` ],
  [ ball, bitmap`
................
................
................
................
................
......HHHH......
.....HH33HH.....
.....H3333H.....
.....H3333H.....
.....HH33HH.....
......HHHH......
................
................
................
................
................` ],
  [ tele1, bitmap`
.....99399......
.....93939......
.....99399......
.....93939......
.....99399......
.....93939......
.....99399......
.....93939......
.....99399......
.....93939......
.....99399......
.....93939......
................
................
................
................` ],
  [ tele2, bitmap`
................
................
................
................
................
................
................
................
................
................
................
................
.....99399......
....9939399.....
...993999399....
..99393939399...` ],
  [ beam, bitmap`
................
....55..........
.0.5555.........
..007755........
...000000.......
...39911........
.9933993..333.7.
99993339993F7757
99339999..333.7.
99.3999.........
33.99999........
...99999........
..999.999.......
.3339.333.......
3333..3333......
................` ],
  [ chargebeam, bitmap`
................
....55..........
.0.5555.........
..007755........
...000000.......
...39911......7.
.9933993..333777
9999333999367757
99339999..333777
99.3999.......7.
33.99999........
...99999........
..999.999.......
.3339.333.......
3333..3333......
................` ],
  [ superchargebeam, bitmap`
................
....55..........
.0.5555.........
..007755........
...000000....77.
...39911....7557
.9933993..333557
9999333999355557
99339999..333557
99.3999.....7557
33.99999.....77.
...99999........
..999.999.......
.3339.333.......
3333..3333......
................` ],
  [ enemy, bitmap`
................
................
.........0000...
........044400..
........004000..
.........0000...
.......0..00....
......000.000...
......3300110...
......000.000...
.......0..00....
..........00....
.........000....
.........0.00...
.......000..00..
......0000..000.` ],
  [ efloor, bitmap`
1111111111111111
1HHHHHHHHHHHHHH1
1HHHHHHHHHHHHHH1
1HHHHHHHHHHHHHH1
1HHHHHHHHHHHHHH1
1HHHHHHHHHHHHHH1
1HHHHHHHHHHHHHH1
1HHHHHHHHHHHHHH1
1HHHHHHHHHHHHHH1
1HHHHHHHHHHHHHH1
1HHHHHHHHHHHHHH1
1HHHHHHHHHHHHHH1
1HHHHHHHHHHHHHH1
1HHHHHHHHHHHHHH1
1HHHHHHHHHHHHHH1
1111111111111111` ],
  [ pfloor, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1111111111111111` ],
  [ pillar, bitmap`
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111` ],
  [ title1,bitmap`
0000000000000000
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL`],
  [ title2,bitmap`
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL`],
  [ title3,bitmap`
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0LLLLLLLLLLLLLLL
0000000000000000`],
  [ title4,bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
0000000000000000`],
  [ title5,bitmap`
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
0000000000000000`],
  [ title6,bitmap`
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0`],
  [ title7,bitmap`
0000000000000000
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0
LLLLLLLLLLLLLLL0`],
  [ title8,bitmap`
0000000000000000
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
  [ title9,bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
  [ black,bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
  
  )
setMap(levels[level])
addText("LAN Battle", { x:1, y:2, color: color `2` })
addText("Move with WASD", { x:2, y:3, color: color `2` })
addText("Shoot with J", { x:3, y:4, color: color `2` })
addText("Hold down J", { x:1, y:5, color: color `2` })
addText( "to charge weapon", { x:1, y:6, color: color `2` })
addText("to deal damage", { x:1, y:7, color: color `2` })
setSolids([ pfloor, black, enemy])
setSolids([ efloor, playerSprites[0], black, playerSprites[1],playerSprites[2],playerSprites[3],playerSprites[4],])
setPushables({
  [ playerSprites[mode] ]: []
})
onInput("i",() => {
//stopTimer(); z
//time == 0;
//chargeAmount = 0;
//replacePlayer(playerSprites[mode], 0);  
level++
setMap(levels[level])
clearText(); 
updateBattleText();
addSprite(playerX, playerY, playerSprites[mode])
addSprite(5, 3, enemy) // Spawn the enemy on efloor
});


onInput("w", () => {
  getFirst(playerSprites[mode]).y -= 1;
  
});

onInput("a", () => {
  getFirst(playerSprites[mode]).x -= 1;
  
});

onInput("s", () => {
  getFirst(playerSprites[mode]).y += 1; 
  
});

onInput("d", () => {
  getFirst(playerSprites[mode]).x += 1;
  
});

let playback;
  
const directions = ["up", "down", "left", "right"];

// Function to generate a random direction
function getRandomDirection() {
  return directions[Math.floor(Math.random() * directions.length)];
}

// Function to move the enemy on efloor
function moveEnemyRandomly() {
  let ey = 0;
  let ex = 0;
  const movementInterval = setInterval(() => {
    let currentTile = getTile(getFirst(enemy).x + ex, getFirst(enemy).y + ey);
    const nextDirection = getRandomDirection();

    switch (nextDirection) {
      case "up":
        ey = -1
        currentTile = getTile(getFirst(enemy).x + ex, getFirst(enemy).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(enemy).y -= 1;
          ey = 0;
          ex = 0;
        } else {
          ey = 0;
          ex = 0;
        }
        break;
      case "down":
        ey = 1
        currentTile = getTile(getFirst(enemy).x + ex, getFirst(enemy).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(enemy).y += 1;
          ey = 0;
          ex = 0;
          } else {
          ey = 0;
          ex = 0;
        }
        break;
      case "left":
        ex = -1
        currentTile = getTile(getFirst(enemy).x + ex, getFirst(enemy).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(enemy).x -= 1;
          ey = 0;
          ex = 0;
          } else {
          ey = 0;
          ex = 0;
        }
        break;
      case "right":
        ex = 1
        currentTile = getTile(getFirst(enemy).x + ex, getFirst(enemy).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(enemy).x += 1;
          ey = 0;
          ex = 0;
          } else {
          ey = 0;
          ex = 0;
        }
        break;
    }
  
         }, 1000); // Adjust the interval for movement speed
}

moveEnemyRandomly(); // Call the function to start moving the enemy
function startChargingAnimation() {
  charging = true;
  chargeStartTime = performance.now();
  
  chargeAnimationTimer = setInterval(() => {
    const elapsedTime = performance.now() - chargeStartTime;
    
    if (elapsedTime < 2000) {
      replacePlayer(playerSprites[mode], 0); // Normal animation
    } else if (elapsedTime < 3000) {
      
      playback = playTune(melody[0]);
      replacePlayer(playerSprites[mode], 1); // Charge animation
    } else if (elapsedTime < 6000) {
      
      playback = playTune(melody[1]);
      replacePlayer(playerSprites[mode], 2); // Beam animation
    } else if (elapsedTime < 10000) {
     
      playback = playTune(melody[2]);
      replacePlayer(playerSprites[mode], 3); // Chargebeam animation
    } else if (elapsedTime > 20000){
      
      playback = playTune(melody[3]);
      replacePlayer(playerSprites[mode], 4); // Superchargebeam animation
    }
  }, 1000);
}

function stopChargingAnimation() {
  charging = false;
  replacePlayer(playerSprites[mode], 0);
  clearInterval(chargeAnimationTimer);
  playback.end();
  playTune(shot)
}

let canCharge = true; // Flag to track if the player can start charging again
const chargeCooldownTime = 2000; // Cooldown time in milliseconds

function startChargingCooldown() {
  canCharge = false;
  setTimeout(() => {
    canCharge = true; // Allow player to charge again after cooldown
  }, chargeCooldownTime);
}

onInput("j", () => {
  if (canCharge) {
    if (!charging) {
      startChargingAnimation();
    } else {
      stopChargingAnimation();
      startChargingCooldown(); // Start the cooldown after releasing 'j'
      
      for (i = 0; i < 6; i++){
        let frontTile = getTile(getFirst(playerSprites[mode]).x + i, getFirst(playerSprites[mode]).y);
        let enemyInFront = frontTile.some(sprite => sprite.type === enemy);
      if (enemyInFront) {
        playTune(shot)
        ehit = ehit - 1
        updateBattleText();
      }
    }
    }
  } else {
    playTune(overheat)
    
  }
});
    
function replacePlayer(oldSprite, newmode) {
  let x = getFirst(playerSprites[mode]).x
  let y = getFirst(playerSprites[mode]).y
 getFirst(playerSprites[mode]).remove();
addSprite(x, y, playerSprites[newmode]);
  mode = newmode;
}
function updateBattleText(){
  clearText();
addText(`${ehit}`, { x:1, y:2, color: color `2` })
  
}


