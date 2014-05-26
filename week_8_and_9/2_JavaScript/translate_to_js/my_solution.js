// U3.W8-9: Challenge you're converting


// I worked on this challenge [by myself, with: ].

// 2. Pseudocode



// 3. Initial Solution

function super_fizzbuzz(array) {
    var newArray = [];
    for (var i in array) {
        if ((array[i] % 3 === 0) && (array[i] % 5 === 0)) {
            newArray.push("FizzBuzz");
        } else if (array[i] % 3 === 0) {
            newArray.push("Fizz");
        } else if (array[i] % 5 === 0) {
            newArray.push("Buzz");
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
}


// 4. Refactored Solution






// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE






// 5. Reflection
/*
This was a fun challenge beacause I had just worked through it in ruby and I wanted to see
what it would look like in javascript. Not surprisingly, it looked pretty similar, as the
languages are not so far apart. On the whole I like ruby more than javascript, but I like
javascript a lot too, as where ruby feels fluid and versatile, javascript feels more
precise and mechanical.


