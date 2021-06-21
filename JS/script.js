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
  let age = prompt("Do you want to know how old I am?").toLowerCase();
  while (age != "yes" && age != "no" && age != "y" && age != "n") {
    age = prompt("please pick: yes, no");
  }

  if (age == "yes") {
    document.getElementById("age").innerHTML =
      "Iam 24 years old, Thank you for asking!";
  }
  if (age == "no") {
    document.getElementById("age").innerHTML =
      "You didn't want to know my age :c";
  }
  if (age == "y") {
    document.getElementById("age").innerHTML =
      "Iam 24 years old, Thank you for asking!";
  }
  if (age == "n") {
    document.getElementById("age").innerHTML =
      "You didn't want to know my age :c";
  }

  let edu = prompt("Do you want to know about my education?").toLowerCase();
  while (edu != "yes" && edu != "no" && edu != "y" && edu != "n") {
    edu = prompt("please pick: yes, no");
  }

  if (edu == "yes") {
    document.getElementById("edu").innerHTML =
      "I studied Business at Yarmouk university, I graduated with a very good score.";
  }
  if (edu == "no") {
    document.getElementById("edu").innerHTML =
      "You didn't want to know my education either :c";
  }
  if (edu == "y") {
    document.getElementById("edu").innerHTML =
      "I studied Business at Yarmouk university, I graduated with a very good score.";
  }
  if (edu == "n") {
    document.getElementById("edu").innerHTML =
      "You didn't want to know my education either :c";
  }


  let xp = prompt("Do you want to know about my work experience?").toLowerCase();
  while (xp != "yes" && xp != "no" && xp != "y" && xp != "n") {
    xp = prompt("please pick: yes, no");
  }

  if (xp == "yes") {
    document.getElementById("xp").innerHTML =
      "I worked as a customer care agent at Extensya first, then I moved to Umniah where I was a shop sales person, and now I am here.";
  }
  if (xp == "no") {
    document.getElementById("xp").innerHTML =
      "You didn't want to know my work experience, nevermind, kinda boring";
  }
  if (xp == "y") {
    document.getElementById("xp").innerHTML =
      "I worked as a customer care agent at Extensya first, then I moved to Umniah where I was a shop sales person, and now I am here.";
  }
  if (xp == "n") {
    document.getElementById("xp").innerHTML =
      "You didn't want to know my work experience, nevermind, kinda boring";
  }


  let city = prompt("Do you want to know from where I am?").toLowerCase();
  while (city != "yes" && city != "no" && city != "y" && city != "n") {
    city = prompt("please pick: yes, no");
  }

  if (city == "yes") {
    document.getElementById("city").innerHTML =
      "Iam from Jordan, and I live in Irbid";
  }
  if (city == "no") {
    document.getElementById("city").innerHTML =
      "You didn't want to know my location, thats fair";
  }
  if (city == "y") {
    document.getElementById("city").innerHTML =
      "Iam from Jordan, and I live in Irbid";
  }
  if (city == "n") {
    document.getElementById("city").innerHTML =
      "You didn't want to know my location, thats fair";
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
