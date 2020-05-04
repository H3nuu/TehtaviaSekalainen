function yhteysTiedot(enimi, snimi, losoite, pnro, ptp, puh, sposti) {
  this.etunimi = enimi,
  this.sukunimi = snimi,
  this.lahiosoite = losoite,
  this.postinumero = pnro,
  this.postitoimipaikka = ptp,
  this.puhelinnumero = puh,
  this.sahkopostiosoite = sposti
}
var Henry = new yhteysTiedot("Henry", "Hynynen", "päivölänrinne 9 a 11", "04220", "0504901131", "hynynen6@gmail.com");
console.log(Henry.sukunimi);
