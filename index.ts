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

class CommandPile {
    public takeAction(command: any) {
        command = command;
        throw new Error("I hate you");
    }
}

async function enterCommandLoop(prompt: any, commandPile: CommandPile): Promise<void> {
    const command: string = await prompt.questionAsync("> ");
    try {
        return commandPile.takeAction(command);
    } catch {
        if (getOut.includes(command)) {
            return;
        } else if ("look" === command) {
            console.log("You are in a vast hall. It feels faintly floofy.");
            return enterCommandLoop(prompt, commandPile);
        } else {
            console.log(command);
            return enterCommandLoop(prompt, commandPile);
        }
    }
}

function welcomeThePlayer() {
    const theWelcomeMessage = "Welcome to the caaaaaaves of Oooooooodiiiiiinnn";
    console.log(theWelcomeMessage);
}
