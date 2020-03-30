var textDate = document.getElementById("textDate");

var date = new Date();

textDate.innerHTML = date.getDate() + " " + plop() + " " + date.getFullYear();

function plop() {
  var mois = date.getMonth() + 1;

  if (mois === 1) {
    return "Janvier";
  } else if (mois === 2) {
    return "Fevrier";
  } else if (mois === 3) {
    return "Mars";
  } else if (mois === 4) {
    return "Avril";
  } else if (mois === 5) {
    return "Mai";
  } else if (mois === 6) {
    return "Juin";
  } else if (mois === 7) {
    return "Juillet";
  } else if (mois === 8) {
    return "Aout";
  } else if (mois === 9) {
    return "Septembre";
  } else if (mois === 10) {
    return "Octobre";
  } else if (mois === 11) {
    return "Novembre";
  } else if (mois === 12) {
    return "Décembre";
  } else {
    return "";
  }

  return mois;
}
