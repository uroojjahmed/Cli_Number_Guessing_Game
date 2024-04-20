#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWelcome to  -Cli Number Guessing Game-  with Urooj Ahmed\n");

const randomNumber = Math.floor(Math.random() * 6 + 1);
const Answer = await inquirer.prompt([
    {
        name: "guessedTheNumber",
        type: "number",
        message: "Enter your guess number between 1 to 6 : ",
    },
]);
if(Answer.guessedTheNumber === randomNumber ){
    console.log("Congratulation ! Youer guess number is  correct . ");
}
else{
    console.log("Sorry,You guess a wrong number.try again.");
}
