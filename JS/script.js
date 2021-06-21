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
  let age = prompt("Do you think Iam 24?").toLowerCase();
  while (age != "yes" && age != "no" && age != "y" && age != "n") {
    age = prompt("please pick: yes, no");
  }

  if (age == "yes") {
    document.getElementById("age").innerHTML = "Do you think Iam 24? you answered by "+age+" You was right, Iam 24 years old, Great!";
  }
  if (age == "no") {
    document.getElementById("age").innerHTML =
    "Do you think Iam 24? you answered by "+age+" You was wrong, Iam 24.";
  }
  if (age == "y") {
    document.getElementById("age").innerHTML =
    "Do you think Iam 24? you answered by "+age+" You was right, Iam 24 years old, Great!";
  }
  if (age == "n") {
    document.getElementById("age").innerHTML =
    "Do you think Iam 24? you answered by "+age+" You was wrong, Iam 24.";
  }

  let edu = prompt("Did I graduated from al alBayt university ?").toLowerCase();
  while (edu != "yes" && edu != "no" && edu != "y" && edu != "n") {
    edu = prompt("please pick: yes, no");
  }

  if (edu == "yes") {
    document.getElementById("edu").innerHTML = "Did I graduated from al alBayt university ?, you answered by "+edu+" :No. I graduated from Yarmouk university actually";
  }
  if (edu == "no") {
    document.getElementById("edu").innerHTML =
    "Did I graduated from al alBayt university ?, you answered by "+edu+" :Yes, I studied Business at Yarmouk university, I graduated with a very good score.";
  }
  if (edu == "y") {
    document.getElementById("edu").innerHTML =
    "Did I graduated from al alBayt university ?, you answered by "+edu+" :No. I graduated from Yarmouk university actually";
  }
  if (edu == "n") {
    document.getElementById("edu").innerHTML =
    "Did I graduated from al alBayt university ?, you answered by "+edu+" :Yes, I studied Business at Yarmouk university, I graduated with a very good score.";
  }


  let xp = prompt("Did I worked for Umniah ?").toLowerCase();
  while (xp != "yes" && xp != "no" && xp != "y" && xp != "n") {
    xp = prompt("please pick: yes, no");
  }

  if (xp == "yes") {
    document.getElementById("xp").innerHTML =
    "Did I worked for Umniah ? you answered by "+xp+" Yes, I worked as a customer care agent at Extensya first, then I moved to Umniah where I was a shop sales person, and now I am here.";
  }
  if (xp == "no") {
    document.getElementById("xp").innerHTML =
    "Did I worked for Umniah ? you answered by "+xp+" No I actually did.";
  }
  if (xp == "y") {
    document.getElementById("xp").innerHTML =
    "Did I worked for Umniah ? you answered by "+xp+" Yes, I worked as a customer care agent at Extensya first, then I moved to Umniah where I was a shop sales person, and now I am here.";
  }
  if (xp == "n") {
    document.getElementById("xp").innerHTML =
    "Did I worked for Umniah ? you answered by "+xp+" No I actually did.";
  }


  let city = prompt("Do you think I live in Amman?").toLowerCase();
  while (city != "yes" && city != "no" && city != "y" && city != "n") {
    city = prompt("please pick: yes, no");
  }

  if (city == "yes") {
    document.getElementById("city").innerHTML =
    "Do you think I live in Amman? you answered by "+city+" Nope, I live in Irbid";
  }
  if (city == "no") {
    document.getElementById("city").innerHTML =
    "Do you think I live in Amman? you answered by "+city+" Right!. I live in Irbid";
  }
  if (city == "y") {
    document.getElementById("city").innerHTML =
    "Do you think I live in Amman? you answered by "+city+" Nope, I live in Irbid";
  }
  if (city == "n") {
    document.getElementById("city").innerHTML =
    "Do you think I live in Amman? you answered by "+city+" Right!. I live in Irbid";
  }


  let fun = prompt("Do you want to know a fun fact about me?").toLowerCase();
  while (fun != "yes" && fun != "no" && fun != "y" && fun != "n") {
    fun = prompt("please pick: yes, no");
  }

  if (fun == "yes") {
    document.getElementById("fun").innerHTML =
      "Iam trying to learn programming so I can retire as soon as possible, Nothing funny about it? Exactly.";
  }
  if (fun == "no") {
    document.getElementById("fun").innerHTML =
      "You didn't even want to hear my funny story? no worries";
  }
  if (fun == "y") {
    document.getElementById("fun").innerHTML =
      "Iam trying to learn programming so I can retire as soon as possible, Nothing funny about it? Exactly.";
  }
  if (fun == "n") {
    document.getElementById("fun").innerHTML =
      "You didn't even want to hear my funny story? no worries";
  }

}

// quizFunction();
