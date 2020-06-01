const prompt = require('prompt-sync')({ sigint: true });
const chalk = require('chalk');
const animate = require('chalk-animation')
const cfonts = require('cfonts')
const log = console.log;
const dmg = chalk.bold.redBright;
const win = chalk.bold.greenBright;
const speak = chalk.yellowBright;
const choice = chalk.cyanBright;
const action = chalk.gray;
var name = ''
cfonts.say('Untitled RPG', {
    font: 'simple3d',              // define the font face
    align: 'left',              // define text alignment
    colors: ['black','white'],         // define all colors
    background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 2,           // define letter spacing
    lineHeight: 2,              // define the line height
    space: true,                // define if the output text should have empty lines on top and on the bottom
    maxLength: '0',             // define how many character can be on one line
    gradient: ['green','magenta'],            // define your two gradient colors
    independentGradient: false, // define if you want to recalculate the gradient for each new line
    transitionGradient: false,  // define if this is a transition between colors directly
    env: 'node'                 // define the environment CFonts is being executed in
});
//Intro
cfonts.render("Untitled RPG")
log("You wake up in a soft bed. Your surroundings appear to be that of a small house, potentially a cottage. Outside, the sky is almost dark, and the sun is setting. Hovering right above you is- \nA Fairy?")
log(speak("Hello there! My name’s Jasmine! What’s yours?"));
name = prompt("Your name: ");
console.clear()
log(speak(`Welcome to Alivia, ${name}! Do you know how you got here ?
    Oh, you don’t know ? Well, okay then! 
You don’t know what Alivia is either ?
    Hmm, you seem to have severe memory loss…
    Okay! I’ll explain it to you just this once!
Alivia is a city right on the border of the Dark Lands, a border city.
Alivia is part of a nation called the Cardinal Union, a community of fighters from all around the continent! There are 13 other cities, not including our capital, Esagend. 
Together, we form the Cardinal Union.
Anyways, because Alivia is a border city, we have a lot of people going on expeditions to mine and to loot.That’s probably your best start, ${name}!
I’ll leave you alone for now!`
));
log("As you sit up, you notice your muscles are aching. You probably won’t be moving too much for today. It’s almost completely dark anyways.");
log(`Looking around the room, you notice a desk with an ornate set of stationery beside the bed. On the opposite side, a closet. The floor was made of wood, probably oak}. The walls were a light beige, with wooden beams running up the sides.`);
log(choice("Where do you want to go?\n\n Downstairs\n Outside"));
firstChoice = prompt("You decide to go: ");
if (firstChoice.toLowerCase() === "downstairs"){
    log(action("You head off "))
} else if (firstChoice.toLowerCase() === "outside"){
    log(action("You get off the bed and head for the door. You look down and realize that you don't have any shoes. You decide to go downstairs to see if anyone has some."))
} else{
    animate.glitch("You must have hit your head pretty hard... you don't know where that is!");
    setTimeout(()=>{log(action("You go downstairs."))},2000);
}

log("As you go downstairs, you hear the cries and cheers of people. You wonder what they're celebrating.\n\nAs the picture settles into your view, ")