#!/usr/bin/node
import readline from "readline-promise";
import { promisify } from "util";

class CommandPile {
    public takeAction(command: any, loopParams: HowToCommandLoop) {
        if ("scritch" === command) {
            console.log("SO FLOOFY");
            return enterCommandLoop(loopParams);
        }
        throw new Error("I hate you");
    }
}


main().catch(reason => {
    console.log(reason);
});

async function main() {
    const prompt = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: true
    });
    try {
        welcomeThePlayer();
        await enterCommandLoop({ prompt, commandPile: new CommandPile() });
    } finally {
        prompt.close();
    }
}

const getOut = ["quit", "exit", "go away", "fuck off"];

type HowToCommandLoop = { prompt: any; commandPile: CommandPile; };
async function enterCommandLoop(params: HowToCommandLoop): Promise<void> {
    const { prompt, commandPile } = params;
    const command: string = await prompt.questionAsync("> ");
    try {
        return commandPile.takeAction(command, params);
    } catch {
        if (getOut.includes(command)) {
            return;
        } else if ("look" === command) {
            console.log("You are in a vast hall. It feels faintly floofy.");
            return enterCommandLoop({ prompt, commandPile });
        } else {
            console.log(command);
            return enterCommandLoop({ prompt, commandPile });
        }
    }
}

function welcomeThePlayer() {
    const theWelcomeMessage = "Welcome to the caaaaaaves of Oooooooodiiiiiinnn";
    console.log(theWelcomeMessage);
}
