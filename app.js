'use strict';

var allergy=prompt('Am I allergic to chocolate?').toLowerCase();
  console.log('fake-allergy',allergy);
  if(allergy==='yes'|| allergy==='y') {
    alert('WRONG');
  } else if(allergy==='no'|| allergy==='n') {
alert('You know me!');
    } else {
      alert('Did you even try?');
    }
var siblings=prompt('Do I have any siblings?').toLowerCase();
console.log('real-siblings', siblings)
  if(siblings==='no'|| siblings==='n' && allergy==='yes'|| allergy==='y') {
    alert('Wrong Again!');
  } else if (siblings==='no'|| siblings==='n' && allergy==='no'|| allergy==='n') {
    alert('Well, at least you got the first one right!');
  } else if (siblings==='yes'|| siblings==='y' && allergy==='yes'|| allergy==='y') {
    alert('You got this one right!');
  } else if (siblings==='yes'|| siblings==='y' && allergy==='no'|| allergy==='n') {
    alert('You know me very well!');
  } else {
    alert('Take a real guess next time!');
  }
var question=prompt('Did I spend too much time trying to think of a yes or no question?').toLowerCase();
console.log('over-thinking question', question);
  if(question==='yes'||question==='y') {
    alert('You know it!');
  }
  else {
    alert('Trust me, I really did.');
  }

var color=prompt('Is my favorite color yellow?').toLowerCase();
console.log('not-yellow',color);
  if(color==='yes'|| color==='y') {
  alert('Nope! Blue is my favorite color!');
} else if(color==='no'||'n') {
  alert('Correct! My favorite color is blue!');
} else {
  alert('It was a  yes or no! Take a guess!');
}
var naps=prompt('Am I a fan of naps?').toLowerCase();
console.log('napsarebest',naps)
  if(naps==='no'|| naps==='n') {
    alert('What? Naps are the best.');
  } else if(naps==='yes' || naps==='y') {
    alert('Of course! I love naps!');
  }

var el=document.getElementById('first');
el.textContent='Am I allergic to chocolate? Correct Answer: No';
var el=document.getElementById('second');
el.textContent='Do I have siblings? Correct Answer: Yes';
var el=document.getElementById('third');
el.textContent='Did I spend too much time trying to think of a yes or no question? Correct Answer: Yes/You Know It!';
var el=document.getElementById('fourth');
el.textContent='Is my favorite color yellow? Correct Answer: No, it is blue!';
var el=document.getElementById('fifth');
el.textContent='Am I a fan of naps? Correct Answer:Yes/of course! I love naps!';
