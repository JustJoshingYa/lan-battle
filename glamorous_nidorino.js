//link: https://sprig.hackclub.com/share/qaQJnPXpsHoPgeqZ0zDW
/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const normal = "€"
const beam = "b"
const charge = "q"
const chargebeam = "c"
const superchargebeam = "h"
const ball1 = "y"
const ball2 = "#"
const bUp = "t"
const phead = "Q"
const choose = "P"
const port1 = "O"
const port2 = "I"
const port3 = "U"
const port4 = "N"
const boss41 = "H"
const boss42 = "J"
const boss43 = "K"
const boss44 = "L"
const boss45 = "X"
const boss46 = "C"
const boss47 = "Z"
const boss48 = "V"
const boss49 = "M"
const boss410 = "^"
const boss3 = "$"
const normalw = "("
const normale = ")"
const normalf = ","
const normalg = ":"
const fires = "&"

const wfloor = ">"
const efloor = "f"
const pfloor = "r"
const spike = "i"
const enemy1 = "e"
const enemy2 = "~"
const shield3 = "'"
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
const shotUp = "A"
const coolUp = "B"
const h30Up = "C"
const h50Up = "D"
const h100Up = "E"
const speedUp = "F"

let unlocked = "normal"
var canChip = false
let charging = false;
let chargeStartTime;
var chargeAnimationTimer;
let boss1dead = false
let boss2dead = false
let boss3dead = false
let boss4dead = false
let timerEnable = true
let phit = 10
let e1hit = 10
let e2hit = 10
let e3hit = 10
let t1hit = 2
let s1hit = 10
let s2hit = 10
let s3hit = 10
let cliphit = 15
let arhit = 15
let boss1hit = 40
let boss2hit = 40
let boss3hit = 40
let boss4hit = 40

const boss4Mouth = [boss49, boss410]
const playerSprites = [normal, charge, beam, chargebeam, superchargebeam, fire, cooldown, normalg, normalf, normale, normalw]
let mode = 0;
let level = 0;
const levels = [map`
187
296
345`, map`
00000000
00000000
0rrrfff0
0rrrfff0
0rrrfff0
00000000
00000000`, map`
fOf
IQU
fNf`, map`
1888887
2999996
2999996
2999996
3444445`];
let jcount = 0;
let currentBoss = "No Boss"
const titlemelody = tune`
120: C4-120,
120: C4-120 + C5^120 + A4/120,
120: D4-120 + D5^120 + B4/120,
120: D4-120,
120: C4-120 + E5^120 + G4/120,
120: C4-120 + E5^120 + G4/120,
120: D4-120 + E5^120 + G4/120,
120: D4-120,
120: C4-120 + D5^120 + G4/120,
120: C4-120 + C5^120 + A4/120 + F4/120,
120: D4-120 + B4^120 + F4/120,
120: D4-120 + C5^120 + F4/120,
120: C4-120 + D5^120 + A4/120 + F4/120,
120: C4-120 + G4/120,
120: D4-120 + E5^120 + B4/120,
120: D4-120,
120: C4-120 + E5^120 + B4/120,
120: C4-120,
120: D4-120 + D5^120 + F4/120,
120: D4-120 + B4^120 + G4/120,
120: C4-120,
120: C4-120 + C5^120 + G4/120,
120: D4-120 + D5^120 + A4/120,
120: D4-120,
120: C4-120 + E5^120,
120: C4-120,
120: D4-120 + D5^120 + B4/120,
120: D4-120 + C5^120 + G4/120,
120: C4-120,
120: C4-120 + E5^120 + B4/120,
120: D4-120 + A4/120,
120: D4-120 + C5^120`
const overheat = tune`
10000,
500: C4^500,
1000,
500: E4^500 + D4^500,
500: F4^500,
500: A4^500,
500: C5^500,
500: G5^500,
2000`
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
let playerX = 2; 
let playerY = 2;  
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
let tprogression = 0;
let gprogression = 0;
let elapsedTime;
let busterPw = 1
let wave = 0
var enemyInFront;
let wcheck = false;
let acheck = false;
let scheck = false;
let dcheck = false;
let jcheck = false;
let shotland = 0
var movementIntervals1; 
var movementIntervals2; 
var movementIntervals3;
var movementIntervale1; 
var movementIntervale2;
let enemy1X;
let enemy1Y;
let enemy2X;
let enemy2Y;
let shield1X;
let shield1Y;
let shield2X;
let shield2Y;
let shield3X;
let shield3Y;
let boss1X;
let boss1Y;
let boss2X;
let boss2Y;
let boss3X;
let boss3Y;
let boss4X;
let boss4Y;
var chipStartTime;
var chipTimer;
var elapsedChipTime;
var shotInterval1
var shotInterval2
const upgradechip = [bUp,shotUp,speedUp,coolUp,h30Up,h50Up,h100Up]
let upgradeslot1 = 0
let upgradeslot2 = 0
let upgradeslot3 = 0
let disableChange = false
let disableTimer = 0;
setLegend(
  [ choose, bitmap`
6666666666666666
6..............6
6..............6
6..............6
6..............6
6..............6
6..............6
6..............6
6..............6
6..............6
6..............6
6..............6
6..............6
6..............6
6..............6
6666666666666666`],
  [ fires, bitmap`
................
.....9..........
.....99.99......
.....99999......
....9999999.....
..9999993399....
.933993393999...
.9339333399399..
.9399399393399..
.93993999933399.
.99993939339339.
.99993333333399.
.99933333333399.
.99333333333399.
.99999999999999.
................`],
  [ port1, bitmap `
CCCCCCCCCCCCCCCC
CDDD4DDDDDD4DDDC
CDD444DDDD444DDC
CDDD444DD444DDDC
CDDDD444444DDDDC
CDDDDD4444DDDDDC
CDDDDDDDDDDDDDDC
CDD44DDDDDD44DDC
CDD44DDDDDD44DDC
CDD44DDDDDD44DDC
CDD44DDDDDD44DDC
CDDDDDDDDDDDDDDC
CDDD44444444DDDC
CDD44DDDDDD44DDC
CD44DDDDDDDD44DC
CCCCCCCCCCCCCCCC`],
  [ port2, bitmap `
CCCCCCCCCCCCCCCC
C011110DDD01110C
C0111110D011110C
C01111110111110C
C01221111112210C
C01222111122210C
C01233311233310C
C01233311233310C
C01233311233310C
C01233311233310C
C01222111222110C
C01111111111110C
C01111011011110C
C01111011011110C
CL000000000000LC
CCCCCCCCCCCCCCCC`],
  [ port3, bitmap `
CCCCCCCCCCCCCCCC
C55555555555555C
C55555555555555C
C55555555555555C
C55555577777555C
C55557772277555C
C55572222755555C
C55772277555555C
C55722775555555C
C55722775555552C
C57727777555527C
C77777777777777C
C77777777777777C
C77777777777777C
C77777777777777C
CCCCCCCCCCCCCCCC`],
  [ port4, bitmap `
CCCCCCCCCCCCCCCC
C77777777777777C
C77777777777777C
C77777777777777C
C77777771177777C
C77777711111777C
C77771101011777C
C77771111111777C
C77711111111177C
CDDD1111111114DC
C4D1111111111D4C
CD1111111111114C
CD111111111111DC
CD1LLLLLLLLLL1DC
CD4DDD4DDDDD4DDC
CCCCCCCCCCCCCCCC`],
  [ boss41, bitmap `
111111111111111L
111111111111111L
111111111111111L
111111111111111L
111111111111111L
111111111111111L
111111111111111L
111111111111111L
111111111111111L
111111111111111L
111111111111111L
111111111111111L
11111111111111LL
1111111111111LL.
111111111111LL..
LLLLLLLLLLLLL...`],
  [ boss42, bitmap `
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
LLLLLLLLLLLLLLLL`],
  [ boss43, bitmap `
.......L11111111
.......L11111111
.......L11111111
.......L11111111
.......L11111111
.......L11111111
.......L11111111
......LL11111111
.....LL111111111
.....L1111111111
.....L1111111111
.....L1111111111
.....L1111111111
....LL1111111111
....L11111111111
....LLLLLLLLLLLL`],
  [ boss44, bitmap `
..........L11111
..........L11111
.........LL11111
.........L111111
.........L111111
.........L111111
.........L111111
.........L111111
.........L111111
.........L111111
........LL111111
........L1111111
.......LL1111111
.......L11111111
.......L11111111
.......L11111111`],
  [ boss45, bitmap `
................
................
................
................
................
................
................
...............L
..............LL
..............L1
.............LL1
............LL11
...........LL111
..........LL1111
..........L11111
..........L11111`],
  [ boss46, bitmap `
........LLLL....
.......L1111L...
......L111111L..
.....L11111111L.
....L1111111111L
...L111111111111
..L1100111111001
.L11100111111001
L111100011110001
111110DD111DD011
111111DD111DD011
111111DD111DD111
1111111111111111
1111111111111111
1111111111111111
1111111111111111`],
  [ boss47, bitmap `
................
................
................
................
LLL.............
11LLL...........
11111LLL........
1111111LLL......
111111111LLL....
11111111111LL...
111111111111LL..
1111111111111LL.
11111111111111LL
111111111111111L
111111111111111L
111111111111111L`],
  [ boss48, bitmap `
111111111111111L
111111111111111L
111111111111111L
111111111111111L
111111111111111L
111111111111111L
11111111111111LL
11111111111111L.
11111111111111L.
11111111111111L.
111111111111111L
111111111111111L
111111111111111L
111111111111111L
111111111111111L
111111111111111L`],
  [ boss49, bitmap `
1111111111111111
1111111111111111
1111CCCCCCCCC111
111CCL22LL22CC11
11CC00L2LL2L1CC1
11C000LL0LLLLLCC
11C000000L0LL00C
1C0000000000000C
1C0000000000000C
C00000000000000C
CC00000000000LLC
1CLLL0000000L2CC
1CL2LLLL0LLLL2C1
1C22LL2LLLLL2CC1
11CCC22LL22CCC11
1111CCCCCCCC1111`],
  [ boss410, bitmap `
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111CCC111111
11CCCCCCCCCCCC11
1CCCCCCCCCCCCCC1
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111`],
  [ boss3, bitmap `
................
..000...........
.05550..........
.052550.........
.0222550........
.02225550.......
.000225550......
..002255050.....
..002220H050....
..2002250550....
..32000555500...
..332320055500..
..3232300555050.
..20000055550550
..00055555550555
................`],
  [ phead, bitmap`
L05777777777750L
0555555555555550
0555555555555550
0055555555555500
0000000000000000
9999999999999999
9900000000000099
900LLLLLLLLLL009
901LLLLLLLLLLL09
901LLLLLLLLLLL09
99011LLLLLLLL099
3390111111110999
L33900000000999L
LL339999999999LL
LLL3339999999LLL
LLLL33399999LLLL`],
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
  [ shotUp, bitmap`
0000000000000000
0LLLLLLLLLLLLLL0
0LLLLLLLLLLLLLL0
0LLLLLLL777LLLL0
0LLLLLL7757LLLL0
0LLLL62L777LLLL0
0LLL99LLLLLLLLL0
033936LL777LLLL0
01133927757LLLL0
033936LL777LLLL0
0LLL99LLLLLLLLL0
0LLLL62L777LLLL0
0LLLLLL7757LLLL0
0LLLLLLL777LLLL0
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
  [ normalw, bitmap`
................
....55..........
.0.5555.........
..007755........
...000000.......
...39911........
.9933993..555...
99993339995F1...
99339999..555...
99.3999.........
33.99999........
...99999........
..999.999.......
.3339.333.......
3333..3333......
................` ],
  [ normalf, bitmap`
................
....55..........
.0.5555.........
..007755........
...000000.......
...39911........
.9933993..393...
99993339999F1...
99339999..393...
99.3999.........
33.99999........
...99999........
..999.999.......
.3339.333.......
3333..3333......
................` ],
  [ normalg, bitmap`
................
....55..........
.0.5555.........
..007755........
...000000.......
...39911........
.9933993..555...
99993339995F1...
99339999..555...
99.3999.........
33.99999........
...99999........
..999.999.......
.3339.333.......
3333..3333......
................` ],
  [ normale, bitmap`
................
....55..........
.0.5555.........
..007755........
...000000.......
...39911........
.9933993..666...
99993339996F1...
99339999..666...
99.3999.........
33.99999........
...99999........
..999.999.......
.3339.333.......
3333..3333......
................` ],
  [ ball1, bitmap`
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
  [ ball2, bitmap`
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
  [ shield3, bitmap`
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
  [ enemy1, bitmap`
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
  [ enemy2, bitmap`
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
  [ wfloor, bitmap`
1111111111111111
1777777777777771
1777777777777771
1777777777777771
1777777777777771
1777777777777771
1777777777777771
1777777777777771
1777777777777771
1777777777777771
1777777777777771
1777777777777771
1777777777777771
1777777777777771
1777777777777771
1111111111111111` ],
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
addText("i for tutorial", { x:3, y:9, color: color `2` })
addText("or l to battle", { x:3, y:12, color: color `2` })
setSolids([ pfloor, black, enemy1])
setSolids([ efloor, playerSprites[0], black, playerSprites[1],playerSprites[2],playerSprites[3],playerSprites[4],playerSprites[5],playerSprites[6],playerSprites[7],playerSprites[8],playerSprites[9],playerSprites[10]])
setPushables({
  [ playerSprites[mode] ]: []
})
onInput("l",() => {
if (tprogression == 0){
  setMap(levels[2])
  clearText();
  gprogression = 1
  addSprite(0, 1, choose)
}
});



let disableTimers = 0





        
onInput("i",() => {
  if (gprogression == 0){
  if (tprogression == 0){
level++
setMap(levels[level])
clearText(); 
//updateBattleText();
tutorial();
}else if (tprogression == 1){
  clearText();
    tutorial();
}
  }else if(gprogression == 2){
    if (canChip == true){
      stopChipTimer()
      playerX = getFirst(playerSprites[mode]).x
      playerY = getFirst(playerSprites[mode]).y
       getFirst(playerSprites[mode]).remove()
      if (currentBoss == "Boss 1"){
        if (gprogression > 1){
          if (e1hit > 0){
      enemy1X = getFirst(enemy1).x
      enemy1Y = getFirst(enemy1).y
      getFirst(enemy1).remove()
          }
          if (s1hit > 0){
      shield1X = getFirst(shield1).x
      shield1Y = getFirst(shield1).y 
      getFirst(shield1).remove() 
          }
        if (s2hit > 0){
      shield2X = getFirst(shield2).x
      shield2Y = getFirst(shield2).y 
      getFirst(shield2).remove()
        }   
       disableTimer = 1 
          chipselect()
      }
      }else if (currentBoss == "Boss 2"){
        if (gprogression > 1){
          if (e1hit > 0){
      enemy1X = getFirst(enemy1).x
      enemy1Y = getFirst(enemy1).y
      getFirst(enemy1).remove()
          }
          if (s1hit > 0){
      shield1X = getFirst(shield1).x
      shield1Y = getFirst(shield1).y 
      getFirst(shield1).remove() 
          }
        if (s2hit > 0){
      shield2X = getFirst(shield2).x
      shield2Y = getFirst(shield2).y 
      getFirst(shield2).remove()
        }   
       disableTimer = 1 
          chipselect()
      }
      }else if (currentBoss == "Boss 3"){
        if (gprogression > 1){
     if (e1hit > 0){
      enemy1X = getFirst(enemy1).x
      enemy1Y = getFirst(enemy1).y
      getFirst(enemy1).remove()
          }
      if (s1hit > 0){
      shield1X = getFirst(shield1).x
      shield1Y = getFirst(shield1).y 
      getFirst(shield1).remove() 
          }
     if (e2hit > 0){
      enemy2X = getFirst(enemy2).x
      enemy2Y = getFirst(enemy2).y
      getFirst(enemy2).remove()
          }
          disableTimer = 1 
          chipselect()
     
      }
      }else if (currentBoss == "Boss 4"){
        if (gprogression > 1){
      if (s1hit > 0){
      shield1X = getFirst(shield1).x
      shield1Y = getFirst(shield1).y 
      getFirst(shield1).remove() 
          }
      if (s2hit > 0){
      shield2X = getFirst(shield2).x
      shield2Y = getFirst(shield2).y 
      getFirst(shield2).remove() 
          }
      if (s3hit > 0){
      shield3X = getFirst(shield3).x
      shield3Y = getFirst(shield3).y 
      getFirst(shield3).remove() 
          }
          disableTimer = 1 
          chipselect()
      }
      }
    
      
      
    }
  }
});

function chipselect(){
if (canChip == true){
clearText()
setMap(levels[3])
upgradeslot1 = Math.floor(Math.random() * 7);
upgradeslot2 = Math.floor(Math.random() * 7);
upgradeslot3 = Math.floor(Math.random() * 7);
  gprogression = 55
 addSprite(1, 2, upgradechip[upgradeslot1]) 
  addSprite(3, 2, upgradechip[upgradeslot2]) 
  addSprite(5, 2, upgradechip[upgradeslot3]) 
 addText("Upgrade Chip", { x:4, y:2, color: color `2` }) 
  addText("W", { x:4, y:10, color: color `2` }) 
  addText("A", { x:10, y:10, color: color `2` }) 
  addText("D", { x:15, y:10, color: color `2` }) 
}
}
function tutorial(){
  if (tprogression == 0){
addSprite(2, 3, playerSprites[mode])
addText("Hey!", { x:9, y:12, color: color `2` })
setTimeout(100);
addText("Welcome to arena!", { x:2, y:13, color: color `2` })  
addText(" Press i to proceed", { x:0, y:14, color: color `2` })  
tprogression = tprogression + 1
  }else if (tprogression == 1){
  addText("Move with WASD", { x:3, y:13, color: color `2` })
    tprogression = tprogression + 1
}else if (tprogression == 3){
    clearText();
    addSprite(5,3, target1)
    updateBattleText()
   addText("Tap J twice", { x:3, y:13, color: color `2` }) 
  addText("to shoot", { x:3, y:14, color: color `2` }) 
}else if (tprogression == 4){
    clearText();
    t1hit = 2
    updateBattleText();
    addSprite(5,3, target1)
   addText("Tap J, wait,", { x:3, y:12, color: color `2` }) 
  addText("then tap J again to", { x:1, y:13, color: color `2` }) 
    addText("fire a charged shot", { x:1, y:14, color: color `2` })
}else if (tprogression == 5){
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

let bossTime = false

onInput("w", () => {
  if (tprogression == 2){
  addText("W", { x:13, y:13, color: color `4` })  
  getFirst(playerSprites[mode]).y -= 1;
  wcheck = true;
  checkInput();
  }else if (tprogression > 2 || gprogression == 2 || gprogression == 4) {
  getFirst(playerSprites[mode]).y -= 1;
  } else if (gprogression == 1){
     if (boss1dead == true){
    getFirst(choose).remove()
    addSprite(1, 0, choose)
  }else{
    currentBoss = "Boss 1"
    setMap(levels[1])
    bossTime = false
    gprogression = 2 
    e1hit = 10
    s1hit = 10
    s2hit = 10
    updateBattleText() 
    addSprite(2, 3, playerSprites[mode])
    addSprite(5, 2, enemy1)
    addSprite(4, 3, shield1)
    addSprite(4, 4, shield2)
    chipTimeStart()
    moveShieldRandomly(shield1)
    moveShieldRandomly(shield2)
    moveEnemyRandomly(enemy1)
    }
  }else if(gprogression == 55){
    upgrade(upgradeslot2)
    exitu()
  }
});

onInput("a", () => {
  if (tprogression == 2){
  addText("A", { x:14, y:13, color: color `4` })  
  getFirst(playerSprites[mode]).x -= 1;
  acheck = true;
  checkInput();
  }
  else if (tprogression > 2 || gprogression == 2 || gprogression == 4) {
    getFirst(playerSprites[mode]).x -= 1;
  }else if (gprogression == 1){
    if (boss2dead == true){
    getFirst(choose).remove()
    addSprite(0, 1, choose)
    }else{
    currentBoss = "Boss 2"
    setMap(levels[1])
        bossTime = false
    gprogression = 2 
     e1hit = 10
     s1hit = 10
     s2hit = 10
       updateBattleText()
    addSprite(2, 3, playerSprites[mode])
    addSprite(5, 2, enemy1)
    addSprite(4, 3, shield1)
    addSprite(4, 4, shield2)
    chipTimeStart()
    moveShieldRandomly(shield1)
    moveShieldRandomly(shield2)
    moveEnemyRandomly(enemy1)
    }
    }else if(gprogression == 55){
    upgrade(upgradeslot1)
    exitu()
  }
});

onInput("s", () => {
  if (tprogression == 2){
  addText("S", { x:15, y:13, color: color `4` })
  getFirst(playerSprites[mode]).y += 1; 
  scheck = true;
  checkInput();
  }
  else if (tprogression > 2 || gprogression == 2|| gprogression == 4) {
  getFirst(playerSprites[mode]).y += 1;
  }else if (gprogression == 1){
    if (boss4dead == true){
    getFirst(choose).remove()
    addSprite(1, 0, choose)
  }else{
    currentBoss = "Boss 4"
     
    setMap(levels[1])
      gprogression = 2 
   bossTime = false
     s1hit = 10
     s2hit = 10
     s3hit = 10
    addSprite(2, 3, playerSprites[mode])
    addSprite(5, 2, shield3)
    addSprite(4, 3, shield1)
    addSprite(4, 4, shield2)
    updateBattleText()
      chipTimeStart()
    moveShieldRandomly(shield1)
    moveShieldRandomly(shield2)
    moveEnemyRandomly(shield3)
      
    }
  }
});

onInput("d", () => {
  
  if (tprogression == 2){
  addText("D", { x:16, y:13, color: color `4` })
  getFirst(playerSprites[mode]).x += 1;
  dcheck = true;
    checkInput();
  }else if (tprogression > 2 || gprogression == 2 || gprogression == 4) {
    getFirst(playerSprites[mode]).x += 1;
  }else if (gprogression == 1){
    if (boss3dead == true){
    getFirst(choose).remove()
    addSprite(1, 0, choose)
  }else{
    currentBoss = "Boss 3"
      bossTime = false
    setMap(levels[1])
    gprogression = 2 
    e1hit = 1
    e2hit = 1
    s1hit = 1
    updateBattleText()
    addSprite(3, 3, playerSprites[mode]) 
    addSprite(5, 2, enemy1)
    addSprite(4, 3, enemy2)
    addSprite(4, 4, shield1)
    
    chipTimeStart()
    moveShieldRandomly(shield1)
    moveEnemyRandomly(enemy1)
    moveEnemyRandomly(enemy2)
    }
    }else if(gprogression == 55){
    upgrade(upgradeslot3)
    exitu()
  }
});
function exitu(){
if (gprogression == 55){
  death()
  disablechange = false
  disableTimer = 0
  canChip = false
  getFirst(upgradechip[upgradeslot1]).remove()
  getFirst(upgradechip[upgradeslot2]).remove()  
  getFirst(upgradechip[upgradeslot3]).remove()
  setMap(levels[1])
  clearText()
  if (bossTime == true){
  gprogression = 4
  }else{
  gprogression = 2
  }
      if (currentBoss == "Boss 1"){
    addSprite(playerX, playerY, playerSprites[mode])
     if (e1hit > 0){   
    addSprite(enemy1X, enemy1Y, enemy1)
     moveEnemyRandomly(enemy1)   
     }
    if (s1hit > 0){   
    addSprite(shield1X, shield1Y, shield1)
     moveShieldRandomly(shield1)   
     }
    if (s2hit > 0){   
    addSprite(shield2X, shield2Y, shield2)
     moveShieldRandomly(shield2)   
     }
    chipTimeStart()
       
      }else if (currentBoss == "Boss 2"){
  addSprite(playerX, playerY, playerSprites[mode])
     if (e1hit > 0){   
    addSprite(enemy1X, enemy1Y, enemy1)
     moveEnemyRandomly(enemy1)   
     }
    if (s1hit > 0){   
    addSprite(shield1X, shield1Y, shield1)
     moveShieldRandomly(shield1)   
     }
    if (s2hit > 0){   
    addSprite(shield2X, shield2Y, shield2)
     moveShieldRandomly(shield2)   
     }
    chipTimeStart()
        
      }else if (currentBoss == "Boss 3"){ 
   addSprite(playerX, playerY, playerSprites[mode])
     if (e1hit > 0){   
    addSprite(enemy1X, enemy1Y, enemy1)
     moveEnemyRandomly(enemy1)   
     }
    if (s1hit > 0){   
    addSprite(shield1X, shield1Y, shield1)
     moveShieldRandomly(shield1)   
     }
    if (e2hit > 0){   
    addSprite(enemy2X, enemy2Y, enemy2)
     moveEnemyRandomly(enemy2)   
     }

    chipTimeStart()
  
    
      }else if (currentBoss == "Boss 4"){
    addSprite(playerX, playerY, playerSprites[mode])
     if (s3hit > 0){   
    addSprite(shield3X, shield3Y, shield3)
      moveShieldRandomly(shield3)
     }
    if (s1hit > 0){   
    addSprite(shield1X, shield1Y, shield1)
     moveShieldRandomly(shield1)   
     }
    if (e2hit > 0){   
    addSprite(enemy2X, enemy2Y, enemy2)
      moveShieldRandomly(shield2) 
    }
    chipTimeStart()
      }
    
     
      
    }
}
  
onInput("j", () => {
  addText(`g: ${gprogression}`, { x:1, y:12, color: color `D` });
  if (tprogression == 3){
    if (canCharge) {
      hitDetect();
      startChargingCooldown();
    }else {
    playTune(overheat)
  }
    }else if (tprogression > 3 || gprogression > 1){
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
let enemyY;
let shotEnable = false
function hitDetect(){
  if (shotEnable == false){
  let k = 0
for (let i = 0; i < 6; i++) {
    frontTile = getTile(getFirst(playerSprites[mode]).x + i, getFirst(playerSprites[mode]).y);
     enemyInFront = frontTile.some(sprite => sprite.type === enemy1 || sprite.type === enemy2 || sprite.type === target1 || sprite.type === shield1|| sprite.type === shield2|| sprite.type === boss1|| sprite.type === clips|| sprite.type === arrow1);
    
    enemyX = frontTile.find(sprite => sprite.type === enemy1 || sprite.type === enemy2 || sprite.type === target1 || sprite.type === shield1|| sprite.type === shield2|| sprite.type === boss1|| sprite.type === clips|| sprite.type === arrow1)?.x;

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
  }else if (shotEnable == true && getFirst(playerSprites[mode]).x == 3) {
    let k = 0
for (let i = 0; i < 2; i++) {
    frontTile = getTile(getFirst(playerSprites[mode]).x + 1,  4 - i);
     enemyInFront = frontTile.some(sprite => sprite.type === enemy1 || sprite.type === enemy2 || sprite.type === target1 || sprite.type === shield1|| sprite.type === shield2);
    
    enemyY = frontTile.find(sprite => sprite.type === enemy1 || sprite.type === enemy2 || sprite.type === target1 || sprite.type === shield1|| sprite.type === shield2)?.y;

    // Check if enemy is directly in front on the same x-axis
    if (enemyInFront && enemyY === 4 - i) {
      
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
}
   function playerhit(){
     if (ball1Exists() == true){
     if (getFirst(playerSprites[mode]).x == getFirst(ball1).x && getFirst(playerSprites[mode]).y == getFirst(ball1).y){
       shotland = 1
     }
     }else if (ball2Exists() == true){
     if (getFirst(playerSprites[mode]).x == getFirst(ball2).x && getFirst(playerSprites[mode]).y == getFirst(ball2).y){
     shotland = 2
     }    
     }else{
       shotland - 0
   }
   }

function ouch(j){
  playTune(hit)
  if (shotEnable == false){
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
        t1hit = t1hit - (8 * busterPw)
        }
   }else if(enemyInFront = frontTile.some(sprite => sprite.type === enemy1 && enemyX === getFirst(playerSprites[mode]).x + j)){
    if (chargeState == 0){
        e1hit = e1hit - (1 * busterPw)
        }else if (chargeState == 1){
        e1hit = e1hit - (2 * busterPw)
        }else if (chargeState == 2){
        e1hit = e1hit - (3 * busterPw)
        }else if (chargeState == 3){
        e1hit = e1hit - (4 * busterPw)
        }else if (chargeState == 4){
        e1hit = e1hit - (8 * busterPw)
    }
     }else if(enemyInFront = frontTile.some(sprite => sprite.type === enemy2 && enemyX === getFirst(playerSprites[mode]).x + j)){
    if (chargeState == 0){
        e2hit = e2hit - (1 * busterPw)
        }else if (chargeState == 1){
        e2hit = e2hit - (2 * busterPw)
        }else if (chargeState == 2){
        e2hit = e2hit - (3 * busterPw)
        }else if (chargeState == 3){
        e2hit = e2hit - (4 * busterPw)
        }else if (chargeState == 4){
        e2hit = e2hit - (8 * busterPw)
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
        s1hit = s1hit - (8 * busterPw)
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
        s2hit = s2hit - 5
   }
}else if(enemyInFront = frontTile.some(sprite => sprite.type === shield3 && enemyX === getFirst(playerSprites[mode]).x + j)){
      if (chargeState == 0){
        s3hit = s3hit - 3
        }else if (chargeState == 1){
        s3hit = s3hit - 3
        }else if (chargeState == 2){
        s3hit = s3hit - 3
        }else if (chargeState == 3){
        s3hit = s3hit - 3
        }else if (chargeState == 4){
        s3hit = s3hit - 3
   }
}else if(enemyInFront = frontTile.some(sprite => sprite.type === arrow1 && enemyX === getFirst(playerSprites[mode]).x + j)){
      if (chargeState == 0){
        arhit = arhit - 1
        }else if (chargeState == 1){
        arhit = arhit - 2
        }else if (chargeState == 2){
        arhit = arhit - 3
        }else if (chargeState == 3){
        arhit = arhit - 5
        }else if (chargeState == 4){
        arhit = arhit - 8
   }
}
  }else if (shotEnable == true){
   if (enemyInFront == frontTile.some(sprite => sprite.type === target1 && enemyY === 4 + j)){
        if (chargeState == 0){
        t1hit = t1hit - (4 * busterPw)
        }else if (chargeState == 1){
        t1hit = t1hit - (4 * busterPw)
        }else if (chargeState == 2){
        t1hit = t1hit - (4 * busterPw)
        }else if (chargeState == 3){
        t1hit = t1hit - (4 * busterPw)
        }else if (chargeState == 4){
        t1hit = t1hit - (4 * busterPw)
        }
   }else if(enemyInFront = frontTile.some(sprite => sprite.type === enemy1 && enemyY === 4 - j)){
    if (chargeState == 0){
        e1hit = e1hit - (4 * busterPw)
        }else if (chargeState == 1){
        e1hit = e1hit - (4 * busterPw)
        }else if (chargeState == 2){
        e1hit = e1hit - (4 * busterPw)
        }else if (chargeState == 3){
        e1hit = e1hit - (4 * busterPw)
        }else if (chargeState == 4){
        e1hit = e1hit - (4 * busterPw)
    }
     }else if(enemyInFront = frontTile.some(sprite => sprite.type === enemy2 && enemyY === 4 - j)){
    if (chargeState == 0){
        e2hit = e2hit - (4 * busterPw)
        }else if (chargeState == 1){
        e2hit = e2hit - (4 * busterPw)
        }else if (chargeState == 2){
        e2hit = e2hit - (4 * busterPw)
        }else if (chargeState == 3){
        e2hit = e2hit - (4 * busterPw)
        }else if (chargeState == 4){
        e2hit = e2hit - (4 * busterPw)
    }
        }else if(enemyInFront = frontTile.some(sprite => sprite.type === shield1 && enemyY === 4 - j)){
      if (chargeState == 0){
        s1hit = s1hit - 3
        }else if (chargeState == 1){
        s1hit = s1hit - 3
        }else if (chargeState == 2){
        s1hit = s1hit - (3 * busterPw)
        }else if (chargeState == 3){
        s1hit = s1hit - (3 * busterPw)
        }else if (chargeState == 4){
        s1hit = s1hit - (3 * busterPw)
      }
   }else if(enemyInFront = frontTile.some(sprite => sprite.type === shield2 && enemyY === 4 - j)){
      if (chargeState == 0){
        s2hit = s2hit - 3
        }else if (chargeState == 1){
        s2hit = s2hit - 3
        }else if (chargeState == 2){
        s2hit = s2hit - 3
        }else if (chargeState == 3){
        s2hit = s2hit - 3
        }else if (chargeState == 4){
        s2hit = s2hit - 3
   }
}else if(enemyInFront = frontTile.some(sprite => sprite.type === shield3 && enemyY === 4 - j)){
      if (chargeState == 0){
        s3hit = s3hit - 3
        }else if (chargeState == 1){
        s3hit = s3hit - 3
        }else if (chargeState == 2){
        s3hit = s3hit - 3
        }else if (chargeState == 3){
        s3hit = s3hit - 3
        }else if (chargeState == 4){
        s3hit = s3hit - 3
   }
}
}
}
function death(){
  //tutorial deaths
 if (gprogression < 2){ 
if (t1hit <= 0){
   getFirst(target1).remove()
  if (tprogression == 3){
    tprogression = tprogression + 1
    tutorial();
  }else if (tprogression == 4){
    tprogression = tprogression + 1
    tutorial();
        }
}else if (s1hit <= 0){
   getFirst(shield1).remove()
}

 }else if (gprogression == 2) {
if (s1hit <= 0){
  clearInterval(movementIntervals1)
   getFirst(shield1).remove()
     
}  
if (e1hit <= 0){
   clearInterval(movementIntervale1)
      getFirst(enemy1).remove()  
} 
if (s2hit <= 0){
  clearInterval(movementIntervals2) 
    getFirst(shield2).remove()
    } 
if (s3hit <= 0){
  clearInterval(movementIntervals3) 
    getFirst(shield3).remove()
      
  
} 
if (e2hit <= 0){
  clearInterval(movementIntervale2)
   getFirst(enemy2).remove() 
  
}
 }
 if (currentBoss == "Boss 1"){
    if (e1hit <= 0 && s1hit <= 0 && s2hit <= 0){
    bossTime = true
    waveVic()
    setTimeout(() => {
    gprogression = 4 
    setMap(levels[1])
    clearText()
    updateBattleText()
    addSprite(2, 3, playerSprites[mode]) 
    addSprite(6, 3, boss1)
    addSprite(6, 4, clips)
    addSprite(6, 2, arrow1)
    chipTimeStart()
    moveboss1Randomly(arrow1)
    moveboss1Randomly(clips)
      }, 4000);
    } 
      }else if (currentBoss == "Boss 2"){
    if (e1hit <= 0 && s1hit <= 0 && s2hit <= 0){
    waveVic()
    }
      
    }else if (currentBoss == "Boss 3"){
    if (e1hit <= 0 && s1hit <= 0 && e2hit <= 0){
    waveVic()
    setTimeout(() => {
    
      }, 4000);
    }
      
      }else if (currentBoss == "Boss 4"){
    if (s1hit <= 0 && s2hit <= 0 && s3hit <= 0){
    waveVic()
    }   
      
 
   
  }
}
function waveVic(){
setMap(levels[0])
clearText()
addText("Pre Boss Wave", { x:4, y:6, color: color `2` })
addText("Complete!", { x:6, y:8, color: color `4` })
setTimeout(() => {
  addText("Loading Boss", { x:4, y:10, color: color `4` })
         
          }, 2000);
}

function checkInput(){
  if (tprogression == 2){
  if (wcheck == true && acheck == true && scheck == true && dcheck == true){
    tprogression = tprogression + 1
    tutorial();
  }if (tprogression == 3){
    if (jcheck == true){
    tprogression = tprogression + 1
    tutorial();
    }
  }
}
}

function moveShieldRandomly(spriteS) {
  if (gprogression == 2){
  let ey = 0;
 if (spriteS == shield1){
   
  movementIntervals1 = setInterval(() => {
    
    let currentTile = getTile(getFirst(spriteS).x, getFirst(spriteS).y + ey);
    const nextDirection = getRandomDirectionY();
   if (disableTimer == 0){
    switch (nextDirection) {
      case "up":
        ey = -1
        currentTile = getTile(getFirst(spriteS).x, getFirst(spriteS).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteS).y -= 1;
          ey = 0;
        } else {
          ey = 0;
        }
        break;
      case "down":
        ey = 1
        currentTile = getTile(getFirst(spriteS).x, getFirst(spriteS).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteS).y += 1;
          ey = 0;
        } else {
          ey = 0;
        }
        break;
    }
  } else {
     clearInterval(movementIntervals1)
   }
  }, enemySpeed);
 }else if (spriteS == shield2){
  movementIntervals2 = setInterval(() => {
    let currentTile = getTile(getFirst(spriteS).x, getFirst(spriteS).y + ey);
    const nextDirection = getRandomDirectionY();
if (disableTimer == 0){
    switch (nextDirection) {
      case "up":
        ey = -1
        currentTile = getTile(getFirst(spriteS).x, getFirst(spriteS).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteS).y -= 1;
          ey = 0;
        } else {
          ey = 0;
        }
        break;
      case "down":
        ey = 1
        currentTile = getTile(getFirst(spriteS).x, getFirst(spriteS).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteS).y += 1;
          ey = 0;
        } else {
          ey = 0;
        }
        break;
    }
    } else {
     clearInterval(movementIntervals2)
   }
  }, enemySpeed);// Adjust the interval for movement speed
 }else if (spriteS == shield3){
  movementIntervals3 = setInterval(() => {
    let currentTile = getTile(getFirst(spriteS).x, getFirst(spriteS).y + ey);
    const nextDirection = getRandomDirectionY();
if (disableTimer == 0){
    switch (nextDirection) {
      case "up":
        ey = -1
        currentTile = getTile(getFirst(spriteS).x, getFirst(spriteS).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteS).y -= 1;
          ey = 0;
        } else {
          ey = 0;
        }
        break;
      case "down":
        ey = 1
        currentTile = getTile(getFirst(spriteS).x, getFirst(spriteS).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteS).y += 1;
          ey = 0;
        } else {
          ey = 0;
        }
        break;
    }
    } else {
     clearInterval(movementIntervals3)
   }
  }, enemySpeed);// Adjust the interval for movement speed
 }
 }
}
function getRandomDirectionY() {
  const directions = ["up", "down"];
  return directions[Math.floor(Math.random() * 2)];
}
 
// Function to generate a random direction
function getRandomDirection() {
  return directions[Math.floor(Math.random() * directions.length)];
}
let movementIntervalb1a
let movementIntervalb1b
// Function to move the enemy on efloor
function moveboss1Randomly(spriteE) {
  let ey = 0;
  let ex = 0;
  if (gprogression == 4){
    if (spriteE == arrow1){
   movementIntervalb1a = setInterval(() => {
    let currentTile = getTile(getFirst(spriteE).x + ex, getFirst(spriteE).y + ey);
    const nextDirection = getRandomDirection();
    if (disableTimer == 0){
    switch (nextDirection) {
      case "up":
        ey = -1
        currentTile = getTile(getFirst(spriteE).x + ex, getFirst(spriteE).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteE).y -= 1;
          ey = 0;
          ex = 0;
        } else {
          ey = 0;
          ex = 0;
        }
        break;
      case "down":
        ey = 1
        currentTile = getTile(getFirst(spriteE).x + ex, getFirst(spriteE).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteE).y += 1;
          ey = 0;
          ex = 0;
          } else {
          ey = 0;
          ex = 0;
        }
        break;
      case "left":
        ex = -1
        currentTile = getTile(getFirst(spriteE).x + ex, getFirst(spriteE).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteE).x -= 1;
          ey = 0;
          ex = 0;
          } else {
          ey = 0;
          ex = 0;
        }
        break;
      case "right":
        ex = 1
        currentTile = getTile(getFirst(spriteE).x + ex, getFirst(spriteE).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteE).x += 1;
          ey = 0;
          ex = 0;
          } else {
          ey = 0;
          ex = 0;
        }
        break;
        case "shoot":
     if (spriteE == arrow1){
        randY = Math.floor(Math.random() * ((4-2)+2) + 2);
        for (i = 1; i < 4; i++){
          addSprite(i, randY, warning)
          }
 setTimeout(() => {
  
 for (i = 0; i < 4; i++){

if (checkCollision()) {
  poison()
  updateBattleText()
  getFirst(warning).remove()
}else{
getFirst(warning).remove()
  }
 }
 
          
      }, 1000);
       
        }
    }
   
    
    
    }else if(disableTimer == 1){
    clearInterval(movementIntervalb1a)  
      
    }
         }, enemySpeed); // Adjust the interval for movement speed
}else if(spriteE == clips){
movementIntervalb1b = setInterval(() => {
    let currentTile = getTile(getFirst(spriteE).x + ex, getFirst(spriteE).y + ey);
    const nextDirection = getRandomDirection();
    if (disableTimer == 0){
    switch (nextDirection) {
      case "up":
        ey = -1
        currentTile = getTile(getFirst(spriteE).x + ex, getFirst(spriteE).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteE).y -= 1;
          ey = 0;
          ex = 0;
        } else {
          ey = 0;
          ex = 0;
        }
        break;
      case "down":
        ey = 1
        currentTile = getTile(getFirst(spriteE).x + ex, getFirst(spriteE).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteE).y += 1;
          ey = 0;
          ex = 0;
          } else {
          ey = 0;
          ex = 0;
        }
        break;
      case "left":
        ex = -1
        currentTile = getTile(getFirst(spriteE).x + ex, getFirst(spriteE).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteE).x -= 1;
          ey = 0;
          ex = 0;
          } else {
          ey = 0;
          ex = 0;
        }
        break;
      case "right":
        ex = 1
        currentTile = getTile(getFirst(spriteE).x + ex, getFirst(spriteE).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteE).x += 1;
          ey = 0;
          ex = 0;
          } else {
          ey = 0;
          ex = 0;
        }
        break;
        case "shoot":
     if (spriteE == clips){
        randY = Math.floor(Math.random() * ((4-2)+2) + 2);
        for (i = 1; i < 4; i++){
          addSprite(i, randY, warning)
          }
 setTimeout(() => {
  
 for (i = 0; i < 4; i++){

if (checkCollision()) {
  poison()
  updateBattleText()
  getFirst(warning).remove()
}else{
getFirst(warning).remove()
  }
 }
 
          
      }, 1000);
       
        }
    }
   
    
    
    }else if(disableTimer == 1){
    clearInterval(movementIntervalb1b)  
      
    }
         }, enemySpeed);

    }
  }
}

let randY;
let virus;
let poisonloop = 0
function poison(){
poisonloop = 0
virus = setInterval(() => {
  if (poisonloop < 2){
  phit = phit - 2
    updateBattleText()
    poisonloop = poisonloop + 1
  }else{
    clearInterval(virus)
  }
    
}, 3000);
}



function checkCollision () {
  const sprites1 = getTile(getFirst(playerSprites[mode]).x, getFirst(playerSprites[mode]).y)
  const sprites2 = getTile(getFirst(warning).x, getFirst(warning).y)

  return sprites1.some(s => sprites2.includes(s))
}

// Example of how to use the function


// Function to move the enemy on efloor
function moveEnemyRandomly(spriteE) {
  let ey = 0;
  let ex = 0;
  if (gprogression == 2){
    if (spriteE == enemy1){
   movementIntervale1 = setInterval(() => {
    let currentTile = getTile(getFirst(spriteE).x + ex, getFirst(spriteE).y + ey);
    const nextDirection = getRandomDirection();
    if (disableTimer == 0){
    switch (nextDirection) {
      case "up":
        ey = -1
        currentTile = getTile(getFirst(spriteE).x + ex, getFirst(spriteE).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteE).y -= 1;
          ey = 0;
          ex = 0;
        } else {
          ey = 0;
          ex = 0;
        }
        break;
      case "down":
        ey = 1
        currentTile = getTile(getFirst(spriteE).x + ex, getFirst(spriteE).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteE).y += 1;
          ey = 0;
          ex = 0;
          } else {
          ey = 0;
          ex = 0;
        }
        break;
      case "left":
        ex = -1
        currentTile = getTile(getFirst(spriteE).x + ex, getFirst(spriteE).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteE).x -= 1;
          ey = 0;
          ex = 0;
          } else {
          ey = 0;
          ex = 0;
        }
        break;
      case "right":
        ex = 1
        currentTile = getTile(getFirst(spriteE).x + ex, getFirst(spriteE).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteE).x += 1;
          ey = 0;
          ex = 0;
          } else {
          ey = 0;
          ex = 0;
        }
        break;
        case "shoot":
        if (spriteE == enemy1){
        while (ball1Exists() != true){
        addSprite(getFirst(spriteE).x - 1, getFirst(spriteE).y, ball1);
        let movement = getFirst(spriteE).x
       shotInterval1 = setInterval(() => {
         if (disableTimer == 0){
          playerhit()
          if (shotland == 0){
          movement = movement - 1
          if (movement > 1){
         getFirst(ball1).x -= 1; 
          } else {
          getFirst(ball1).remove()
            clearInterval(shotInterval1)
          }
          }else if (shotland == 1){
            getFirst(ball1).remove()
            phit = phit - 5
            updateBattleText();
             clearInterval(shotInterval1)
            shotland = 0
          }
      }else if(disableTimer == 1){
    clearInterval(shotInterval1)  
      
    } 
           }, 500);
        }
      
        break;
    }
    }
    }else if(disableTimer == 1){
    clearInterval(movementIntervale1)  
      
    }
         }, enemySpeed); // Adjust the interval for movement speed
}else if (spriteE == enemy2){
   movementIntervale2 = setInterval(() => {
    let currentTile = getTile(getFirst(spriteE).x + ex, getFirst(spriteE).y + ey);
    const nextDirection = getRandomDirection();
if (disableTimer == 0){
    switch (nextDirection) {
      case "up":
        ey = -1
        currentTile = getTile(getFirst(spriteE).x + ex, getFirst(spriteE).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteE).y -= 1;
          ey = 0;
          ex = 0;
        } else {
          ey = 0;
          ex = 0;
        }
        break;
      case "down":
        ey = 1
        currentTile = getTile(getFirst(spriteE).x + ex, getFirst(spriteE).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteE).y += 1;
          ey = 0;
          ex = 0;
          } else {
          ey = 0;
          ex = 0;
        }
        break;
      case "left":
        ex = -1
        currentTile = getTile(getFirst(spriteE).x + ex, getFirst(spriteE).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteE).x -= 1;
          ey = 0;
          ex = 0;
          } else {
          ey = 0;
          ex = 0;
        }
        break;
      case "right":
        ex = 1
        currentTile = getTile(getFirst(spriteE).x + ex, getFirst(spriteE).y + ey);
        if (currentTile.some(sprite => sprite.type === efloor && sprite.type !== black)) {
          getFirst(spriteE).x += 1;
          ey = 0;
          ex = 0;
          } else {
          ey = 0;
          ex = 0;
        }
        break;
        case "shoot":
        if (spriteE == enemy2){
        while (ball2Exists() != true){
        addSprite(getFirst(spriteE).x - 1, getFirst(spriteE).y, ball2);
        let movement = getFirst(spriteE).x
       shotInterval2 = setInterval(() => {
         if (disableTimer == 0){
          playerhit()
          if (shotland == 0){
          movement = movement - 1
          if (movement > 1){
         getFirst(ball2).x -= 1; 
          } else {
          getFirst(ball2).remove()
            clearInterval(shotInterval2)
          }
          }else if (shotland == 2){
            getFirst(ball2).remove()
            phit = phit - 5
            updateBattleText();
             clearInterval(shotInterval2)
            shotland = 0
          }
         }else if(disableTimer == 1){
    clearInterval(shotInterval2)  
    } 
           }, 500);
        }
           break;
        }
    }
}else if(disableTimer == 1){
    clearInterval(movementIntervale2)  
    }
           }, enemySpeed); // Adjust the interval for movement speed
}
  }
}


function startChargingAnimation() {
  
  chargeStartTime = performance.now();
 charging = true;
  if (disableChange == false){
    if (tprogression >= 4 || gprogression > 1){
    chargeAnimationTimer = setInterval(() => {
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
}
function stopChargingAnimation() {
  elapsedTime = 0
  charging = false;
  replacePlayer(playerSprites[mode], 5);
  playback.end();
  playTune(shot);
}
function stopChargingTimer() {
  if (tprogression >= 4 || gprogression > 1){
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
  if (disableChange == false){
  let x = getFirst(playerSprites[mode]).x
  let y = getFirst(playerSprites[mode]).y
 getFirst(playerSprites[mode]).remove();
addSprite(x, y, playerSprites[newmode]);
  mode = newmode;
  }
}
function updateBattleText(){
if (tprogression <= 4 && tprogression > 1){
addText(`HP: ${phit}  `, { x:1, y:2, color: color `2` })
addText(`T1: ${t1hit}  `, { x:12, y:2, color: color `3` }) 
}else if (tprogression == 5){
  addText(`HP: ${phit}  `, { x:1, y:2, color: color `2` })
  addText(`S1: ${s1hit}  `, { x:12, y:2, color: color `3` })
} else if (gprogression > 1){
  addText(`HP: ${phit}  `, { x:1, y:2, color: color `2` })
  
  if (currentBoss == "Boss 2"){
     if (gprogression == 2){
       addText(`E1: ${e1hit}  `, { x:12, y:3, color: color `3` })
       addText(`S1: ${s1hit}  `, { x:12, y:2, color: color `3` })
       addText(`S2: ${s2hit}  `, { x:12, y:1, color: color `3` })
     }
  }else if (currentBoss == "Boss 3"){
     if (gprogression == 2){
       addText(`E1: ${e1hit}  `, { x:12, y:3, color: color `3` })
       addText(`E2: ${e2hit}  `, { x:12, y:2, color: color `3` })
       addText(`S1: ${s1hit}  `, { x:12, y:1, color: color `3` })
     }
    }else if (currentBoss == "Boss 4"){
     if (gprogression == 2){
       addText(`S1: ${s1hit}  `, { x:12, y:3, color: color `3` })
       addText(`S2: ${s2hit}  `, { x:12, y:2, color: color `3` })
       addText(`S3: ${s3hit}  `, { x:12, y:1, color: color `3` })
     }
    }else if (currentBoss == "Boss 1"){
     if (gprogression == 2){
       addText(`E1: ${e1hit}  `, { x:12, y:3, color: color `3` })
       addText(`S1: ${s1hit}  `, { x:12, y:2, color: color `3` })
       addText(`S2: ${s2hit}  `, { x:12, y:1, color: color `3` })
     }if (gprogression == 4){
       addText(`A1: ${arhit}  `, { x:12, y:3, color: color `3` })
     }
}
}
}


function upgrade(what){
if (what == 0){
  //busterUp
  console.log("bup");
  busterPw = 1.5
} else if (what == 3){
  //cool
  console.log("cool");
  chargeCooldownTime = 1000
} else if (what == 2){
  //speed
  console.log("speed");
  enemySpeed = 2000
}else if (what == 1){
  //shotgun
  console.log("shot");
  shotEnable = true 
}else if (what == 4){
  console.log("h30");
  //health30
phit = phit + 30
}else if (what == 5){
  console.log("h50");
  //health50
phit = phit + 50
}else if (what == 6){
  console.log("h100");
  //health100
  phit = phit + 100 
}
}


function chipTimeStart() {
  chipStartTime = performance.now();

  chipTimer = setInterval(() => {
    elapsedChipTime = performance.now() - chipStartTime;
    addText(`c time: ${elapsedChipTime}`, { x:0, y:0, color: color `D` });
    if (elapsedChipTime > 10000){
      canChip = true;
    } else {
     canChip = false;
    }
  }, 1000);
}


function ball1Exists(spriteType) {
  return getAll(ball1).length > 0;
}
function ball2Exists(spriteType) {
  return getAll(ball2).length > 0;
}

function stopChipTimer() {
  disableChange = true
  clearInterval(chipTimer)
  if (ball1Exists == true){
  clearInterval(shotInterval1)
  }
  if (ball2Exists == true){
  clearInterval(shotInterval2)
  }
  clearInterval(movementIntervale1)
  clearInterval(movementIntervals2)
  clearInterval(movementIntervale2)
  clearInterval(movementIntervals1)
  clearInterval(movementIntervals3)
  elapsedChipTime = 0
}






