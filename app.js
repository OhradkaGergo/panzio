function Szamitas() {
    let erkezes = new Date(document.getElementById("erkD").value);
    let erkezesNap = erkezes.getDate().toString();
    let erkezesHonap = erkezes.getMonth() + 1;
    let erkezesEv = erkezes.getFullYear().toString();
    let tavozas = new Date(document.getElementById("tavD").value);
    let tavozasNap = tavozas.getDate().toString();
    let tavozasHonap = tavozas.getMonth() + 1;
    let tavozasEv = tavozas.getFullYear().toString();
    let egyNap = 24*60*60*1000
    let toltottIdo = Math.round(Math.abs((tavozas - erkezes) / egyNap));
    let szobaT;
    let vendegekSz = document.getElementById("fo").value;
    let ellatas;
    let furdo = "";
    let penz = 0;
    
    if(document.getElementById("egyagy").checked == true){
        szobaT = "Egyágyas";
        penz += 9000 * toltottIdo;
    }
    else if(document.getElementById("ketagy").checked == true){
        szobaT = "Kétágyas";
        penz += 15000 * toltottIdo;
    }
    else if(document.getElementById("ketagy+1").checked == true){
        szobaT = "Kétágyas 1 pótággyal";
        penz += 18000 * toltottIdo;
    }
    else if(document.getElementById("ketagy+2").checked == true){
        szobaT = "Kétágyas 2 pótággyal";
        penz += 21000 * toltottIdo;
    }

    if(document.getElementById("reggeli").checked == true){
        ellatas = "Reggeli";
        penz += 900 * toltottIdo;
    }
    else if(document.getElementById("felpanzio").checked == true){
        ellatas = "Félpanzió";
        penz += 2900 * toltottIdo;
    }
    else if(document.getElementById("teljespanzio").checked == true){
        ellatas += "Teljes panzió";
        penz += 4900 * toltottIdo;
    }
    
    if(document.getElementById("furdo1").checked == true){
        furdo += " Beltéri medencék";
        penz += 800 * toltottIdo;
    }
    if(document.getElementById("furdo2").checked == true){
        furdo += " Kültéri medencék";
        penz += 800 * toltottIdo;
    }
    if(document.getElementById("furdo3").checked == true){
        furdo += " Szauna belépő";
        penz += 800 * toltottIdo;
    }
    if(document.getElementById("furdo4").checked == true){
        document.getElementById("furdo1").checked == false
        document.getElementById("furdo2").checked == false
        document.getElementById("furdo3").checked == false
        furdo += " Teljes belépő";
        penz += 2000 * toltottIdo;
    }

    alert("Kedves vendég. \n\nTájékoztatjuk a sikeres folgalásáról; \n\n Érkezés: " + erkezesEv + " - " + erkezesHonap + " - " + erkezesNap + " \n\n Távozás: " + tavozasEv + " - " + tavozasHonap + " - " + tavozasNap + " \n\n Szoba típusa: " + szobaT + " \n\n Vendégek száma: " + vendegekSz + " \n\n Ellátás: " + ellatas + " \n\n Igényelt Szolgáltatások:" +  furdo + " \n\n Teljes összeg: " + penz + " HUF" + "\n\n\nKöszönjük a megrendelését.")
}