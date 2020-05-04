function kuinkaVanha(vuosi, kuukausi, päivä) { // tämä oli todella haastava. Oli pakko luntata. muistin vasta lunttaamisen jälkeen tuon switch-komennon.
  function muutaVuodet(vuosi) {
    return vuosi*365.25;
  }
  function muutaKuukaudet(kuukausi) {
    switch (kuukausi-1) {
      case 0:
        return 0;
        break;
      case 1:
        return 31;
        break;
        case 2:
        return 59;
        break;
        case 3:
        return 90;
        break;
        case 4:
        return 120;
        break;
        case 5:
        return 151;
        break;
        case 6:
        return 181;
        break;
        case 7:
        return 212;
        break;
        case 8:
        return 243;
        break;
        case 9:
        return 273;
        break;
        case 10:
        return 304;
        break;
        case 11:
        return 334;
        break;
        default:
        return 0;
    }
  }
  syntaika = muutaVuodet(vuosi) + muutaKuukaudet(kuukausi) + päivä;
  nyt = muutaVuodet(2020) + muutaKuukaudet(4) + 21;
  console.log(nyt-syntaika);
}
