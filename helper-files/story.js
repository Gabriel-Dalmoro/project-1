import chalk from 'chalk';
import { eyeGraphic } from './graphics.js';
const log = console.log;
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

//intro and background story
export async function intro() {
  log(`Still feeling disoriented, you open your eyes.`);
  await sleep(3000);
  eyeGraphic;
  await sleep(3000);
  log(
    `You think to yourself, "I think it worked... yes... ` +
      chalk.bold(`IT FINALLY WORKED!"`)
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

export const ROOM_DESCRIPTIONS = {
  x1y1: `

  You are in a spooky cemetery. An eerie feeling is in the air.
    ,-=-.       ______     _
   /  +  \\\     />----->  _|1|_
   | ~~~ |    // -/- /  |_ H _|
   |R.I.P|   //  /  /     |S|
\\vV,,|_____|V,//_____/VvV,v,|_|/,,vhjwv/,
  `,
  x1y2: `

  You are in a desert. The hot air brings prespiration running down your temples.
   
              /||\d\
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
  `,
  x1y3: `

    Ahead of you is a misterious pyramid.
    
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
    `,
  x2y1: `
  
  You come upon a mysterious temple.
  
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
    `,
  x2y2: `

    This is the start room.
    
    You are in a blank room, with 4 doors. One to your north, one south, 
    one to the west, and another to the east.
    `,
  x2y3: `

    You are surrounded by mountains.

          /\\
         /**\\
        /****\\   /\\
       /      \\ /**\\
      /  /\\    /    \\        /\\    /\\  /\\      /\\            /\\/\\/\\  /\\
     /  /  \\  /      \\      /  \\/\\/  \\/  \\  /\\/  \\/\\  /\\  /\\/ / /  \\/  \\
    /  /    \\/ /\\     \\    /    \\ \\  /    \\/ /   /  \\/  \\/  \\  /    \\   \\
   /  /      \\/  \\/\\   \\  /      \\    /   /    \\
__/__/_______/___/__\\___\\__________________________________________________
`,
  x3y1: `

    You are standing by a castle.
    
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
    `,
  x3y2: `

    You find yourself in a beautiful beach.

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
    `,
  x3y3: `
  
    You are standing by a lighthouse.
    
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
    `,
};

export const ROOM_CHALLENGES = {
  room11: `
  A chill passes through you, and out of thin air a ghost appears.

  .-.
  .'   '.
  :g g   :
  : o    '.
 :         '.
:             '.
:  :         .   '.
:   :          ' . '.
'.. :            '. ';
   ':;             ':'
      :              '.
       '.              '.     .
         '''''''---..,___';.-'

`,
  room12: `
From the temple emerges a ninja who challenges you to battle!

`,
  room13: `
A firery dragon wreaks havoc on the castle!

`,
  room21: `
A great sand-worm emerges from the dunes and opens its gargantuan mouth to consume you!

`,
  room23: `
You enjoy the beach, and wish there was a surfbord around to catch some waves...

`,
  room31: `
You hear a loud rumbling, and notice the sarcophagus slowly opening...
From its depths emerges a mummy, waking up after millenia, it rises and moves towards you.

`,
  room32: `
You stumble upon a bear mother and her cubs, she growls at your for being too close!

`,
  room33: `
Upon entering, you discover the lighthouse is actually a rocket ship, and your way out of the game!

`,
};
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
