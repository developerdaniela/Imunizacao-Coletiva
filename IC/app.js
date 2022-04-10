#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';

let PlayerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        'Imunização Coletiva \n'
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
    ${chalk.bgBlueBright('Como Jogar')}
    Ola!

    ${chalk.red('O')} Virus ${chalk.blue('I')} Pessoa ${chalk.bgWhite(' ')} Centro ${chalk.bgGreenBright(' ')} Grama
    `)
}

await welcome()
await askName()

async function askName() {
    const anwsers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'Qual e seu nome?',
        default() {
            return 'Jogador';
        },
    });
    
    PlayerName = anwsers.player_name;
}

const spinner = createSpinner('Carregando Jogo...').start();
await sleep();

spinner.success({ text: `Jogo Carregado!` });