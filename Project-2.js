// Main content Homepagina//
let main = document.getElementById("content");

document.getElementById("link-Contact").addEventListener("click", () => {
    main.innerHTML = `
        <h1>Contact</h1>
        <p>Hier is uw contactinformatie.</p>
    `;
});

document.getElementById("link-Instellingen").addEventListener("click", () => {
    main.innerHTML = `
        <h1>Instellingen</h1>
        <p>Hier kunt u uw instellingen aanpassen.</p>
    `;
});

// Login functie//
function Login() {
    let correctUser = "akram.zarouk";
    let correctPass = "Akram123";

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === correctUser && password === correctPass) {
        window.location.href = "Project-2-Homepagina.html";
    } 
    else {
        alert("Onjuiste gebruikersnaam of wachtwoord. Probeer het opnieuw.");
    }
}

// Nieuwe Rekening Functie//
let knop = document.getElementById('nieuweRekening');
let lijst = document.getElementById('rekening-lijst');

knop.addEventListener('click', () => {
    let naam = prompt('Voer een naam in voor de nieuwe rekening:');
    if (!naam) return;

    let nieuweDiv = document.createElement('div');
    nieuweDiv.className = 'rekening';
    nieuweDiv.innerHTML = `<span>${naam}</span><span>€100.00</span>`;

    lijst.appendChild(nieuweDiv);
    updateRekeningenUI();
});

// Overschrijving Functie//
let balances = {
    Reguliere: 500,
    Spaar: 500
};

function updateBalancesUI() {
    let vanSelect = document.getElementById("VanRekeningen");
    let naarSelect = document.getElementById("NaarRekening");
    if (!vanSelect || !naarSelect) return;
    vanSelect.options[0].text = `Reguliere Rekening (€${balances.Reguliere.toFixed(2)})`;
    vanSelect.options[1].text = `Spaarrekening (€${balances.Spaar.toFixed(2)})`;
   
    naarSelect.options[0].text = vanSelect.options[0].text;
    naarSelect.options[1].text = vanSelect.options[1].text;
}

updateBalancesUI();

function updateRekeningenUI() {
    let lijst = document.getElementById('rekening-lijst');
    if (!lijst) return;
    let rekeningen = lijst.querySelectorAll('.rekening');
    rekeningen.forEach(r => {
        let spans = r.querySelectorAll('span');
        if (spans.length < 2) return;
        let naam = spans[0].textContent.toLowerCase();
        if (naam.includes('reguliere')) {
            spans[1].textContent = '€' + balances.Reguliere.toFixed(2);
        } else if (naam.includes('spaar')) {
            spans[1].textContent = '€' + balances.Spaar.toFixed(2);
        }
    });
}

updateRekeningenUI();

let overschrijfKnop = document.getElementById("knop-Overschrijven");
if (overschrijfKnop) overschrijfKnop.addEventListener("click", overschrijven);

function overschrijven() {
    let vanRekening = document.getElementById("VanRekeningen").value;
    let naarRekening = document.getElementById("NaarRekening").value;
    let bedragEl = document.getElementById("Bedrag");
    let bedrag = bedragEl ? parseFloat(bedragEl.value) : NaN;

    if (vanRekening === naarRekening) {
        alert("U kunt geen overschrijving naar dezelfde rekening doen.");
        return;
    }
    if (isNaN(bedrag) || bedrag <= 0) {
        alert("Voer een geldig bedrag in.");
        return;
    }
    if (balances[vanRekening] < bedrag) {
        alert("Onvoldoende saldo op de gekozen rekening.");
        return;
    }

    balances[vanRekening] -= bedrag;
    balances[naarRekening] += bedrag;
    updateBalancesUI();
    alert("€" + bedrag.toFixed(2) + " is succesvol overgeschreven van " + vanRekening + " naar " + naarRekening + ".");
    if (bedragEl) bedragEl.value = '';
}
