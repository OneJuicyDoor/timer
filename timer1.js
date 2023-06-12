let durations = process.argv.slice(2);
//Loop through each number provided
for (let duration of durations) {
   //Make each imput a number
  let seconds = Number(duration); 
 //check if each imput is actually a valid number, if not log that its not a number
  if (typeof seconds !== 'number' || isNaN(seconds) || seconds < 0) { 
    console.log("not a valid number");
  } else {
    setTimeout(() => { //beep after the correct amount of time (also say it beeped cause the sound seems to have trouble playing in succsion)
      console.log("it beeped");
      process.stdout.write('\x07');
    }, seconds * 1000);
  }
}
