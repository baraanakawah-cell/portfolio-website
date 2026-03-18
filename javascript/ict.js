let antwoord = prompt("Hou je van ICT?");
let main = document.querySelector("main");

if (antwoord && antwoord.toLowerCase() === "ja") {
  alert("Wat leuk! Ontdek onze ICT-bedrijven!");
  main.style.display = "block";
} else if (antwoord && antwoord.toLowerCase() === "nee") {
  alert("Je hebt geluk, ga slapen!");
  main.style.display = "none";
} else {
  alert("Typ 'ja' of 'nee'.");
}