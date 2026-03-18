let leeftijd = prompt("Hoe oud ben je?");
leeftijd = Number(leeftijd);

let main = document.querySelector("main");

if (leeftijd < 18) {
  alert("Je bent jonger dan 18 — ontdek alle leuke sportactiviteiten!");
  // Alle sporten blijven zichtbaar
  main.style.display = "block";
}
 else if (leeftijd >= 18) {
  alert("Je bent volwassen, ga werken!");
  // Alle sporten verdwijnen
  main.style.display = "none";
} 
else {
  alert("Dat lijkt geen geldige leeftijd. Probeer het opnieuw.");
}