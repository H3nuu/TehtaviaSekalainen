function posiNega(){
    var luku = document.getElementById("eka").value;
    if(luku < 0 ){
        alert("Lukusi " + luku + " on negatiivinen luku")
    }
    else if (luku > 0){
         alert("Lukusi " + luku + " on positiivinen luku")
    }
    else{
        alert("Lukusi on nolla!")
    }
}

function viikonPaiva(){
    var paiva = document.getElementById("viikonpaiva").value;
    if(paiva == 1){
        alert("Valitsemasi päivä " + paiva + " tarkoittaa maanantaita")
    }
    else if(paiva == 2){
        alert("Valitsemasi päivä " + paiva + " tarkoittaa tiistaita")
    }
    else if(paiva == 3){
        alert("Valitsemasi päivä " + paiva + " tarkoittaa keskiviikkoa")
    }
    else if(paiva == 4){
        alert("Valitsemasi päivä " + paiva + " tarkoittaa torstaita")
    }
    else if(paiva == 5){
        alert("Valitsemasi päivä " + paiva + " tarkoittaa perjantaita")
    }
    else if(paiva == 6){
        alert("Valitsemasi päivä " + paiva + " tarkoittaa lauantaita")
    }
    else if(paiva == 7){
        alert("Valitsemasi päivä " + paiva + " tarkoittaa sunnuntaita")
    }
    else{
        alert("valitse muunnettava numero!")
    }
}

function karkausVuosi(){
    var vuosi = document.getElementById("karkaus").value; //huomasin, että js onclick pitää karkaus.value:ta luultavasti stringinä ,  // joten === operaattorit  tai ==! eivät toimi
    if(vuosi % 4 == 0 && vuosi % 100 != 0){                  //varmaankin, koska input ovat text-muodossa
        alert("Valitsemasi vuosi " + vuosi + " on karkausvuosi");
    }
    else if(vuosi % 400 == 0){
        alert("Valitsemasi vuosi " + vuosi + " on karkausvuosi");
    }
    else{
        alert("Valitsemasi vuosi " + vuosi + " ei ole karkausvuosi")
    }
}

function summaKeskiarvo(){
var ekaLuku = document.getElementById("luku1").value
var tokaLuku = document.getElementById("luku2").value
var kolmasLuku = document.getElementById("luku3").value
var neljasLuku = document.getElementById("luku4").value
var viidesLuku = document.getElementById("luku5").value
var luvuksi = parseInt(ekaLuku); // Onkohan tähän joku yksinkertaisempi ratkaisu?
var luvuksi2 = parseInt(tokaLuku);
var luvuksi3 = parseInt(kolmasLuku);
var luvuksi4 = parseInt(neljasLuku);
var luvuksi5 = parseInt(viidesLuku);
var summa = luvuksi + luvuksi2 + luvuksi3 + luvuksi4 + luvuksi5;
console.log(summa);
var keskiarvo = summa / 5;
alert("Antamasi lukujen summa on " + summa + " ja niiden keskiarvo on " + keskiarvo)


}

function kertoTaulu(){
    var luku = document.getElementById("kertotaulu").value;
    var lause = "lukusi kerrottuna ";
    var nollas = lause + luku + " " + "x 0 = " + luku * 0
    var ensimmainen = lause + luku + " " + "x 1 = " + luku * 1
    var toinen = lause + luku + " " + "x 2 = " + luku * 2
    var kolmas = lause + luku + " " + "x 3 = " + luku * 3
    var neljas = lause +  luku + " " +  "x 4 = " + luku * 4
    var viides = lause + luku + " " + "x 5 = " + luku * 5
    var kuudes = lause +  luku + " " + "x 6 = " + luku * 6
    var seitsemas = lause + luku + " " + "x 7 = " + luku * 7
    var kahdeksas = lause + luku + " "  + "x 8 = " + luku * 8
    var yhdeksas = lause + luku + " " + "x 9 = " + luku * 9
    var kymmenes = lause + luku + " " + "x 10 = " + luku * 10
    document.write(nollas)
    document.write("<br>")
    document.write(ensimmainen)
    document.write("<br>")
    document.write(toinen)
    document.write("<br>")
    document.write(kolmas)
    document.write("<br>")
    document.write(neljas)
    document.write("<br>")
    document.write(viides)
    document.write("<br>")
    document.write(kuudes)
    document.write("<br>")
    document.write(seitsemas)
    document.write("<br>")
    document.write(kahdeksas)
    document.write("<br>")
    document.write(yhdeksas)
    document.write("<br>")
    document.write(kymmenes)
    document.write("<br>")


}