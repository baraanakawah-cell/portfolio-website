//zorg dat je in js elke actie met ; sluit
var naam = prompt("Houd je van voetbal of basketbal")
var datum = new Date();
 var uur = datum.getHours();
alert(uur);
if(uur> 1 && uur < 5)
{
    document.getElementById("begroeting").innerText = "goedenacht" + naam
}

else if(uur >= 6 && uur < 12)
   {
document.getElementById("begroeting").innerText = "goedemorgen " + naam
    }


else if(uur >= 12 && uur <= 17)
{
document.getElementById("begroeting").innerText = "goedemiddag" + naam
}
else
{
   document.getElementById("begroeting").innerText = "goedeavond " + naam
}
if(keuze == "voetbal")
{
document.getElementById("keuze").innerHTML = "<img src='https://tse4.mm.bing.net/th/id/OIP.3PEXm9J7rDA6TnsingoZmgHaEK?pid=Api&P=0&h=180'>";
}
else
{
document.getElementById("keuze").innerHTML = "<img src='https://tse4.mm.bing.net/th/id/OIP.trZhWoEXFaSxIisYsj_ABAHaE8?pid=Api&P=0&h=180'>";
}


//een naam met 5 letter of minder = welkom......dat is een korte naam
//een naam met meer dan 5 letters = welkom .....dat is een lange naam

if(naam.length < 6)
{
document.getElementById("begroeting").innerText = "Welkom " + naam  + " dat is een korte naam";
}
else
{
document.getElementById("begroeting").innerText = "Welkom " + naam  + " dat is een korte naam";
}
 
var leeftijd = prompt("Hoe oud ben je?")
if (leeftijd> 18)
{
   document.getElementById("keuze").innerHTML 
}
