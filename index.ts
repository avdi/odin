#!/usr/bin/node
import readline from "readline-promise";
import { promisify } from "util";


main();

async function main() {
    const prompt = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: true
    });
    welcomeThePlayer();
    await enterCommmandLoop(prompt);
    prompt.close();
}

const getOut = ["quit", "exit", "go away", "fuck off"];

async function enterCommmandLoop(prompt: any) {
    while (true) {
        const command: string = await prompt.questionAsync("> ");
        if (getOut.includes(command)) {
            return;
        }
        console.log(command);
    }
}

function welcomeThePlayer() {
    const theWelcomeMessage = "Welcome to the caaaaaaves of Oooooooodiiiiiinnn";
    console.log(theWelcomeMessage);
}
