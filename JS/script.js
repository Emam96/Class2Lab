"use strict";

let userName = prompt("What is you name?");

function nameFunction() {
  document.getElementById("name").innerHTML = userName;
}

nameFunction();
if (userName == "") {
  userName = "User";
}



function quizFunction() {
  let confirmation = confirm(
    "I hope you are ready, I suppose that you looked into the pages because the questions are related to it. "
  );


  let score = 0
let scoreCount = function(){
  score++;
}

  let age = prompt("Do you think Iam 24?").toLowerCase();   // Q1
  while (age != "yes" && age != "no" && age != "y" && age != "n") {
    age = prompt("please pick: yes, no");
  }

  if (age == "yes" || age == "y") {
    document.getElementById("age").innerHTML =
      "Do you think Iam 24? you answered by (" + age + ")";
    document.getElementById("ageResult").innerHTML =
      "<p style='color: green;'>Correct</p>";
      scoreCount();
  }
  else if (age == "no" || age == "n") {
    document.getElementById("age").innerHTML =
      "Do you think Iam 24? you answered by (" + age + ")";
    document.getElementById("ageResult").innerHTML =
      "<p style='color: red;'>Wrong</p>";
  }

  let edu = prompt("Did I graduate from al alBayt university ?").toLowerCase();  //Q2
  while (edu != "yes" && edu != "no" && edu != "y" && edu != "n") {
    edu = prompt("please pick: yes, no");
  }

  if (edu == "yes" || edu == "y") {
    document.getElementById("edu").innerHTML =
      "Did I graduate from al alBayt university ?, you answered by (" +
      edu +
      ")";
    document.getElementById("eduResults").innerHTML =
      "<p style='color: red;'>Wrong</p>";
  }
  else if (edu == "no" || edu == "n") {
    document.getElementById("edu").innerHTML =
      "Did I graduate from al alBayt university ?, you answered by (" +
      edu +
      ")";
    document.getElementById("eduResults").innerHTML =
      "<p style='color: green;'>Correct</p>";
      scoreCount();
  }

  let xp = prompt("Did I worked for Umniah ?").toLowerCase();     // Q3
  while (xp != "yes" && xp != "no" && xp != "y" && xp != "n") {
    xp = prompt("please pick: yes, no");
  }

  if (xp == "yes" || xp == "y") {
    document.getElementById("xp").innerHTML =
      "Did I worked for Umniah ? you answered by (" + edu + ")";
    document.getElementById("xpResults").innerHTML =
      "<p style='color: green;'>Correct</p>";
      scoreCount();
  }
  else if (xp == "no" || xp == "n") {
    document.getElementById("xp").innerHTML =
      "Did I worked for Umniah ? you answered by (" + edu + ")";
    document.getElementById("xpResults").innerHTML =
      "<p style='color: red;'>Wrong</p>";
  }

  let city = prompt("Do you think I live in Amman?").toLowerCase();     // Q4
  while (city != "yes" && city != "no" && city != "y" && city != "n") {
    city = prompt("please pick: yes, no");
  }

  if (city == "yes" || city == "y") {
    document.getElementById("city").innerHTML =
      "Do you think I live in Amman? you answered by (" + city + ")";
    document.getElementById("cityResults").innerHTML =
      "<p style='color: red;'>Wrong</p>";
  }
  else if (city == "no" || city == "n") {
    document.getElementById("city").innerHTML =
      "Do you think I live in Amman? you answered by (" + city + ")";
    document.getElementById("cityResults").innerHTML =
      "<p style='color: green;'>Correct</p>";
      scoreCount();
  }






  let xpNum = 0;                                                    // Q5
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




  



  let drink = ["coffee", "cola", "tea", "juice", "milk", "ice tea", "ice coffee", "water"]    // Q6
  let drinkq = prompt("What do you think I like to drink in the summer? you can answer by : coffee, cola, tea, juice, milk, ice tea, ice coffee, water").toLowerCase();

  for (let i = 1; i < 6; i++) {
    if ( drinkq == drink[1] || drinkq == drink[5] || drinkq == drink[6] || drinkq == drink[7]) {
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

    else if (drinkq == drink[0] || drinkq == drink[2] || drinkq == drink[3] || drinkq == drink[4]) {
      document.getElementById("drink").innerHTML =
        "What do you think I like to drink in the summer? you answered by (" +
        drinkq +
        ")";

      document.getElementById("drinkResults").innerHTML =
        "<p style='color: red;'>Wrong</p>";

        alert("Try again");
        drinkq = prompt("What do you think I like to drink in the summer? you can answer by : coffee, cola, tea, juice, milk, ice tea, ice coffee, water").toLowerCase();
    }

        if (drinkq !== drink[0] || drinkq !== drink[1] || drinkq !== drink[2] || drinkq !== drink[3] || drinkq !== drink[4] || drinkq !== drink[5] || drinkq !== drink[6] || drinkq !== drink[7]) {
          document.getElementById("drink").innerHTML =
        "What do you think I like to drink in the summer? you answered by (" +
        drinkq +
        ")";

      document.getElementById("drinkResults").innerHTML =
        "<p style='color: red;'>Wrong</p>";

        alert("Try again");
        drinkq = prompt("What do you think I like to drink in the summer? you can answer by : coffee, cola, tea, juice, milk, ice tea, ice coffee, water").toLowerCase();
    

      // alert("You missed up!");
    }
    }
    





    document.getElementById("finalscore").innerHTML = score
    document.getElementById("score").innerHTML = "Your final score is (knowing that the full mark is 6) >>>>"
    

    






    
  }
  

  

  // let fun = prompt("Do you want to know a fun fact about me?").toLowerCase();
  // while (fun != "yes" && fun != "no" && fun != "y" && fun != "n") {
  //   fun = prompt("please pick: yes, no");
  // }

  // if (fun == "yes" || fun == "y") {
  //   document.getElementById("fun").innerHTML =
  //     "Iam trying to learn programming so I can retire as soon as possible, Nothing funny about it? Exactly.";
  // }

  // if (fun == "no" || fun == "n") {
  //   document.getElementById("fun").innerHTML =
  //     "You didn't even want to hear my funny story? no worries";
  // } cringe


  



// quizFunction();
