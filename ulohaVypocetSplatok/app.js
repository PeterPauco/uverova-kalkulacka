// Listen for submit

document
  .getElementById("urokova-kalkulacka")
  .addEventListener("submit", computeResults);
function init() {
  document.getElementById("normal_search").value = "";
}
window.onload = init;

function computeResults(e) {
  // User Interface

  const UIuver = document.getElementById("uver").value;
  const UIpercento = document.getElementById("percento").value;
  const UImesiac = document.getElementById("mesiac").value;

  // ako sa to cele rata percento na rok a mesiac

  const vyskaUveru = parseFloat(UIuver);
  const vypocetUroku = parseFloat(UIpercento) / 100 / 12;
  const dlzkaSplacania = parseFloat(UImesiac) * 1;

  //mesacna splatka vypocet

  const x = Math.pow(1 + vypocetUroku, dlzkaSplacania);
  const mesacne = (vyskaUveru * x * vypocetUroku) / (x - 1);
  const splatka = mesacne.toFixed(2);

  //preplatenie

  const celkom = (mesacne * dlzkaSplacania - vyskaUveru).toFixed(2);

  //vypocet celkoveho navysenia

  const navysenie = (mesacne * dlzkaSplacania).toFixed(2);

  //zobrazenie vysledov

  document.getElementById("splatkaEuro").innerHTML = "€ " + splatka;

  document.getElementById("celkomEuro").innerHTML = "€ " + celkom;

  document.getElementById("navysenieEuro").innerHTML = "€ " + navysenie;

  e.preventDefault();
}
