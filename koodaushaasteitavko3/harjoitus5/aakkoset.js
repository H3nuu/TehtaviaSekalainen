function aakkosJarjestys(teksti) {
  var tekstijarjestys = Array.from(teksti); //koitin tässä järkevöidä itselleni muuttujien nimiä, mutta en ymmärtänyt tekstin sijoittamista
  tekstijarjestys.sort();
  var uusijarjestys = tekstijarjestys.join(''); //konsolissa uncaught TypeError
  console.log(uusijarjestys);
}
aakkosJarjestys();
