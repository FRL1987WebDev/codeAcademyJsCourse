let raceNumber = Math.floor(Math.random() * 1000);

const runnerRegisteredEarly = true;
let runnerAge = 41; 

if (runnerAge >= 18 && runnerRegisteredEarly === true) {
  raceNumber += 1000;
  console.log(`You are ${raceNumber} and you will run at 9.30am`)
} else if (runnerAge >= 18 && runnerRegisteredEarly === false) {
  raceNumber += 1000;
  console.log(`You are runner ${raceNumber} and you will run at 11.00am`)
} else if (runnerAge < 18) {
  console.log(`You are runner ${raceNumber} an you will run at 12.30pm`)
} else {
  console.log('Please go and register.')
}
