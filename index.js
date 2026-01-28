let homeScore = document.getElementById("home-score");
let homeScoreValue = 0;

let guestScore = document.getElementById("guest-score");
let guestScoreValue = 0;

function updateLeader() {
   if (homeScoreValue > guestScoreValue) {
    homeScore.classList.add("leader");
    guestScore.classList.remove("leader");
  } else if (guestScoreValue > homeScoreValue) {
    guestScore.classList.add("leader");
    homeScore.classList.remove("leader");
  } else {
    homeScore.classList.remove("leader");
    guestScore.classList.remove("leader");
  }
}

function homePlusOne() {
    console.log("Hi");
    homeScoreValue += 1;
    homeScore.textContent = homeScoreValue;
    updateLeader();
    
}

function homePlusTwo() {
    console.log("Hi")
    homeScoreValue += 2;
    homeScore.textContent = homeScoreValue;
    updateLeader()
}

function homePlusThree() {
    console.log("Hi")
    homeScoreValue += 3;
    homeScore.textContent = homeScoreValue;
    updateLeader()
}

function guestPlusOne() {
    console.log("Hi")
    guestScoreValue += 1;
    guestScore.textContent = guestScoreValue;
    updateLeader()
}

function guestPlusTwo() {
    console.log("Hi")
    guestScoreValue += 2;
    guestScore.textContent = guestScoreValue;
    updateLeader()
}

function guestPlusThree() {
    console.log("Hi")
    guestScoreValue += 3;
    guestScore.textContent = guestScoreValue;
    updateLeader()
}

function resetHome() {
    console.log("Hi")
    homeScoreValue = 0;
    homeScore.textContent = homeScoreValue;
    updateLeader()
    
}


function resetGuest() {
    console.log("Hi")
    guestScoreValue = 0;
    guestScore.textContent = guestScoreValue;
    updateLeader();
    
}

