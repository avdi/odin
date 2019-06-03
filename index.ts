#!/usr/bin/node
import * as readline from "readline";
const prompt = readline.createInterface({ input: process.stdin, output: process.stdout });

welcomeThePlayer();
const p = new Promise((resolve, reject) => {
    prompt.question("> ", answer => {
        resolve(answer);
    });
});
p.then(answer => {
    console.log(answer);
    prompt.close();
})

function welcomeThePlayer() {
    const theWelcomeMessage = "Welcome to the caaaaaaves of Oooooooodiiiiiinnn";
    console.log(theWelcomeMessage);
}
