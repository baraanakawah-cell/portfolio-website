// Controleer of het item "welkomgetoond" nog niet bestaat in sessionStorage 
if (!sessionStorage.getItem("welkomgetoond")) {

  

var naam = prompt("Wat is je naam?")
var datum = new Date();
 var uur = datum.getHours();
alert(uur);
if(uur> 1 && uur < 5)
{
    document.getElementById("begroeting").innerText = "Goedenacht " + naam
}

else if(uur >= 6 && uur < 12)
   {
document.getElementById("begroeting").innerText = "Goedemorgen " + naam
    }


else if(uur >= 12 && uur <= 17)
{
document.getElementById("begroeting").innerText = "Goedemiddag " + naam
}
else
{
   document.getElementById("begroeting").innerText = "Goedeavond " + naam
}
  // Sla in sessionStorage op dat het welkomstbericht al getoond is,
  // zodat het niet opnieuw verschijnt tijdens deze browsersessie
  sessionStorage.setItem("welkomgetoond", "ja");
}
