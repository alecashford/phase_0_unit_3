// U3.W8-9: Gradebook from Names and Scores

// I worked on this challenge [by myself, with:]

// These are the votes cast by each student. Do not alter these objects here.
var votes = {
  "Alex": { president: "Bob", vicePresident: "Devin", secretary: "Gail", treasurer: "Kerry" },
  "Bob": { president: "Mary", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Cindy": { president: "Cindy", vicePresident: "Hermann", secretary: "Bob", treasurer: "Bob" },
  "Devin": { president: "Louise", vicePresident: "John", secretary: "Bob", treasurer: "Fred" },
  "Ernest": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Fred": { president: "Louise", vicePresident: "Alex", secretary: "Ivy", treasurer: "Ivy" },
  "Gail": { president: "Fred", vicePresident: "Alex", secretary: "Ivy", treasurer: "Bob" },
  "Hermann": { president: "Ivy", vicePresident: "Kerry", secretary: "Fred", treasurer: "Ivy" },
  "Ivy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Gail" },
  "John": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Kerry" },
  "Kerry": { president: "Fred", vicePresident: "Mary", secretary: "Fred", treasurer: "Ivy" },
  "Louise": { president: "Nate", vicePresident: "Alex", secretary: "Mary", treasurer: "Ivy" },
  "Mary": { president: "Louise", vicePresident: "Oscar", secretary: "Nate", treasurer: "Ivy" },
  "Nate": { president: "Oscar", vicePresident: "Hermann", secretary: "Fred", treasurer: "Tracy" },
  "Oscar": { president: "Paulina", vicePresident: "Nate", secretary: "Fred", treasurer: "Ivy" },
  "Paulina": { president: "Louise", vicePresident: "Bob", secretary: "Devin", treasurer: "Ivy" },
  "Quintin": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Bob" },
  "Romanda": { president: "Louise", vicePresident: "Steve", secretary: "Fred", treasurer: "Ivy" },
  "Steve": { president: "Tracy", vicePresident: "Kerry", secretary: "Oscar", treasurer: "Xavier" },
  "Tracy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Ullyses": { president: "Louise", vicePresident: "Hermann", secretary: "Ivy", treasurer: "Bob" },
  "Valorie": { president: "Wesley", vicePresident: "Bob", secretary: "Alex", treasurer: "Ivy" },
  "Wesley": { president: "Bob", vicePresident: "Yvonne", secretary: "Valorie", treasurer: "Ivy" },
  "Xavier": { president: "Steve", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Yvonne": { president: "Bob", vicePresident: "Zane", secretary: "Fred", treasurer: "Hermann" },
  "Zane": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Mary" }
};

// Tally the votes in voteCount.
var voteCount = {
  president: {},
  vicePresident: {},
  secretary: {},
  treasurer: {}
};




/* Once the votes have been tallied, assign each officer position the name of the 
student who received the most votes. */
var officers = {
  president: undefined,
  vicePresident: undefined,
  secretary: undefined,
  treasurer: undefined
};

// Pseudocode


// __________________________________________
// Initial Solution

var prezList = [];
var vpList = [];
var secList = [];
var tresList = [];

function countVotes(votes) {
    for (var a in votes) {
        var prez = votes[a].president;
        if (voteCount.president[prez] === undefined) {
            voteCount.president[prez] = 1;
            prezList.push(prez);
        } else {
            voteCount.president[prez] += 1;
            }
        }
    for (var b in votes) {
        var vp = votes[b].vicePresident;
        if (voteCount.vicePresident[vp] === undefined) {
            voteCount.vicePresident[vp] = 1;
            vpList.push(vp);
        } else {
            voteCount.vicePresident[vp] += 1;
            }
        }
    for (var c in votes) {
        var sec = votes[c].secretary;
        if (voteCount.secretary[sec] === undefined) {
            voteCount.secretary[sec] = 1;
            secList.push(sec);
        } else {
            voteCount.secretary[sec] += 1;
            }
        }
    for (var d in votes) {
        var tres = votes[d].treasurer;
        if (voteCount.treasurer[tres] === undefined) {
            voteCount.treasurer[tres] = 1;
            tresList.push(tres);
        } else {
            voteCount.treasurer[tres] += 1;
            }
        }
}

function appoint() {
    var min = 1;
    for (var a in prezList) {
        var prez = prezList[a];
        if (voteCount.president[prez] > min) {
            min = voteCount.president[prez];
            officers.president = prez;
            }
        }
    min = 1;
    for (var b in vpList) {
        var vp = vpList[b];
        if (voteCount.vicePresident[vp] > min) {
            min = voteCount.vicePresident[vp];
            officers.vicePresident = vp;
            }    
        }
    min = 1;
    for (var c in secList) {
        var sec = secList[c];
        if (voteCount.secretary[sec] > min) {
            min = voteCount.secretary[sec];
            officers.secretary = sec;
            }
        }
    min = 1;
    for (var i in tresList) {
        var tres = secList[i];
        if (voteCount.treasurer[tres] > min) {
            min = voteCount.treasurer[tres];
            officers.treasurer = tres;
            }
        }
}

countVotes(votes);
appoint();






// __________________________________________
// Refactored Solution






// __________________________________________
// Reflection
/*
This challenge took me a long time (~4 hours) but was a good refresher of a lot of javascript concepts.
I definitely feel more equipped to handle other javascript puzzles. The frustrating thing I found
was when something wouldn't work, and I had not idea why. You just have to go through a time-consuming
process of pouring over your code, printing out different sections, and trying again. Ultimately,
my answer was not very DRY, but it also less taxing on the computer.

*/
// __________________________________________
// Driver Code:  Do not alter code below this line.


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (voteCount.president["Bob"] === 3),
  "Bob should receive three votes for President.",
  "1. "
)

assert(
  (voteCount.vicePresident["Bob"] === 2),
  "Bob should receive two votes for Vice President.",
  "2. "
)

assert(
  (voteCount.secretary["Bob"] === 2),
  "Bob should receive two votes for Secretary.",
  "3. "
)

assert(
  (voteCount.treasurer["Bob"] === 4),
  "Bob should receive four votes for Treasurer.",
  "4. "
)

assert(
  (officers.president === "Louise"),
  "Louise should be elected President.",
  "5. "
)

assert(
  (officers.vicePresident === "Hermann"),
  "Hermann should be elected Vice President.",
  "6. "
)

assert(
  (officers.secretary === "Fred"),
  "Fred should be elected Secretary.",
  "7. "
)

assert(
  (officers.treasurer === "Ivy"),
  "Ivy should be elected Treasurer.",
  "8. "
)