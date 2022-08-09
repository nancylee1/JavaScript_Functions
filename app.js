console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    if (count < 0){
        for (let i = -1; i >= count; i--){
            if (i % 2 != 0){
                console.log (i)
            }   
        }
    }   else {
        for (let i = 1; i <= count; i++){
            if (i % 2 != 0){
                console.log(i)
            }
        }
    }
}
printOdds(100);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age){
    let aboveSixteen = "You can drive!";
    let belowSixteen = "Sorry, but you need to wait until you're 16.";

    if (age < 16){
        console.log(aboveSixteen);
    }
    else{
        console.log(belowSixteen);
    }
}
console.log (checkAge(50));
console.log (checkAge(12));

// Exercise 3: Which Quadrant?

function whichQuadrant (x,y){
    if (x > 0 && y > 0){
        return 1;
    } else if (x < 0 && y > 0){
        return 2;
    } else if (x < 0 && y < 0){
        return 3; 
    } else if (x > 0 && y < 0){
        return 4;
    } else if (x == 0 && y != 0){
        return "x-axis"
    } else if (x != 0 && y == 0){
        return "y-axis"
    } else {
        return "origin";
    }
}

console.log (whichQuadrant(1,2));
console.log (whichQuadrant(-1,2));
console.log (whichQuadrant(-1,-2));
console.log (whichQuadrant(1,-2));
console.log (whichQuadrant(0,2));
console.log (whichQuadrant(1,0));
console.log (whichQuadrant(0,0));

// Exercise 4: What type of triangle?
function isValidTriangle (a,b,c){
    return (a + b > c || a + c > b || b + c > a)
}
function checkTriangle (a,b,c){
    let isValid = isValidTriangle(a,b,c);
    if (isValid){
        // what type of triangle?
        if (a == b && b == c){
            return "equilateral";
        }
        if (a == b || b == c || a == c){
            return "isosceles";
        }
        if (a != b && b != c && c != a){
            return "scalene";
        }
    } else {
        return "not a valid triangle";
    }
}

console.log (checkTriangle(2,2,2));
console.log (checkTriangle(2,2,4));
console.log (checkTriangle(1,2,3));
console.log (checkTriangle(0,0,0));

// Exercise 5: Data Plan Status

// Write a function that will display feedback on cell phone data usage. Cell phone
// plans for this particular company give you a certain amount of data every 30 days
// which must be used or they are lost (no rollover). We want to track the average amount of data
//  used per day and inform the user if they are using too much data or can
// afford to use more.

// Write a function that accepts the following parameters:

// - `planLimit`: amount of data in the plan per 30 day period
// - `day`: the current day in the 30 day period
// - `usage`: the total amount of data used so far

// The function should compute whether the user is over, under, or right on the average
// daily usage under the plan. It should also inform them of how much data is left
// and how much, on average, they can use per day for the rest of the month. If
// they’ve run out of data, it should inform them of that too.

// For example, if the user enters `planLimit = 100`, `day = 15`, and `usage = 56`, your program should print
// out something similar to the following.

// ```txt
// 15 days used, 15 days remaining
// Average daily use: 3.333 GB/day
// You are EXCEEDING your average daily use (3.73 GB/day),
// continuing this high usage, you'll exceed your data plan by
// 11.9 GB.
// To stay below your data plan, use no more than 2.93 GB/day.
// ```

function dataUsageFeedback(planLimit, day, usage){
    let periodLength = 30;
    console.log(`${day} day(s) dataUsageFeedback, ${periodLength} - day} day(s) remaining`);
    console.log(`Average daily use: ${planLimit} / day} GB/day`);
}

console.log(dataUsageFeedback(80, 25, 40));
console.log(dataUsageFeedback(40, 30, 15));