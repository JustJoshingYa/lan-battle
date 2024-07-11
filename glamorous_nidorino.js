//link: https://sprig.hackclub.com/share/eq5dqN46OmnjTcsNcC7Z
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
const bUp = "t"
const tele2 = "a"
const efloor = "f"
const pfloor = "r"
const spike = "i"
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
const target1 = "-"
const shield2 = "_"
const arrow1 = "="
const clips = "`"
const boss1 = "<"
const boss2 = "?"
const fire = "!"
const cooldown = "@"
const shield1 = "*"
const warning = "%"


let charging = false;
let chargeStartTime;
var chargeAnimationTimer;
let phit = 10
let ehit = 10
let t1hit = 2
let s1hit = 4
let s2hit = 1
let cliphit = 15
let arhit = 15
let boss1hit = 20

const playerSprites = [normal, charge, beam, chargebeam, superchargebeam, fire, cooldown]
let mode = 0;
let level = 0;
const levels = [map`
18888887
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

let jcount = 0;
const titlemelody = tune`
150: C4-150,
150: C4-150 + C5^150 + A4/150,
150: D4-150 + D5^150 + B4/150,
150: D4-150,
150: C4-150 + E5^150 + G4/150,
150: C4-150 + E5^150 + G4/150,
150: D4-150 + E5^150 + G4/150,
150: D4-150,
150: C4-150 + D5^150 + G4/150,
150: C4-150 + C5^150 + A4/150 + F4/150,
150: D4-150 + B4^150 + F4/150,
150: D4-150 + C5^150 + F4/150,
150: C4-150 + D5^150 + A4/150 + F4/150,
150: C4-150 + G4/150,
150: D4-150 + E5^150 + B4/150,
150: D4-150,
150: C4-150 + E5^150 + B4/150,
150: C4-150,
150: D4-150 + D5^150 + F4/150,
150: D4-150 + B4^150 + G4/150,
150: C4-150,
150: C4-150 + C5^150 + G4/150,
150: D4-150 + D5^150 + A4/150,
150: D4-150,
150: C4-150 + E5^150,
150: C4-150,
150: D4-150 + D5^150 + B4/150,
150: D4-150 + C5^150 + G4/150,
150: C4-150,
150: C4-150 + E5^150 + B4/150,
150: D4-150 + A4/150,
150: D4-150 + C5^150`
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
const hit = tune`
37.5,
37.5: A5/37.5 + G5/37.5 + F5/37.5 + E5/37.5 + D5^37.5,
37.5: A4/37.5 + G4/37.5 + F4/37.5 + E4/37.5 + B4^37.5,
37.5: E5/37.5 + F5/37.5 + G5/37.5 + A5/37.5 + D5^37.5,
37.5: A4/37.5 + G4/37.5 + F4/37.5 + E4/37.5 + B4^37.5,
37.5: E5/37.5 + F5/37.5 + G5/37.5 + A5/37.5 + D5^37.5,
37.5: A4/37.5 + G4/37.5 + F4/37.5 + E4/37.5 + B4^37.5,
37.5: E5/37.5 + F5/37.5 + G5/37.5 + A5/37.5 + D5^37.5,
900`
const miss = tune`
37.5: A4-37.5,
37.5: A4-37.5,
37.5: G4-37.5,
37.5: F4-37.5,
37.5: F4-37.5 + E4-37.5,
37.5: E4-37.5 + D4-37.5,
37.5: D4-37.5 + C4-37.5,
37.5: C4-37.5,
900`
const nothing = tune`
52.35602094240838: B4^52.35602094240838,
52.35602094240838: C5^52.35602094240838,
1570.6806282722514`
const melody = [charges, beams, chargebeams, superchargebeams, shot]
const playerX = 2; 
const playerY = 2;  
let isButtonPressed = false;
let buttonStartTime = 0;
var Timer= 0;
let chargeState = 0
let chargeTimer; 
let playback;
const directions = ["up", "down", "left", "right", "shoot"];
let canCharge = true; // Flag to track if the player can start charging again
var chargeCooldownTime = 2000; // Cooldown time in milliseconds
var enemySpeed = 1000
var bossSpeed = 500
let progression = 0;
let elapsedTime;
let busterPw = 1
let wave = 0
setLegend(
  [ bUp, bitmap`
0000000000000000
0LL2LLLLLLLLLLL0
0L212LLLL00LLLL0
0LL2LLL003300LL0
0LLLLL00037700L0
0LLLL033001730L0
0LLL0333660330L0
0LL03336660000L0
0LL0336663330LL0
0L00336633300LL0
0L0333333300L2L0
00033333300L2120
0003333000LLL2L0
03300000LLLLLLL0
033300LLLLLLLLL0
0000000000000000`],
  [shotUp, bitmap`
0000000000000000
0LLLLLLLLLLLLLL0
0LLLLLLLLLLLLLL0
0LLLLLLLLLLLLLL0
0LLLLLLLLLLLLLL0
0LLLLLLLLLLLLLL0
0LLLLLLLLLLLLLL0
0LLLLLLLLLLLLLL0
0LLLLLLLLLLLLLL0
0LLLLLLLLLLLLLL0
0LLLLLLLLLLLLLL0
0LLLLLLLLLLLLLL0
0LLLLLLLLLLLLLL0
0LLLLLLLLLLLLLL0
0LLLLLLLLLLLLLL0
0000000000000000`],
  [ speedUp, bitmap`
0000000000000000
0LLLL000000LLLL0
0LL0022002200LL0
0L022222222220L0
0L022222112220L0
0022222112122200
0022222112122200
0002222002212000
0002222002212000
0022212222122200
0022212222122200
0L022211112220L0
0L022222222220L0
0LL0022002200LL0
0LLL0000000LLLL0
0000000000000000`],
  [ coolUp, bitmap`
0000000000000000
0LLLLLLLLLLLLLL0
0LLLL22LL22LLLL0
0LLLL272272LLLL0
0LLLLL2772LLLLL0
0L22LL2772LL22L0
0L272272272272L0
0LL2772552772LL0
0LL2772552772LL0
0L272272272272L0
0L22LL2772LL22L0
0LLLLL2772LLLLL0
0LLLL272272LLLL0
0LLLL22LL22LLLL0
0LLLLLLLLLLLLLL0
0000000000000000`],
  [ h30Up, bitmap`
0000000000000000
0LLLLLLLLLLLLLL0
0LLLLLLLLLLLLLL0
0L333LLLLLL333L0
033333LLLL333330
0333333333333330
0333222333323330
0333332333232330
0333222333232330
0L333323332323L0
0LL3222333323LL0
0LLL33333333LLL0
0LLLL333333LLLL0
0LLLLL3333LLLLL0
0LLLLLL33LLLLLL0
0000000000000000`],
  [ h50Up, bitmap`
0000000000000000
0LLLLLLLLLLLLLL0
0LLLLLLLLLLLLLL0
0L333LLLLLL333L0
033333LLLL333330
0333333333333330
0333222333323330
0333233333232330
0333222333232330
0L333323332323L0
0LL3222333323LL0
0LLL33333333LLL0
0LLLL333333LLLL0
0LLLLL3333LLLLL0
0LLLLLL33LLLLLL0
0000000000000000`],
  [ h100Up, bitmap`
0000000000000000
0LLLLLLLLLLLLLL0
0LLLLLLLLLLLLLL0
0L333LLLLLL333L0
033333LLLL333330
0333333333333330
0333233233323330
0333232323232330
0333232323232330
0L332323232323L0
0LL3233233323LL0
0LLL33333333LLL0
0LLLL333333LLLL0
0LLLLL3333LLLLL0
0LLLLLL33LLLLLL0
0000000000000000`],
  [ boss2, bitmap`
....444000......
...44004.00.....
...40444..0.....
...444....0.....
....0000000.....
...001111100....
..01111111110...
..01332332110...
..01322322110...
...0111111110...
....011111110.00
.....00000000000
.00000000HHHHHH0
00HHHHHHHHHHHHH0
0HHHHHHHHHHHHHH0
0000000000000000`],
  [ boss1, bitmap `
................
.00000000000000.
.02222222222220.
.02DDDDDDDDDD20.
.02DD4DDDD4DD20.
.02DD4DDDD4DD20.
.02DD4DDDD4DD20.
.02DDDDDDDDDD20.
.02DDD4444DDD20.
.02DDDDDDDDDD20.
.02222222222220.
.00001111110000.
....00000000....
...0111111110...
..022222222220..
..000000000000..`],
  [ target1, bitmap`
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
  [ shield2, bitmap`
..CCCC..........
.CC11...........
CC111...........
C111............
C11.............
C11.............
C11.............
C11.............
C11.............
C111............
C1111...........
CC111...........
CCCCCCC.........
C10..01.........
.101101.........
..0..0..........` ],
  [ arrow1, bitmap`
....00..........
...0220.........
...02220........
...022220.......
...0222220......
...02222220.....
...022222220....
...0222222220...
...02222222220..
...02222220000..
...02202220.....
...020.02220....
...00..02220....
........02220...
........02220...
.........000....` ],
  [ clips, bitmap`
.......LLLLL....
.......L...L....
......LL...LL...
......L.....L...
......00..00L...
.....00000000...
......00..00L...
...L..L...L.L...
...LL.L...L.L...
....L.L...L.L...
....L.L...L.L...
....L.LL..L.L...
....L..L..L.L...
....LL.LLL..L...
.....L.....L....
.....LLLLLLL....` ],
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
  [ fire, bitmap`
................
....55..........
.0.5555.........
..007755........
...000000.......
...39911....7...
.9933993..3337..
9999333999326...
99339999..3337..
99.3999.....7...
33.99999........
...99999........
..999.999.......
.3339.333.......
3333..3333......
................` ],
  [ cooldown, bitmap`
................
....55..........
.0.5555.........
..007755........
...000000.1.....
...39911...1....
.9933993..1.....
999933399..1....
99339999993.....
99.3999..333....
33.99999..31....
...99999........
..999.999.......
.3339.333.......
3333..3333......
................` ],
  [ shield1, bitmap`
..CCCC..........
.CC11...........
CC111...........
C111............
C11.............
C11.............
C11.............
C11.............
C11.............
C111............
C1111...........
CC111...........
CCCCCCC.........
C101101.........
.101.0..........
..0..0..........`],
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
  [ warning, bitmap `
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666`],
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
  [ spike, bitmap`
1111111111111111
1LLL00000000LLL1
1LL0000000000LL1
1L011111111110L1
1001111111111001
10011LLLLLL11001
10011LLLLLL11001
10011LL11LL11001
10011LL11LL11001
10011LLLLLL11001
10011LLLLLL11001
1001111111111001
1L011111111110L1
1LL0000000000LL1
1LLL00000000LLL1
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
addText("LAN Battle", { x:5, y:6, color: color `2` })
//addText("Move with WASD", { x:2, y:3, color: color `2` })
//addText("Shoot with J", { x:3, y:4, color: color `2` })
//addText("Hold down J", { x:1, y:5, color: color `2` })
//addText( "to charge weapon", { x:1, y:6, color: color `2` })
addText("press i to proceed", { x:1, y:9, color: color `2` })
setSolids([ pfloor, black, enemy])
setSolids([ efloor, playerSprites[0], black, playerSprites[1],playerSprites[2],playerSprites[3],playerSprites[4]])
setPushables({
  [ playerSprites[mode] ]: []
})
onInput("i",() => {
  if (progression == 0){
level++
setMap(levels[level])
clearText(); 
//updateBattleText();
tutorial();
}else if (progression == 1){
  clearText();
    tutorial();
}
//addSprite(5, 3, enemy) // Spawn the enemy on efloor
});

function tutorial(){
  if (progression == 0){
addSprite(2, 3, playerSprites[mode])
addText("Hey!", { x:9, y:12, color: color `2` })
setTimeout(100);
addText("Welcome to arena!", { x:2, y:13, color: color `2` })  
addText(" Press i to proceed", { x:0, y:14, color: color `2` })  
progression = progression + 1
  }else if (progression == 1){
  addText("Move with WASD", { x:3, y:13, color: color `2` })
    progression = progression + 1
}else if (progression == 3){
    clearText();
    addSprite(5,3, target1)
    updateBattleText()
   addText("Tap J twice", { x:3, y:13, color: color `2` }) 
  addText("to shoot", { x:3, y:14, color: color `2` }) 
}else if (progression == 4){
    clearText();
    t1hit = 2
    updateBattleText();
    addSprite(5,3, target1)
   addText("Tap J, wait,", { x:3, y:12, color: color `2` }) 
  addText("then tap J again to", { x:1, y:13, color: color `2` }) 
    addText("fire a charged shot", { x:1, y:14, color: color `2` })
}else if (progression == 5){
  clearText();
    t1hit = 4
  addSprite(4,2, shield1)
    updateBattleText();
    moveShieldRandomly();
    addText("Enemy: Shield", { x:3, y:12, color: color `2` })
     addText("Will only be hit ", { x:0, y:13, color: color `2` })
    addText("with > level 2 ", { x:3, y:14, color: color `2` })
    addText("shots", { x:3, y:15, color: color `2` })
  }
}


var enemyInFront;




let wcheck = false;
let acheck = false;
let scheck = false;
let dcheck = false;
let jcheck = false;

onInput("w", () => {
  if (progression == 2){
  addText("W", { x:13, y:13, color: color `4` })  
  getFirst(playerSprites[mode]).y -= 1;
  wcheck = true;
  checkInput();
  }else if (progression > 2) {
  getFirst(playerSprites[mode]).y -= 1;
  }
});

onInput("a", () => {
  if (progression == 2){
  addText("A", { x:14, y:13, color: color `4` })  
  getFirst(playerSprites[mode]).x -= 1;
  acheck = true;
  checkInput();
  }
  else if (progression > 2) {
    getFirst(playerSprites[mode]).x -= 1;
  }
});

onInput("s", () => {
  if (progression == 2){
  addText("S", { x:15, y:13, color: color `4` })
  getFirst(playerSprites[mode]).y += 1; 
  scheck = true;
  checkInput();
  }
  else if (progression > 2) {
  getFirst(playerSprites[mode]).y += 1;
  }
});

onInput("d", () => {
  if (progression == 2){
  addText("D", { x:16, y:13, color: color `4` })
  getFirst(playerSprites[mode]).x += 1;
  dcheck = true;
    checkInput();
  }else if (progression > 2) {
    getFirst(playerSprites[mode]).x += 1;
  }
});

onInput("j", () => {
  if (progression == 3){
    if (canCharge) {
      hitDetect();
      startChargingCooldown();
    }else {
    playTune(overheat)
  }
    } else if (progression > 3){
   if (canCharge) {
    if (!charging) {
      startChargingAnimation();
    } else {
      stopChargingTimer()
      stopChargingAnimation();
      hitDetect();
      startChargingCooldown();
      
  } 
   }else {
     playTune(overheat)}
   }
  

});
let frontTile;
let enemyX;
function hitDetect(){
  let k = 0
for (let i = 0; i < 6; i++) {
    frontTile = getTile(getFirst(playerSprites[mode]).x + i, getFirst(playerSprites[mode]).y);
     enemyInFront = frontTile.some(sprite => sprite.type === enemy || sprite.type === target1 || sprite.type === shield1);
    
    enemyX = frontTile.find(sprite => sprite.type === enemy || sprite.type === target1 || sprite.type === shield1)?.x;

    // Check if enemy is directly in front on the same x-axis
    if (enemyInFront && enemyX === getFirst(playerSprites[mode]).x + i) {
      
      k = k + 1
      ouch(i); // Call hit function only if enemy is on the same x-axis
      updateBattleText();
      death();
     
      
    
}
  if(k = 0){
    playTune(miss)  
  }
    
  }
}
  

function ouch(j){
  playTune(hit)
   if (enemyInFront == frontTile.some(sprite => sprite.type === target1 && enemyX === getFirst(playerSprites[mode]).x + j)){
        if (chargeState == 0){
        t1hit = t1hit - (1 * busterPw)
        }else if (chargeState == 1){
        t1hit = t1hit - (1.5 * busterPw)
        }else if (chargeState == 2){
        t1hit = t1hit - (2 * busterPw)
        }else if (chargeState == 3){
        t1hit = t1hit - (3 * busterPw)
        }else if (chargeState == 4){
        t1hit = t1hit - (5 * busterPw)
        }
   }else if(enemyInFront = frontTile.some(sprite => sprite.type === enemy && enemyX === getFirst(playerSprites[mode]).x + j)){
    if (chargeState == 0){
        ehit = ehit - (1 * busterPw)
        }else if (chargeState == 1){
        ehit = ehit - (2 * busterPw)
        }else if (chargeState == 2){
        ehit = ehit - (3 * busterPw)
        }else if (chargeState == 3){
        ehit = ehit - (4 * busterPw)
        }else if (chargeState == 4){
        ehit = ehit - (5 * busterPw)
    }
        }else if(enemyInFront = frontTile.some(sprite => sprite.type === shield1 && enemyX === getFirst(playerSprites[mode]).x + j)){
      if (chargeState == 0){
        s1hit = s1hit - 0
        }else if (chargeState == 1){
        s1hit = s1hit - 0
        }else if (chargeState == 2){
        s1hit = s1hit - (2 * busterPw)
        }else if (chargeState == 3){
        s1hit = s1hit - (2.5 * busterPw)
        }else if (chargeState == 4){
        s1hit = s1hit - (3 * busterPw)
      }
   }else if(enemyInFront = frontTile.some(sprite => sprite.type === shield2 && enemyX === getFirst(playerSprites[mode]).x + j)){
      if (chargeState == 0){
        s2hit = s2hit - 0
        }else if (chargeState == 1){
        s2hit = s2hit - 0
        }else if (chargeState == 2){
        s2hit = s2hit - 2
        }else if (chargeState == 3){
        s2hit = s2hit - 2.5
        }else if (chargeState == 4){
        s2hit = s2hit - 3
   }
}
}

function death(){
if (t1hit <= 0){
   getFirst(target1).remove()
  if (progression == 3){
    progression = progression + 1
    tutorial();
  }else if (progression == 4){
    progression = progression + 1
    tutorial();
        }
}else if (s1hit <= 0){
   getFirst(shield1).remove()
}
}

function checkInput(){
  if (progression == 2){
  if (wcheck == true && acheck == true && scheck == true && dcheck == true){
    progression = progression + 1
    tutorial();
  }if (progression == 3){
    if (jcheck == true){
    progression = progression + 1
    tutorial();
    }
  }
}
}

function moveShieldRandomly() {
  let ey = 0;

  const movementInterval = setInterval(() => {
    let currentTile = getTile(getFirst(shield1).x, getFirst(shield1).y + ey);
    const nextDirection = getRandomDirectionY();

    switch (nextDirection) {
      case "up":
        ey = -1
        currentTile = getTile(getFirst(shield1).x, getFirst(shield1).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(shield1).y -= 1;
          ey = 0;
        } else {
          ey = 0;
        }
        break;
      case "down":
        ey = 1
        currentTile = getTile(getFirst(shield1).x, getFirst(shield1).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(shield1).y += 1;
          ey = 0;
        } else {
          ey = 0;
        }
        break;
    }
  }, enemySpeed); // Adjust the interval for movement speed
}

function getRandomDirectionY() {
  const directions = ["up", "down"];
  return directions[Math.floor(Math.random() * 2)];
}
 
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
        case "shoot":
        addSprite(getFirst(enemy).x, getFirst(enemy).y - 1, ball);
        
        break;
    }
  
         }, enemySpeed); // Adjust the interval for movement speed
}

 //moveEnemyRandomly(); // Call the function to start moving the enemy
function startChargingAnimation() {
  
  chargeStartTime = performance.now();
 charging = true;
  
    if (progression >= 4){
    chargeAnimationTimer = setInterval(() => {
    addText(`c time: ${elapsedTime}`, { x:0, y:0, color: color `D` })  
     elapsedTime = performance.now() - chargeStartTime;
    if(elapsedTime < 2900){
      chargeState = 0
      replacePlayer(playerSprites[mode], 5);
      playback = playTune(nothing);
    }else if (elapsedTime < 3000) {
      chargeState = 1
      playback = playTune(melody[0]);
      replacePlayer(playerSprites[mode], 1); // Charge animation
    } else if (elapsedTime < 6000) {
      chargeState = 2
      playback = playTune(melody[1]);
      replacePlayer(playerSprites[mode], 2); // Beam animation
    } else if (elapsedTime < 10000) {
      chargeState = 3
      playback = playTune(melody[2]);
      replacePlayer(playerSprites[mode], 3); // Chargebeam animation
    } else if (elapsedTime > 11000){
      chargeState = 4
      playback = playTune(melody[3]);
      replacePlayer(playerSprites[mode], 4); // Superchargebeam animation
    }
  }, 100);
}
}
function stopChargingAnimation() {
  elapsedTime = 0
  charging = false;
  replacePlayer(playerSprites[mode], 5);
  playback.end();
  playTune(shot);
}
function stopChargingTimer() {
  if (progression >= 4){
  clearInterval(chargeAnimationTimer);
}
}


function startChargingCooldown() {
  chargeState = 0
  canCharge = false;
  replacePlayer(playerSprites[mode], 6);
  setTimeout(() => {
    canCharge = true;// Allow player to charge again after cooldown
    replacePlayer(playerSprites[mode], 0);
  }, chargeCooldownTime);
}


    
function replacePlayer(oldSprite, newmode) {
  let x = getFirst(playerSprites[mode]).x
  let y = getFirst(playerSprites[mode]).y
 getFirst(playerSprites[mode]).remove();
addSprite(x, y, playerSprites[newmode]);
  mode = newmode;
}
function updateBattleText(){
if (progression <= 4 && progression > 1){
addText(`HP: ${phit}`, { x:1, y:2, color: color `2` })
addText(`T1: ${t1hit}`, { x:12, y:2, color: color `3` }) 
}else if (progression == 5){
  addText(`HP: ${phit}`, { x:1, y:2, color: color `2` })
  addText(`S1: ${s1hit}`, { x:12, y:2, color: color `3` })
}
}


function upgrade (what){
if (what == "busterUp"){
  busterPw = 1.5
} else if (what == "cool"){
  chargeCooldownTime = 1000
} else if (what == "speed"){
  enemySpeed = 2000
}else if (what == "autoFire"){
//player starts shooting lv 2 bullets automatically at a reduced cooldown rate, all the player needs to do is just move to avoid attacks
  
}else if (what == "shotgun"){
  //does small damage to all enemies 
}else if (what == "health30"){
phit = phit + 30
}else if (what == "health50"){
phit = phit + 50
}else if (what == "health100"){
}
}
  

 

