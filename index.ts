#!/usr/bin/node
import readline from "readline-promise";
const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

welcomeThePlayer();
echoACommand(prompt);

async function echoACommand(prompt: any) {
    const command: string = await prompt.questionAsync("> ");
    console.log(command);
    prompt.close();
}

function welcomeThePlayer() {
    const theWelcomeMessage = "Welcome to the caaaaaaves of Oooooooodiiiiiinnn";
    console.log(theWelcomeMessage);
}
