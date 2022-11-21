function kiszamol(){
   ertek = bmiSzamolas();
   kiirasAlkotas(ertek);
   console.log(ertek);
}

function kiirasAlkotas(szoveg){
    var myDiv = document.createElement("div");
    myDiv.setAttribute("class","alert alert-danger");
    var myText = document.createTextNode(szoveg);
    myDiv.appendChild(myText);
    var eredmeny = document.getElementById("eredmeny");
    eredmeny.appendChild(myDiv);
}

function bmiSzamolas(){
    kg = parseFloat(document.getElementById("suly").value);
    testMag = parseInt(document.getElementById("testMag").value);
    testMag = testMag/100;
    tti = kg/Math.pow(testMag,2);
    console.log(tti);
    if(tti<16){
        return "súlyos soványság";
    }else if(tti>=16 && tti<17){
        return "mérsékelt soványság";
    }else if(tti>=17 && tti<18.5){
        return "enyhe soványság";
    }else if(tti>=18.5 && tti<25){
        return "normális testsúl";
    }else if(tti>=25 && tti<30){
        return "túlsúlyos";
    }else{
        return "egyéb";
    }
}