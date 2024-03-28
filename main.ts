#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 10000; //dollars
let myPin = 1234;

console.log(chalk.green.bold("Welcome to ATM Machine"));
console.log(chalk.green.bold(`To run this application, Enter the following Detail:
ATM pin is : 1234`));


let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter Your Pin",
  },
]);
if (pinAnswer.pin === myPin) {
  console.log(chalk.green.bold("Your PIN code is Correct!!!"));
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select one option",
      type: "list",
      choices: ["withdraw", "check balance", "fast cash", "deposit"],
    },
  ]);
  if (operationAns.operation === "withdraw") {
    console.log(chalk.green.bold("Your are in withdraw mode"));
    
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter withdraw amount",
        type: "number",
      },
    ]);
    if(amountAns.amount > myBalance) {
      console.log(chalk.red.bold("Insufficient balance to withdraw"))
      console.log("Thanks for using this ATM Machine")
    }else{
      console.log(chalk.green.bold("You have withdraw: " + amountAns.amount));
      myBalance -= amountAns.amount;
      console.log("Your remaining balance is: " + myBalance);
      console.log("Thanks for using this ATM Machine")
    }
    
  } else if (operationAns.operation === "check balance") {
    console.log(chalk.green.bold("Your are in check balance mode"));
    console.log("Your balance is: " + myBalance);
    console.log("Thanks for using this ATM Machine")
  }else if (operationAns.operation === "fast cash") {
    console.log(chalk.green.bold("Your are in fast cash mode"));
    let fastCashAns = await inquirer.prompt([
      {
        name: "fastCash",
        message: "Please select one option",
        type: "list",
        choices: ["1000", "2000", "5000", "10000"],
      },
    ]);
    console.log(chalk.green.bold("You have withdraw: " + fastCashAns.fastCash));
    myBalance -= fastCashAns.fastCash;
    console.log("Your remaining balance is: " + myBalance);
    console.log("Thanks for using this ATM Machine")
  }else if (operationAns.operation === "deposit") {
    console.log(chalk.green.bold("Your are in deposit mode"));
    let depositAns = await inquirer.prompt([
      {
        name: "deposit",
        message: "Enter deposit amount",
        type: "number",
      },
    ]);
    console.log(chalk.green.bold("You have deposit: " + depositAns.deposit));
    myBalance += depositAns.deposit;
    console.log("Your remaining balance is: " + myBalance);
    console.log("Thanks for using this ATM Machine")
  } else {
    console.log(chalk.red.bold("Your operation is incorrect"));
    console.log("Thanks for using this ATM Machine")
  }
} else {
  console.log(chalk.red.bold("Warning!! your code is incorrect"));
  console.log("Thanks for using this ATM Machine");
}

