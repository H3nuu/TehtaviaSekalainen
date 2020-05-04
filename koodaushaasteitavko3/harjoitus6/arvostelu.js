function kouluArvosana(nimi,tulos) {
  if(tulos < 50 )
  {
    console.log(nimi + "hylätty");
  }
  else if (tulos < 60) {
    console.log(nimi + " T1");
  }
  else if (tulos < 70) {
    console.log(nimi + " T2");
  }
  else if (tulos < 80) {
    console.log(nimi + " H3");
  }
  else if (tulos < 90) {
    console.log(nimi + " H4");
  }
  else {
    console.log(nimi + " K5")
  }
}
kouluArvosana("Daniel",80);
kouluArvosana("Viivi",77);
kouluArvosana("Tiina",88);
kouluArvosana("Ismael",95);
kouluArvosana("Tuomas",68);
