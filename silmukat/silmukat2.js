function randomSalasana() { // vs code halusi minun siirtävän osan koodinpätkästä toiseen tiedostoon
    var randomMerkit = document.getElementById("randomSalis").value; // funktio antoi muuten toisen funktion toiminnon
    var salasana = "";
    var kirjaimet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖabcdefghijklmnopqrstuvwxyzåäö';
    var pituus = kirjaimet.length;
    for (let i = 0; i < randomMerkit.length; i++) {
        // console.log(merkit.charAt(i));
        if (i % 1 == 0) {
            salasana += kirjaimet.charAt(Math.floor(Math.random() * pituus));
            salasana += randomMerkit.charAt(i);
        }
        else {
            salasana += randomMerkit.charAt(i);
        }
    }
    console.log(salasana);
    alert("uusi salasanasi on " + salasana);
}

function paritParilSumma(){
    var pieni = Number(document.getElementById("pienempi").value)
    var suuri = Number(document.getElementById("suurempi").value)
    var parillinenArray = [];
    var paritonArray = [];
    var parillinenSumma = 0;
    var paritonSumma = 0;
    // var erotus = suuri - pieni;
   // if(pieni < suuri && pieni > 0 )
       // for(let i = 0; i <= erotus; i++){
           for(pieni; pieni <= suuri; pieni++){ 
               if(pieni % 2 == 0 && suuri > pieni ){
                    parillinenArray.push(pieni)
                    // console.log(erotus)
                    // console.log(pieni);
                    parillinenSumma += pieni;
                    console.log(parillinenArray)
                    console.log(parillinenSumma)
                } 
                else if(pieni % 1 == 0 && suuri > pieni){
                    paritonArray.push(pieni);
                   // paritonArray.reduce((a, b) => a+b, 0)
                   paritonSumma += pieni
                    console.log(paritonArray)
                }   
        }
        alert("parilliset numerot ovat " + parillinenArray + " ja niiden summa on " + parillinenSumma)
        alert("parittomat numerot ovat " + paritonArray + " ja niiden summa on " + paritonSumma)
    }
    
    

