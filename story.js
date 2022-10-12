import chalk from 'chalk';
import { eyeGraphic } from './helper-files/graphics.js';
const log = console.log;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

//intro and background story
export async function intro() {
  log(`
  Still feeling disoriented, you open your eyes.`);
  await sleep(3000);
  log(eyeGraphic);
  await sleep(3000);
  log(
    `You think to yourself, "I think it worked... yes... ` +
      chalk.bold(`IT FINALLY WORKED!"
      `)
  );
  await sleep(3000);
  log(`After decades of hard work, general ridicule, countless rejections, 
and ostracising from those you once considered if not friends, at least
respectable colleages... it worked.
`);
  await sleep(8000);
  log(`The slightly pixelated environment surrounds your whole field of view, and a
deep sense of pride and vindication takes over your mind and spirit.
`);
  await sleep(5000);
  log(`While your body lays comfortably on your office chair, your senses and your
consious mind are elsewhere. Thousands upon thousands of lines of code,
working together with absolutely revolutionary hardware has transported
your mind...
`);
  await sleep(10000);
  log(`You are INSIDE the game.`);
  await sleep(5000);
}

export async function roomDescriptions(x, y) {
  if (x <= 3 && x >= 1 && y <= 3 && y >= 1) {
    x === 2 && y === 2
      ? description22()
      : x === 2 && y === 3
      ? await description23()
      : x === 2 && y === 1
      ? await description21()
      : x === 1 && y === 1
      ? await description11()
      : x === 1 && y === 2
      ? await description12()
      : x === 1 && y === 3
      ? await description13()
      : x === 3 && y === 1
      ? await description31()
      : x === 3 && y === 2
      ? await description32()
      : x === 3 && y === 3
      ? await description33()
      : log(`*room not ready yet*
  `);
  } else return;
}

async function description11() {
  log(`
    You are in a spooky cemetery. An eerie feeling is in the air.
    `);
  await sleep(2000);
  log(`
      ,-=-.       ______     _
     /  +  \\\     />----->  _|1|_
     | ~~~ |    // -/- /  |_ H _|
     |R.I.P|   //  /  /     |S|
\\vV,,|_____|V,//_____/VvV,v,|_|/,,vhjwv/,
    `);
}
async function description12() {
  log(`
    You are in a desert. The hot air brings prespiration running down your temples.
    `);
  await sleep(2000);
  log(`
                /||\\
                ||||
                ||||
                |||| /|\\
           /|\\  |||| |||
           |||  |||| |||
           |||  |||| |||
           |||  |||| d||
           |||  |||||||/
           ||b._||||~~'
           \\||||||||
            '~~~||||
                ||||
                ||||
~~~~~~~~~~~~~~~~||||~~~~~~~~~~~~~~
  \\/..__..--  . |||| \\/  .  ..
\\/         \\/ \\/    \\/
        .  \\/              \\/    .
. \\/             .   \\/     .
   __...--..__..__       .     \\/
\\/  .   .    \\/     \\/    __..--..
    `);
  await sleep(3000);
  log(`
    To the far north, you see a triangular shape in the distance...
    `);
}
async function description13() {
  log(`
    Ahead of you is a misterious pyramid.
    `);
  await sleep(2000);
  log(`
               .
              /=\\\\
             /===\\ \\
            /=====\\' \\
           /=======\\'' \\
          /=========\\ ' '\\
         /===========\\''   \\
        /=============\\ ' '  \\
       /===============\\   ''  \\
      /=================\\' ' ' ' \\
     /===================\\' ' '  ' \\
    /=====================\\' '   ' ' \\
   /=======================\\  '   ' /
  /=========================\\   ' /
 /===========================\\'  /
/=============================\\/
    `);
}
async function description21() {
  log(`You come upon a misterious temple.
    `);
  await sleep(2000);
  log(`
               )\\         O_._._._A_._._._O         /(
                \\'--.___,'================='.___,--'/
                 \\'--._.__                 __._,--'/
                   \\  ,. l'~~~~~~~~~~~~~~~'l ,.  /
       __            \\||(_)!_!_!_.-._!_!_!(_)||/            __
       \\\\'-.__        ||_|____!!_|;|_!!____|_||        __,-'//
        \\\\    '==---='-----------'='-----------'=---=='    //
        | '--.                                         ,--' |
         \\  ,.'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',.  /
           \\||  ____,-------._,-------._,-------.____  ||/
            ||\\|___!'======="!'======="!'======="!___|/||
            || |---||--------||-| | |-!!--------||---| ||
  __O_____O_ll_lO_____O_____O|| |'|'| ||O_____O_____Ol_ll_O_____O__
  o H o o H o o H o o H o o |-----------| o o H o o H o o H o o H o
 ___H_____H_____H_____H____O =========== O____H_____H_____H_____H___
                          /|=============|\\
()______()______()______() '==== +-+ ====' ()______()______()______()
||{_}{_}||{_}{_}||{_}{_}/| ===== |_| ===== |\\{_}{_}||{_}{_}||{_}{_}||
||      ||      ||     / |==== s(   )s ====| \\     ||      ||      ||
======================()  =================  ()======================
----------------------/| ------------------- |\\----------------------
                     / |---------------------| \\
-'--'--'           ()  '---------------------'  ()
                   /| ------------------------- |\\    --'--'--'
       --'--'     / |---------------------------| \\    '--'
                ()  |___________________________|  ()           '--'-
  --'-          /| _______________________________  |\\
 --'           / |__________________________________| \\
    `);
}
function description22() {
  log(`
This is the start room.

You are in a blank room, with 4 doors. One to your north, one south, 
one to the west, and another to the east.
`);
}
async function description23() {
  log(`
    You are surrounded by mountains.
`);
  await sleep(2000);
  log(`
          /\\
         /**\\
        /****\\   /\\
       /      \\ /**\\
      /  /\\    /    \\        /\\    /\\  /\\      /\\            /\\/\\/\\  /\\
     /  /  \\  /      \\      /  \\/\\/  \\/  \\  /\\/  \\/\\  /\\  /\\/ / /  \\/  \\
    /  /    \\/ /\\     \\    /    \\ \\  /    \\/ /   /  \\/  \\/  \\  /    \\   \\
   /  /      \\/  \\/\\   \\  /      \\    /   /    \\
__/__/_______/___/__\\___\\__________________________________________________
`);
}
async function description31() {
  log(`
    You are standing by a castle.
    `);
  await sleep(2000);
  log(`
                                                  !_
                                                  |*~=-.,
                                                  |_,-''
                                                  |
                                                  |
                                                 /^\\
                   !_                           /   \\
                   |*'~-.,                     /,    \\
                   |.-~^'                     /#"     \\
                   |                        _/##_   _  \\_
              _   _|  _   _   _            [ ]_[ ]_[ ]_[ ]
             [ ]_[ ]_[ ]_[ ]_[ ]            |_=_-=_ - =_|
           !_ |_=_ =-_-_  = =_|           !_ |=_= -    |
           |*'--,_- _        |            |*'~-.,= []  |
           |.-'|=     []     |   !_       |_.-"'_-     |
           |   |_=- -        |   |*'~-.,  |  |=_-      |
          /^\\  |=_= -        |   |_,-~'  /^\\ |_ - =[]  |
      _  /   \\_|_=- _   _   _|  _|  _   /   \\|=_-      |
     [ ]/,    \\[ ]_[ ]_[ ]_[ ]_[ ]_[ ]_/,    \\[ ]=-    |
      |/#"     \\_=-___=__=__- =-_ -=_ /#"     \\| _ []  |
     _/##_   _  \\_-_ =  _____       _/##_   _  \\_ -    |\\
    [ ]_[ ]_[ ]_[ ]=_0~{_ _ _}~0   [ ]_[ ]_[ ]_[ ]=-   | \\
    |_=__-_=-_  =_|-=_ |  ,  |     |_=-___-_ =-__|_    |  \\
     | _- =-     |-_   | ((* |      |= _=       | -    |___\\
     |= -_=      |=  _ |  '  |      |_-=_       |=_    |/+\\|
     | =_  -     |_ = _ '-.-'       | =_ = =    |=_-   ||+||
     |-_=- _     |=_   =            |=_= -_     |  =   ||+||
     |=_- /+\\    | -=               |_=- /+\\    |=_    |^^^|
     |=_ |+|+|   |= -  -_,--,_      |_= |+|+|   |  -_  |=  |
     |  -|+|+|   |-_=  / |  | \\     |=_ |+|+|   |-=_   |_-/
     |=_=|+|+|   | =_= | |  | |     |_- |+|+|   |_ =   |=/
     | _ ^^^^^   |= -  | |  <&>     |=_=^^^^^   |_=-   |/
     |=_ =       | =_-_| |  | |     |   =_      | -_   |
     |_=-_       |=_=  | |  | |     |=_=        |=-    |
^^^^^^^^^^'^'^^'^'^'^^^""""""""^'^^''^^'^^'^^'^'^''^'^''^''^^
    `);
}
async function description32() {
  log(`
    You find yourself in a beautiful beach.
    `);
  await sleep(2000);
  log(`
              ,.  _~-.,               .
           ~''_ \\/,_. \\_
          / ,"_>@',__'~.)             |           .
          | |  @@@@'  ",! .           .          '
          |/   ^^@     .!  \\          |         /
          '' .^^^     ,'    '         |        .             .
           .^^^   .          \\                /          .
          .^^^       '  .     \\       |      /       . '
.,.,.     ^^^             ' .   .,+~''^''~+,.     , '
&&&&&&,  ,^^^^.  . ._ ..__ _  .'             '. '_ __ ____ __ _ .. .  .
%%%%%%%%%^^^^^^%%&&;_,.-=~''^''~=-.,__,.-=~''^''~=-.,__,.-=~''^''~=-.,
&&&&&%%%%%%%%%%%%%%%%%%&&;,.-=~''^''~=-.,__,.-=~''^''~=-.,__,.-=~''^''~=
%%%%%&&&&&&&&&&&%%%%&&&_,.;^''~=-.,__,.-=~''^''~=-.,__,.-=~''^''~=-.,__,
%%%%%%%%%&&&&&&&&&-=~''^''~=-.,__,.-=~''^''~=-.,__,.-==--^'~=-.,__,.-=~'
##mjy#####*"'
_,.-=~''^''~=-.,__,.-=~''^''~=-.,__,.-=~''^''~=-.,.-=~''^''~=-.,__,.-=~'

~''^''~=-.,__,.-=~''^''~=-.,__,.-=~''^''~=-.,__,.-=~''^''~=-.,__,.-=~''^
    `);
  await sleep(3000);
  log(`
    To the north you see what looks to be a lighthouse...
    `);
}
async function description33() {
  log(`
    You are standing by a lighthouse.
    `);
  await sleep(2000);
  log(`
            +             /
\\           |           /
  \\         |         /
    \\      / \\      /
      \\  /_____\\  /
      /  |__|__|  \\
    /  |;|     |;|  \\
  /    \\\\.    .  /    \\
/       ||:  .  |       \\
        ||:     |         \\
        ||:.    |           \\
        ||:    .|
        ||:   , |         /'\\
        ||:     |                                          /'\\
        ||: _ . |                             /'\\
       _||_| |__|                      ____
  ____~    |_|  |___           __-----~    ~'---,__             ___
-~                  ~---___,--~'                  ~~----_____-~'
'~----,____                      
    `);
}

/*idea for rooms in game:
                          
 +---------+   +---------+   +---------+
 |         |   |         |   |         |
 | pyramid |   |mountains|   |lighthouse|
 |         |   |         |   |         |
 +---------+   +---------+   +---------+

 +---------+   +---------+   +---------+
 |         |   |         |   |         |
 | desert  |   |  Start  |   |  beach  |
 |         |   |         |   |         |
 +---------+   +---------+   +---------+

 +---------+   +---------+   +---------+
 |         |   |         |   |         |
 |cemetery |   | temple  |   | castle  |
 |         |   |         |   |         |
 +---------+   +---------+   +---------+
 */
