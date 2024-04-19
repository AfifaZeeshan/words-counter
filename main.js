#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your Sentence to count the words:"
    }
]);
const words = answer.Sentence.trim().split(" "); // trim removes lines and whitespaces
// Print the array of words to the console
console.log(words);
// Print he word count of the sentence to the console
console.log(`The word count of your mentioned senetence is ${words.length}`);
