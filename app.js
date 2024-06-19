// Exercise 1 Section
console.log("EXERCISE 1 - Print Odds Cont.:\n==========\n")

// function printOdds(count)
// {
//     if (count < 0)
//     {
//         console.log(`Error: "count" must be a positive number`);
//         return;
//     }


//     for(let i = 1; i<= count; i++)
//     {
//         if (i % 2 !== 0)
//         {
//             console.log(i);
//         }
//     }
     
// }

// printOdds(10);
// printOdds(209);
// printOdds(-5);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


   
function checkAge(userName, age)
{  
        
    if (!userName || !age )
    {
        console.log(`Please enter your name age`);
    }
 
    const aboveSixteen = `Congrats ${userName} you can drive! WHOO?`;
    const belowSixteen = `Sorry ${userName}. You'll need to wait until you're 16.`;


    if (age >= 16)
    {
        console.log(aboveSixteen);
       
    }
    else
    {
       console.log (belowSixteen);     
        
    }

   
}

    checkAge('Tommo', '36');
    checkAge('Tyler', '10');
    checkAge('Vinny', '15');
    checkAge('Cardi', '22');
    checkAge('JJ', '16');