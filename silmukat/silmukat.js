function parilliset(){
    var pari = document.getElementById("eka").value
    for(let i = 0; i <= pari; i++){
    if(i % 2 == 0 && i > 0 ){
            console.log(i)
            alert("parilliset lukusi ovat " + i)
        }
    } 
}


    function merkitValeihin(){
      var merkit = document.getElementById("merkit").value
        var salasana = ""
        for(let i = 0; i < merkit.length; i++){
           // console.log(merkit.charAt(i));
            if(i % 1 == 0){
                salasana += 'Ö'
                salasana += merkit.charAt(i);
            }
            else{
                salasana += merkit.charAt(i);
            }
        console.log(salasana)
    }
    alert("uusi salasanasi on " + salasana)
}

    function tarkistaOnko(){
        var tarkistus = document.getElementById("tarkistus").value;
        var loyda = /ö/gi;
        if(loyda.test(tarkistus)){
            alert("sanassasi on ö-kirjain")
        }
        else{
            alert("sanassasi ei ole ö-kirjainta")
        }
    }

    function luvunKertoma(){
        var luku = document.getElementById("kertoma").value;
        if (luku == 0 || luku == 1){
                return 1;
            }
            for(var i = luku - 1; i >= 1; i--){
                luku *= i;
            }
            console.log(luku)
    alert("lukusi kertoma on " + luku)
    }

    function hipHeijaa(num){
        var hipArray = [];
        for(let i = 1; i <= num; i++){
            if(i % 3 == 0 && i % 5 == 0){
                hipArray.push('hipheijaa')
            }
            else if(i % 3 == 0){
                hipArray.push('hip');
            }
            else if(i % 5 == 0){
                hipArray.push('heijaa')
            }
            else{
                hipArray.push(i)   }
        }
        console.log(hipArray)
        document.write(hipArray)


    }
    function ensimmaiset10(){
        for(let i = 1; i <= 10; i++){
            console.log(i)
            document.write(i)
        }
    }
    
    function laskeEnsimmaiset(){
        var num = 0;
        for(let i = 1; i <= 10; i++){
        num += i
    }
    console.log(num)
    document.write(num)
    }

    function potenssi(){
        var luku = document.getElementById("ensLuku").value
        var possi = document.getElementById("toinenLuku").value
        var tulos = Math.pow(luku,possi)
        console.log(tulos);
        alert("Lukusi on " + tulos);

    }

    function pieninSuurin(){
        var ens = document.getElementById("ensLuku1").value
        var toinen = document.getElementById("toinenLuku1").value
        var kolmas = document.getElementById("kolmasLuku").value
        var neljas = document.getElementById("neljasLuku").value
        var viides = document.getElementById("viidesLuku").value
        var numeroArray = [ens,toinen,kolmas,neljas,viides];
        var pienin = Math.min(...numeroArray);
        var suurin = Math.max(...numeroArray);
        console.log(pienin)
        console.log(suurin)
        alert("pienin antamasi luku on " + pienin + " ja suurin antamasi luku on " + suurin);
    }
          

