"use strict";

let userName = prompt("What is you name?");

function nameFunction() {
  document.getElementById("name").innerHTML = userName;
}

nameFunction();
if (userName == "") {
  userName = "User";
}







        // HERE STARTS THE QUIZ

function quizFunction() {
   alert(
    "I hope you are ready, I suppose that you looked into the pages because the questions are related to it. "
  );


  document.getElementById("Qs").innerHTML =
  "Questions";
document.getElementById("As").innerHTML =
  "Answers";


  let score = 0;
  let scoreCount = function () {
    score++;
  };


  alert("Okay, you need to answer by YES or NO, lets start")

         // Q1



         let fun1= function() {
 let age = prompt("Do you think Iam 24?").toLowerCase(); 
  while (age != "yes" && age != "no" && age != "y" && age != "n") {
    age = prompt("please pick: yes, no");
  }

  if (age == "yes" || age == "y") {
    document.getElementById("age").innerHTML =
      "Do you think Iam 24? you answered by (YES)";
    document.getElementById("ageResult").innerHTML =
      "<p style='color: green;'>Correct</p>";
    scoreCount();
  } else if (age == "no" || age == "n") {
    document.getElementById("age").innerHTML =
      "Do you think Iam 24? you answered by (NO)";
    document.getElementById("ageResult").innerHTML =
      "<p style='color: red;'>Wrong</p>";
  }
  } 
  fun1();

      //Q2


      let fun2 = function () {
  let edu = prompt("Did I graduate from al alBayt university ?").toLowerCase(); 
  while (edu != "yes" && edu != "no" && edu != "y" && edu != "n") {
    edu = prompt("please pick: yes, no");
  }

  if (edu == "yes" || edu == "y") {
    document.getElementById("edu").innerHTML =
      "Did I graduate from al alBayt university ?, you answered by (YES)";
    document.getElementById("eduResults").innerHTML =
      "<p style='color: red;'>Wrong</p>";
  } else if (edu == "no" || edu == "n") {
    document.getElementById("edu").innerHTML =
      "Did I graduate from al alBayt university ?, you answered by (NO)";
    document.getElementById("eduResults").innerHTML =
      "<p style='color: green;'>Correct</p>";
    scoreCount();
  }
  
}
fun2();
      // Q3

      let fun3 = function () {
  let xp = prompt("Did I worked for Umniah ?").toLowerCase(); 
  while (xp != "yes" && xp != "no" && xp != "y" && xp != "n") {
    xp = prompt("please pick: yes, no");
  }

  if (xp == "yes" || xp == "y") {
    document.getElementById("xp").innerHTML =
      "Did I worked for Umniah ? you answered by (YES)";
    document.getElementById("xpResults").innerHTML =
      "<p style='color: green;'>Correct</p>";
    scoreCount();
  } else if (xp == "no" || xp == "n") {
    document.getElementById("xp").innerHTML =
      "Did I worked for Umniah ? you answered by (NO)";
    document.getElementById("xpResults").innerHTML =
      "<p style='color: red;'>Wrong</p>";
  }

}
fun3();

     // Q4

     let fun4= function () {

  let city = prompt("Do you think I live in Amman?").toLowerCase(); 
  while (city != "yes" && city != "no" && city != "y" && city != "n") {
    city = prompt("please pick: yes, no");
  }

  if (city == "yes" || city == "y") {
    document.getElementById("city").innerHTML =
      "Do you think I live in Amman? you answered by (YES)";
    document.getElementById("cityResults").innerHTML =
      "<p style='color: red;'>Wrong</p>";
  } else if (city == "no" || city == "n") {
    document.getElementById("city").innerHTML =
      "Do you think I live in Amman? you answered by (NO)";
    document.getElementById("cityResults").innerHTML =
      "<p style='color: green;'>Correct</p>";
    scoreCount();
  }
}
fun4();


alert("This wasn't hard right?! Okay, answer by a number between 1-5")

             // Q5

             let fun5= function () {
  let xpNum = 0; 
  for (xpNum = 1; xpNum <= 4; xpNum++) {
    let xpNum1 = "How many years of working experience do you think I have?";

    let xpNum2 = prompt(xpNum1);

    if (xpNum2 === "4") {
      document.getElementById("xpNum").innerHTML =
        "How many years of working experience do you think I have? you answered by (" +
        xpNum2 +
        ")";

      document.getElementById("xpNumResults").innerHTML =
        "<p style='color: green;'>Correct</p>";
      scoreCount();

      alert("that's correct");
      break;
    } else if (xpNum2 > 4) {
      alert("too high");
    } else if (xpNum2 < 4) {
      alert("too low");
    } else {
      alert("Please try again");
    }

    if (xpNum2 !== "4") {
      document.getElementById("xpNum").innerHTML =
        "How many years of working experience do you think I have? you answered by (" +
        xpNum2 +
        ")";

      document.getElementById("xpNumResults").innerHTML =
        "<p style='color: red;'>Wrong</p>";
      
      // alert("You missed up!");
    }
  }
}
fun5();
 
 
 alert("We almost finished, here, you need to answer by one of the drinks in the list.")
 
 
            // Q6
            let fun6= function () {
  let drink = [
    "coffee",
    "cola",
    "tea",
    "juice",
    "milk",
    "ice tea",
    "ice coffee",
    "water",
  ]; 
  let drinkq = prompt(
    "What do you think I like to drink in the summer? you can answer by : coffee, cola, tea, juice, milk, ice tea, ice coffee, water"
  ).toLowerCase();

  for (let i = 1; i < 6; i++) {
    if (
      drinkq == drink[1] ||
      drinkq == drink[5] ||
      drinkq == drink[6] ||
      drinkq == drink[7]
    ) {
      document.getElementById("drink").innerHTML =
        "What do you think I like to drink in the summer? you answered by (" +
        drinkq +
        ")";

      document.getElementById("drinkResults").innerHTML =
        "<p style='color: green;'>Correct</p>";
      scoreCount();

      alert("that's correct");
      break;
    } 
    
    else if (
      drinkq == drink[0] ||
      drinkq == drink[2] ||
      drinkq == drink[3] ||
      drinkq == drink[4]
    ) {
      document.getElementById("drink").innerHTML =
        "What do you think I like to drink in the summer? you answered by (" +
        drinkq +
        ")";

      document.getElementById("drinkResults").innerHTML =
        "<p style='color: red;'>Wrong</p>";

      alert("Try again");
      drinkq = prompt(
        "What do you think I like to drink in the summer? you can answer by : coffee, cola, tea, juice, milk, ice tea, ice coffee, water"
      ).toLowerCase();
    }

    else if (
      drinkq !== drink[0] ||
      drinkq !== drink[1] ||
      drinkq !== drink[2] ||
      drinkq !== drink[3] ||
      drinkq !== drink[4] ||
      drinkq !== drink[5] ||
      drinkq !== drink[6] ||
      drinkq !== drink[7]
    ) {
      document.getElementById("drink").innerHTML =
        "What do you think I like to drink in the summer? you answered by (" +
        drinkq +
        ")";

      document.getElementById("drinkResults").innerHTML =
        "<p style='color: red;'>Wrong</p>";

      alert("Try again");
      drinkq = prompt(
        "What do you think I like to drink in the summer? you can answer by : coffee, cola, tea, juice, milk, ice tea, ice coffee, water"
      ).toLowerCase();

      
    }
  }

}
fun6();


alert("That was fun, you can view your score at the sheet below.")


     // SCORE DASH 

  document.getElementById("finalscore").innerHTML = score;
  document.getElementById("score").innerHTML =
    "Your final score is (knowing that the full mark is 6)";




}






