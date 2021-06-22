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

  let age = prompt("Do you think Iam 24?").toLowerCase();
  while (age != "yes" && age != "no" && age != "y" && age != "n") {
    age = prompt("please pick: yes, no");
  }

  if (age == "yes" || age == "y") {
    document.getElementById("age").innerHTML =
      "Do you think Iam 24? you answered by (" + age + ")";
    document.getElementById("ageResult").innerHTML =
      "<p style='color: green;'>Correct</p>";
  }
  if (age == "no" || age == "n") {
    document.getElementById("age").innerHTML =
      "Do you think Iam 24? you answered by (" + age + ")";
    document.getElementById("ageResult").innerHTML =
      "<p style='color: red;'>Wrong</p>";
  }

  let edu = prompt("Did I graduate from al alBayt university ?").toLowerCase();
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
  if (edu == "no" || edu == "n") {
    document.getElementById("edu").innerHTML =
      "Did I graduate from al alBayt university ?, you answered by (" +
      edu +
      ")";
    document.getElementById("eduResults").innerHTML =
      "<p style='color: green;'>Correct</p>";
  }

  let xp = prompt("Did I worked for Umniah ?").toLowerCase();
  while (xp != "yes" && xp != "no" && xp != "y" && xp != "n") {
    xp = prompt("please pick: yes, no");
  }

  if (xp == "yes" || xp == "y") {
    document.getElementById("xp").innerHTML =
      "Did I worked for Umniah ? you answered by (" + edu + ")";
    document.getElementById("xpResults").innerHTML =
      "<p style='color: green;'>Correct</p>";
  }
  if (xp == "no" || xp == "n") {
    document.getElementById("xp").innerHTML =
      "Did I worked for Umniah ? you answered by (" + edu + ")";
    document.getElementById("xpResults").innerHTML =
      "<p style='color: red;'>Wrong</p>";
  }

  let city = prompt("Do you think I live in Amman?").toLowerCase();
  while (city != "yes" && city != "no" && city != "y" && city != "n") {
    city = prompt("please pick: yes, no");
  }

  if (city == "yes" || city == "y") {
    document.getElementById("city").innerHTML =
      "Do you think I live in Amman? you answered by (" + city + ")";
    document.getElementById("cityResults").innerHTML =
      "<p style='color: red;'>Wrong</p>";
  }
  if (city == "no" || city == "n") {
    document.getElementById("city").innerHTML =
      "Do you think I live in Amman? you answered by (" + city + ")";
    document.getElementById("cityResults").innerHTML =
      "<p style='color: green;'>Correct</p>";
  }




  let xpNum = 0;
  for (xpNum = 0; xpNum <= 4; xpNum++) {
    let xpNum1 = "How many years of working experience do you think I have?";
    
    
    let xpNum2 = prompt(xpNum1);

    if (xpNum2 === "4") {
      document.getElementById("xpNum").innerHTML =
        "How many years of working experience do you think I have? you answered by (" +
        xpNum2 +
        ")";

      document.getElementById("xpNumResults").innerHTML =
        "<p style='color: green;'>Correct</p>";

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


  

}

// quizFunction();
