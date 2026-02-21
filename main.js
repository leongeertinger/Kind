const rl = require('readline');

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

const mainMenu = () => {
  console.log(`
=====================
    Be kind today
=====================

  1. Kind Gesture
  2. Quit
    `);
};

const randomGesture = () => {
  const gestures = ['Smile at', 'Compliment', 'Offer Help to', 'Share with', 'Listen to', 'Apologize to', 'Forgive', 'Encourage', 'Support', 'Appreciate'];
  return gestures[Math.floor(Math.random() * gestures.length)];
}

const handleInput = input => {
  switch (input.trim()) {
    case '1':
      console.log(`
      ${randomGesture()} someone today!
      `);
      readline.question('Press Enter to continue...', () => {
        runApp();
      });
      break;
    case '2':
      console.log(`
        Goodbye!
        `);
      readline.close();
      process.exit();
      break;
    default:
      console.log('Invalid input');
      runApp();
      break;
  }
}

const runApp = () => {
  mainMenu();
  readline.question('', handleInput);
}

runApp();
