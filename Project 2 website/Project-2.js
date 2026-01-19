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

function updateRekeningenUI() {
    let rekeningen = document.querySelectorAll('.rekening');
    rekeningen.forEach((rekening, index) => {
        rekening.style.backgroundColor = index % 2 === 0 ? '#f0f0f0' : '#ffffff';
    });
}