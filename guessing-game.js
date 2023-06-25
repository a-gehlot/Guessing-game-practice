import * as readline from 'node:readline';

let secretNumber;

let numAttempts = 5;

let r1 = readline.createInterface(
    process.stdin,
    process.stdout
)

const askGuess = () => {
    r1.question('Enter a guess: ', (answer) => {
        if (checkGuess(Number(answer))) {
            console.log('You win!');
            r1.close()
        } else {
            numAttempts -= 1;
            console.log(`You have ${numAttempts} remaining!`)
            askGuess()
        }
    })
}

const askRange = () => {
    r1.question('Enter a max number: ', (max) => {
        r1.question('Enter a min number: ', (min) => {
            secretNumber = randomInRange(min, max);
            askGuess();
        })
    })
}

const randomInRange = (low, high) => {
    return (Math.floor(Math.random() * (high - low + 1) + low));
}

const checkGuess = (num) => {
    if (num > secretNumber) {
        console.log('Too high.');
        return false;
    } else if (num < secretNumber) {
        console.log('Too low.');
        return false;
    } else {
        console.log('Correct!');
        return true;
    }
}
askRange()
