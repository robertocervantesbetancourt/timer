const args = process.argv;

//loop through every argument
for (let x = 2; x < args.length; x++){

  //check if argument is negative or not an integer
  if (Number(args[x]) < 0 || !Number.isInteger(Number(args[x]))) {

  } 
  //play alarm after x seconds
  else {
    setTimeout(() => {
      console.log(`${args[x]} seconds alarm`);
      process.stdout.write('\x07');
    }, args[x] * 1000)
  }
};
  
