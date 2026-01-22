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