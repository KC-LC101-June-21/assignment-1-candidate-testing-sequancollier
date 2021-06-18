[![Work in Repl.it](https://classroom.github.com/assets/work-in-replit-14baed9a392b3a25080506f3b7b6d57f295ec2978f6f33ec97e36a161684cbe9.svg)](https://classroom.github.com/online_ide?assignment_repo_id=4846517&assignment_repo_type=AssignmentRepo)
# Candidate-Testing

prompt: 'What is your name?';
let name = prompt('What is your name?');
console.log(`Hey ${name} let's take a quick quiz!!!`);

let questions = [  '1. Who was the first American woman in space?','2. 5 kilometer == 5000 meter, true or false?', '3. (5+3)/2*10=, '4. Where do the Chiefs football team play?', '5. What is the minimum crew size for the ISS?'];

prompt :(questions);

let userAns = [ prompt('1. Who was the first American woman in space?'), prompt('2. 5 kilometer == 5000 meter, true or false'), prompt('3. (5+3)/2*10=, prompt('4. Where do the Chiefs football team play?'), prompt('5. What is the minimum crew size for the ISS?') ];

for(let i = 0; i < userAns.length; i++){
    userAns[i] = userAns[i].toLowerCase();
}

let correctAns = ['sally', 'true', '40','kansas city','3' ];

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
  console.log(`Hey ${name}, congratulations you have passed the quiz, Good Job!!! `);
}
else{
  console.log('Sorry, you did not pass, try again.');
}