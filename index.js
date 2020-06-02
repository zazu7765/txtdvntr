// packages used
const prompt = require('prompt-sync')({ sigint: true });
const chalk = require('chalk');
const cfonts = require('cfonts')
// aliases
const log = console.log;
const dmg = chalk.bold.redBright;
const win = chalk.bold.greenBright;
const speak = chalk.yellowBright;
const choice = chalk.cyanBright;
const action = chalk.gray;
// variables
var quit = "";
var name = "";
var firstChoice = "";
var secondChoice = "";
var weapon = "";
//functions.
function printTitle(){
    cfonts.say('Untitled RPG|Demo', {
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
});};
function quitPrompt(){
    quit = prompt("Do you want to continue? (Yes or No): ")
    if (quit.toLowerCase() === "yes") {
        log(action("You have chosen to continue"));
    } else {
        log(dmg("You have exited."))
        return process.exit();
    };
};
//Title Screen
printTitle()
log("You wake up in a soft bed. Your surroundings appear to be that of a small house, potentially a cottage. Outside, the sky is almost dark, and the sun is setting. Hovering right above you is- \nA Fairy?")
log(speak("Hello there! My name’s Jasmine! What’s yours?"));
name = prompt("Your name: ");
console.clear()
//Intro
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
//choice 1
log("As you sit up, you notice your muscles are aching. You probably won’t be moving too much for today. It’s almost completely dark anyways.");
log(`Looking around the room, you notice a desk with an ornate set of stationery beside the bed. On the opposite side, a closet. The floor was made of wood, probably oak}. The walls were a light beige, with wooden beams running up the sides.`);
log(choice("Where do you want to go?\n\n Downstairs\n Outside"));
firstChoice = prompt("You decide to go: ");
if (firstChoice.toLowerCase() === "downstairs") {
    console.clear();
    log(action("You creep out of your room and walk downstairs."));
} else if (firstChoice.toLowerCase() === "outside"){
    console.clear();
    log(action("You get off the bed and head for the door. You look down and realize that you don't have any shoes. You decide to go downstairs to see if anyone has some."))
} else{
    console.clear();
    log(action("You must have hit your head pretty hard... you don't know where that is!"));
}
//choice 2
log("As you go downstairs, you hear the cries and cheers of people. You wonder what they're celebrating.\n\nAs your eyes adjust to the lighting, you see around 20 people around a series of tables, eating and drinking.\nThey appear to be a group of warriors.");
log(choice("What do you want to do?\n\n Find someone and ask for help\n Wait in the hallway for someone to help you."));
secondChoice = prompt("What do you do? (Ask or Wait): ");
if (secondChoice.toLowerCase() === "ask"){
    console.clear();
    log(action("You go around the tables and ask some of the warriors if they know who rescued you."));
} else if (secondChoice.toLowerCase() === "wait"){
    console.clear();
    log(action("You wait around for an hour or two..."));
} else{
    console.clear();
    log(action("There's no other course of action here!"));
    log(action("You decide to wait."));
}
log(speak("Hey there!"));
log(action("A woman in servant's dress has walked up to you."));
log(speak("Do you need anything?"));
log(action("You explain your situation."))
log(speak("Oh, the owner of the inn found you passed out in the town square last week. It's great that you've finally woken up!"))
log(action("You follow her to the owner of the inn."))
//choice 3
quitPrompt()
console.clear()
log("You meet a woman that looks suspiciously like the fairy you met earlier, Jasmine.")
log(speak(`Well, hello there ${name}!`));
log(dmg("Wait, how do you know my name?"));
log(speak("Oh, you don't remember me? I'm Jasmine!\n"));
log(action("You are completely stunned."));
log(speak("I'm a little special, you'll have to excuse my human form...\n\nFor now though, go to sleep. We'll start on your training tomorrow!"));
log(action("You head back to your room and go to sleep."))
//choice 4
quitPrompt();
console.clear()
log(action("You wake up in the same room as yesterday evening to the sound of a rooster crowing loudly outside."));
log(action("There's a note on the bedtable beside you. It reads:\n"));
log(speak("We're all waiting for you outside. Today's training day!"));
log("You see clothes and shoes resting on a chair.")
log(choice("Where do you want to go?\n Downstairs\n Outside"));
//choice 5 but reused first choice variable
firstChoice = prompt("You go: ")
if (firstChoice.toLowerCase() === "downstairs") {
    console.clear();
    log(action("You creep out of your room, change into proper clothing and walk downstairs."));
    log("There's a sign on the post next to the dining room. It reads:");
    log(speak("No food until training is over!"));
    log(action("You begrudgingly go outside."));
} else if (firstChoice.toLowerCase() === "outside") {
    console.clear();
    log(action("You get off the bed and change into clothes before running outside."))
} else {
    console.clear();
    log(action("You must have hit your head pretty hard... you don't know where that is!\n\nYou go outside."));
};
//final choice
//weapon choice
log(speak(`Well, ${name}! It's time for you to learn how to survive! It's time to choose your weapon!`));
log(choice("What weapon do you want to use?\n Sword\n Dagger\n Bow\n Staff\n Axe\n Hammer"));
weapon = prompt("Your weapon: ");
switch (weapon.toUpperCase){
    case 'SWORD':
        console.clear();
        log(`Wow! It seems you prefer long blades.`);
    case 'DAGGER':
        console.clear();
        log(`Wow! Future assasin perhaps?`);
    case 'BOW':
        console.clear();
        log(`A Ranger? Interesting...`);
    case 'STAFF':
        console.clear();
        log(`Mage? or MOnk?`);
    case 'AXE':
        console.clear();
        log(`Barbarian it is!`);
    case 'HAMMER':
        console.clear();
        log(`Planning on becoming a carpenter?`)
};
log(speak(`Well, what an interesting weapon! Never thought you'd pick a ${weapon}!`));
log(speak("Time to get practicing!"));
quitPrompt();
console.clear();
//Ending
printTitle();
log(dmg("Thank you for playing!\n\nHope you had a good time!"));
//Arrow function to quit
setTimeout(()=>{process.exit()},3000)