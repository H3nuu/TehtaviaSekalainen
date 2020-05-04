function laskeYhteen(num1, num2) {
  var laske = num1 + num2;
  if(laske < 100) {
    console.log("Lukujen summa on alle sata!");
  }
   else if(laske > 100){
     console.log("Luvut ovat liian suuria, jotta pystyisin laskemaan niitä!");
  }
}
laskeYhteen()
