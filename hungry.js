const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Are you hungry ', (answer) => {
  if(answer=="yes")
  {
  console.log(`eat samosa`);
  }
  else{
      console.log('do your homework');
  }

  rl.close();
});