#!/usr/bin/node
import readline from "readline-promise";
import { promisify } from "util";
const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

main();

function main() {
    welcomeThePlayer();
    melvin(prompt);
}

async function melvin(prompt: any) {
    while (true) {
        const command: string = await prompt.questionAsync("> ");
        if ("quit" === command) {
            prompt.close();
            return;
        }
        console.log(command);
    }
}

function welcomeThePlayer() {
    const theWelcomeMessage = "Welcome to the caaaaaaves of Oooooooodiiiiiinnn";
    console.log(theWelcomeMessage);
}
