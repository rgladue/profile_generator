const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your name? ', (answer1) => {
  rl.question('What do you like to do with your free time? ', (answer2) => {
    rl.question('What is your favourite song? ', (answer3) => {
      rl.question('What is your favourite food to eat? ', (answer4) => {
        rl.question('What are you amazing at? ', (answer5) => {
         console.log(`\n${answer1} likes to ${answer2} while listening to ${answer3}. \n ${answer1} also loves eating ${answer4} while being the best at ${answer5}!`);
        
          rl.close();
        });
      });
    });
  });
});