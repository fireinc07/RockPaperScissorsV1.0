function userChoice1() {
  document.getElementById("choiceId").innerHTML = "rock";
  document.getElementById("result").innerHTML = (compare("rock"));
}

function userChoice2() {
  document.getElementById("choiceId").innerHTML = "paper";
  document.getElementById("result").innerHTML = (compare("paper"));
}

function userChoice3() {
  document.getElementById("choiceId").innerHTML = "scissors";
  document.getElementById("result").innerHTML = (compare("scissors"));
}

var compare = function(choice) {

//First, get the computer choice
  var computerChoice = Math.random();
if (computerChoice < 0.34)
{computerChoice = "rock";}

else if(computerChoice <= 0.67)
{computerChoice = "paper";}

else {computerChoice = "scissors";}

document.getElementById("compId").innerHTML = computerChoice;

//Then, compare the two choices.

  if (choice === computerChoice)
{return "The result is a tie!";}

else if (choice === "rock")
{
if (computerChoice === "scissors")
{return "rock wins";}
else
{return "paper wins";}
}

else if (choice === "paper")
{
if (computerChoice === "rock")
{return "paper wins";}
else
{return "scissors wins";}
}

else if (choice === "scissors")
{
if (computerChoice === "rock")
{return "rock wins";}
else
{return "scissors wins";}
}
};

//Famous Feuds Slide Show
var imageTracker = 'a';
function changeimg() {
	var img1 = document.getElementById('feud1');
	if (imageTracker === 'a') {
	img1.src = '/webdesign/settlethefeud/images/cat.png';
	imageTracker = 'b';

} else if (imageTracker === 'b') {
	img1.src = '/webdesign/settlethefeud/images/rocky.png';
	imageTracker = 'c';

} else if (imageTracker === 'c'){
	img1.src = '/webdesign/settlethefeud/images/cat.png';
	imageTracker = 'a';
}
}
setInterval ("changeimg()",2000);

var imageTracker2 = 'a';
function changeimg2() {
	var img2 = document.getElementById('feud1B');
	if (imageTracker2 === 'a') {
	img2.src = '/webdesign/settlethefeud/images/mouse.png';
	imageTracker2 = 'b';

} else if (imageTracker2 === 'b') {
	img2.src = '/webdesign/settlethefeud/images/mrt.png';
	imageTracker2 = 'c';

} else if (imageTracker2 === 'c'){
	img2.src = '/webdesign/settlethefeud/images/mouse.png';
	imageTracker2 = 'a';
}
}
setInterval ("changeimg2()",2000);
