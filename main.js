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
  const gestures = ['Smile', 'Compliment', 'Offer Help', 'Share', 'Listen', 'Apologize', 'Forgive', 'Encourage', 'Support', 'Appreciate'];
  return gestures[Math.floor(Math.random() * gestures.length)];
}
