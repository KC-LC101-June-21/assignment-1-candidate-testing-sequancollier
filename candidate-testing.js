const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
//let candidateName = "";
let candidateName = input.question("What is your name?");
console.log(`Hey ${candidateName} let's take a quick quiz!!!`);
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let questions = ['1. Who was the first American woman in space?','2. True or false: 5 kilometer === 5000 meters?', '3. (5+3)/2*10 = ?', '4. Given the array [ 8, Orbit, Trajectory, 45 ], what entry is at index 2?', '5. What is the minimum crew size for the ISS?'];

console.log(questions);



let userAns = [ input.question('1. Who was the first American woman in space?'), input.question('2. True or false: 5 kilometer === 5000 meters?'), input.question('3. (5+3)/2*10 = ?'), input.question('4. Given the array [ 8, Orbit, Trajectory, 45 ], what entry is at index 2?'), input.question('5. What is the minimum crew size for the ISS?') ];

for(let i = 0; i < userAns.length; i++){
    userAns[i] = userAns[i].toLowerCase();
}

let correctAns = ['sally', 'true', '40','trajectory','3' ];

console.log(`The answers you provided: ${userAns}`);

let ansCorrect = [];

for (let i = 0; i < userAns.length; i++){
  for (let j = 0; j < correctAns.length; j++){
    if (userAns[i] === correctAns[j]){
ansCorrect.push(userAns[i]);
    }
  }
}

console.log(`These are the answers that are correct: ${ansCorrect}`);

let x = ansCorrect.length;
let percentage = (x/5) *100 +'%';
console.log(`Your overall score was ${percentage}.`);

if( x > 3){
  console.log(`Hey ${candidateName}, congratulations you have passed the quiz, Good Job!!! `);
}
else{
  console.log('Sorry, you did not pass, try again.');
}
 ///