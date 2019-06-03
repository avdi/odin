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
    await enterCommandLoop(prompt);
    prompt.close();
}

const getOut = ["quit", "exit", "go away", "fuck off"];

async function enterCommandLoop(prompt: any): Promise<void> {
    const command: string = await prompt.questionAsync("> ");
    if (getOut.includes(command)) {
        return;
    } else if ("look" === command) {
        console.log("You are in a vast hall. It feels faintly floofy.");
        return enterCommandLoop(prompt);
    } else {
        console.log(command);
        return enterCommandLoop(prompt);
    }
}

function welcomeThePlayer() {
    const theWelcomeMessage = "Welcome to the caaaaaaves of Oooooooodiiiiiinnn";
    console.log(theWelcomeMessage);
}
