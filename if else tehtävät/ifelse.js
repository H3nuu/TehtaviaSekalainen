function jarjestykseen(){
    var laatikko1 = document.getElementById("eka").value;  
    var laatikko2 = document.getElementById("toka").value;
    var laatikko3 = document.getElementById("kolmas").value;
    var vanhatNumerot = [laatikko1, laatikko2, laatikko3];
    console.log(vanhatNumerot);
    var numerot = [laatikko1, laatikko2, laatikko3].sort(function(a,b){return a-b});
    console.log(numerot);
    alert("numerosi ennen muutosta" + " " + ":" + " " + vanhatNumerot)
    alert("numerosi uudessa järjestyksessä pienimmästä suurimpaan" + " " + ":" + " " + numerot)

// Näissä kahdessa tehtävässä en osannut tehdä järkevää if else- ehtoa.
}
function suurinNumero(){
    var tehtava2laatikko1 = document.getElementById("tehtava2eka").value;
    var tehtava2laatikko2 = document.getElementById("tehtava2toka").value;
    var tehtava2laatikko3 = document.getElementById("tehtava2kolmas").value;
    var tehtava2laatikko4 = document.getElementById("tehtava2neljas").value;
    var tehtava2laatikko5 = document.getElementById("tehtava2viides").value;
    var tehtavaNumerot = [tehtava2laatikko1, tehtava2laatikko2, tehtava2laatikko3, tehtava2laatikko4, tehtava2laatikko5];
    console.log(Math.max(...tehtavaNumerot));
    alert("Antamasi lukujoukon suurin numero on" + " " + ":" + " " + Math.max(...tehtavaNumerot))
    
}
function paritonParillinen(){
   var tehtava3laatikko = document.getElementById("tehtava3eka").value;
    var nro = tehtava3laatikko; //turha muunnos eri muuttujaksi, mutta selkeytys itselleni
    if(nro % 2 == 0){
        alert("numerosi on " + nro + " ja se on parillinen")
    }
    else{
        alert("numerosi on " + nro + " ja se on pariton")
    }
}

function ajoNeuvo(){
    var tehtava4laatikko = document.getElementById("tehtava4eka").value;
    var ika = tehtava4laatikko; //turha muunnos eri muuttujaksi, mutta selkeytys itselleni
    if (ika < 16) {
        alert("Henkilö ajaa polkupyörällä");
    }
    else if (ika < 18){
        alert("Henkilö ajaa mopolla");
    }
    else{
        alert("Henkilö ajaa autolla");
    }

}

function heiMaailma(){
    
    // var englantijs = document.getElementById(englanti1);
    // var ruotsijs = document.getElementById(ruotsi1); 
    // var espanjajs = document.getElementById(espanja1);
    // var kielet = document.getElementById(tehtava5eka);
    var valittuKieli = document.getElementById("tehtava5eka").value

    if(valittuKieli == "englanti"){
        alert("Hello world!");
    }
    else if(valittuKieli == "ruotsi"){
        alert("Hej världen!")
    }
    else if(valittuKieli == "espanja"){
        alert("Hola Mundo!")
    }
    else{
        alert("valitse kieli!")
    }
}
