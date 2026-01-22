let saldo = 1000;
let portefeuille = {
    Bitcoin: 0,
    Ether: 0,
    Litecoin: 0
};

function berekenBedrag() {
    let crypto = document.getElementById('Crypto').value;
    let aantal = document.getElementById('Aantal').value;
    
    let bedrag;
    
    if (crypto == "Bitcoin") {
        bedrag = aantal * 80000;
    }
    else if (crypto == "Ether") {
        bedrag = aantal * 2700;
    }
    else if (crypto == "Litecoin") {
        bedrag = aantal * 60;
    }
    
    if (aantal == "") {
        document.getElementById('totaalBedrag').innerHTML = "€0,00";
    }
    else {
        document.getElementById('totaalBedrag').innerHTML = "€" + bedrag.toFixed(2).replace('.', ',');
    }
}

document.getElementById('Crypto').onchange = berekenBedrag;
document.getElementById('Aantal').onchange = berekenBedrag;
document.getElementById('Aantal').onkeyup = berekenBedrag;

let knop = document.getElementById('kopenBtn');

knop.onclick = function() {
    let crypto = document.getElementById('Crypto').value;
    let aantal = document.getElementById('Aantal').value;
    let bedrag;
    
    if (crypto == "Bitcoin") {
        bedrag = aantal * 80000;
    }
    else if (crypto == "Ether") {
        bedrag = aantal * 2700;
    }
    else if (crypto == "Litecoin") {
        bedrag = aantal * 60;
    }
    
    if (bedrag > saldo) {
        alert("Onvoldoende saldo om deze aankoop te doen.");
        return;
    }
    
    saldo = saldo - bedrag;
    portefeuille[crypto] = portefeuille[crypto] + parseFloat(aantal);
    document.getElementById('Saldo').innerHTML = "€" + saldo.toFixed(2).replace('.', ',');
    document.getElementById('Aantal').value = "";
    berekenBedrag();
    
    alert("Je hebt " + aantal + " " + crypto + " gekocht voor €" + bedrag);
};

let verkopenBtn = document.getElementById('verkopenBtn');

verkopenBtn.onclick = function() {
    let crypto = document.getElementById('Crypto').value;
    let aantal = document.getElementById('Aantal').value;
    let bedrag;
    
    if (aantal == "" || aantal == 0) {
        alert("Vul een geldige hoeveelheid in.");
        return;
    }
    
    if (portefeuille[crypto] < aantal) {
        alert("Je hebt niet genoeg " + crypto + " om deze hoeveelheid te verkopen. Je hebt " + portefeuille[crypto] + " " + crypto);
        return;
    }
    
    if (crypto == "Bitcoin") {
        bedrag = aantal * 80000;
    }
    else if (crypto == "Ether") {
        bedrag = aantal * 2700;
    }
    else if (crypto == "Litecoin") {
        bedrag = aantal * 60;
    }
    
    saldo = saldo + parseFloat(bedrag);
    portefeuille[crypto] = portefeuille[crypto] - parseFloat(aantal);
    document.getElementById('Saldo').innerHTML = "€" + saldo.toFixed(2).replace('.', ',');
    document.getElementById('Aantal').value = "";
    berekenBedrag();
    
    alert("Je hebt " + aantal + " " + crypto + " verkocht voor €" + bedrag);
};
