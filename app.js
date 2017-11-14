'use strict';

var answersRight=0;
function questionOne() {

  var el=document.getElementById('first');
  el.textContent='Am I allergic to chocolate?';
  var allergy = prompt('Am I allergic to chocolate?').toLowerCase();
  console.log('fake-allergy', allergy);

  if (allergy === 'no' || allergy === 'n') {
    alert('You know me!');
    answersRight+=1;
  }
  else if (allergy === 'yes' || allergy === 'y') {
    alert('WRONG');
  }
  else {
    alert('Did you even try?');
  }
  el.textContent+=' The correct answer is: No';
}
questionOne();

function questionTwo() {

  var el=document.getElementById('second');
  el.textContent='Do I have siblings?';

  var siblings = prompt('Do I have any siblings?').toLowerCase();
  console.log('real-siblings', siblings);

  if ((answersRight === 1) && (siblings === 'yes' || siblings === 'y')) {
    alert('You know me very well!');
    answersRight+=1;
  }
  else if ((answersRight === 1) && (siblings === 'no' || siblings === 'n')) {
    alert('Well, at least you got the first one right!');
  }
  else if ((answersRight === 0) && (siblings === 'yes' || siblings === 'y')) {
    alert('You got this one right!');
    answersRight+=1;
  }
  else if ((answersRight === 0) && (siblings === 'no' || siblings === 'n')) {
    alert('Wrong Again!');
  }
  else {
    alert('Take a real guess next time!');
  }

  el.textContent+=' The correct answer is: Yes';
}
questionTwo();

function questionThree() {

  var el=document.getElementById('third');
  el.textContent='Did I spend too much time trying to think of a yes or no question?';

  var question = prompt('Did I spend too much time trying to think of a yes or no question?').toLowerCase();
  console.log('over-thinking-question', question);

  if (question === 'yes' || question === 'y') {
    alert('You know it!');
    answersRight+=1;
  }
  else {
    alert('Trust me, I really did.');
  }
  el.textContent+= 'The correct answer is: You know it!';
}
questionThree();

function questionFour() {

  var el=document.getElementById('fourth');
  el.textContent='Is my favorite color yellow? Correct Answer: No, it is blue!';

  var color = prompt('Is my favorite color yellow?').toLowerCase();
  console.log('not-yellow', color);

  if (color === 'no' || color === 'n') {
    alert('Correct! My favorite color is blue!');
    answersRight+=1;
  }
  else if (color == 'yes' || color == 'y') {
    alert('Nope! Blue is my favorite color!');
  }
  else {
    alert('It was a yes or no! Take a guess!');
  }

  el.textContent+=' The correct answer is: No, it is blue!';
}
questionFour();

function questionFive() {

  var el=document.getElementById('fifth');
  el.textContent='Am I a fan of naps?';

  var naps = prompt('Am I a fan of naps?').toLowerCase();
  console.log('naps-are-best', naps);

  if (naps === 'yes' || naps === 'y') {
    alert('Of course! I love naps!');
    answersRight+=1;
  }
  else if (naps === 'no' || naps === 'n') {
    alert('What? Naps are the best.');
  }

  el.textContent+=' The correct answer is: Yes/You Know It!';
}
questionFive();

function questionSix() {

  var el=document.getElementById('sixth');
  el.textContent='How many years have I worked at my current job?';

  var job=prompt('How many years have I worked at my current job?').toLowerCase();
  var counter=0;
  while (counter<4 && job!=7) {
    console.log('Guess-again!');
    if (job<7) {
      job=prompt('That was too low, guess again! How many years have I worked at my current job?');
    } else if (job>7) {
      job=prompt('That was too high, guess again! How many years have I worked at my current job?');
    }
    counter+=1;
  }
  if (job<7) {
    alert('That was too low. The correct answer is 7.');
  } else if (job>7) {
    alert('That was too high. The correct answer is 7.');
  }
  else{
    alert('7 is correct!')
    answersRight+=1;
  }
  console.log('jobtoolong',job);

  el.textContent+=' The correct answer is 7.';
}
questionSix();

function questionSeven() {

  var el=document.getElementById('seventh');
  el.textContent='Name one of my Top Three Countries I want to travel to.';

  var travel=prompt('Name one of my Top Three Countries I want to travel to.').toLowerCase();
  var counter=0;
  while (counter<6 && travel!='ireland' && travel!='scotland' && travel!='italy') {
    console.log('not correct');
    console.log(travel);
    travel= prompt('Not in my current top three! Guess Again!').toLowerCase();
    counter+=1;
  }
  console.log('top-three-travel');/*for some reason it won't take the right answer the first time fix*/
  if (travel!='ireland' && travel!='scotland' && travel!='italy') {
    alert('Good Try! My current top three countries are Ireland, Scotland, and Italy');
  } else {
    alert('Correct! My top three countries are: Ireland, Scotland, and Italy!');
    answersRight+=1;
    console.log('Three-travel');
  }
  el.textContent+=' The correct answers are: Ireland, Scotland, and Italy!';
}
questionSeven();

alert('You got '+ answersRight +' Out of 7');
