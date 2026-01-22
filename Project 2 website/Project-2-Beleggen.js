let categorieSelect = document.getElementById('Categorie');
let productSelect = document.getElementById('Product');

categorieSelect.onchange = function() {
    let gekozenCategorie = categorieSelect.value;
    let opties = productSelect.getElementsByTagName('option');
    
    productSelect.value = '';
    
    for (let i = 0; i < opties.length; i++) {
        let optie = opties[i];
        let categorie = optie.getAttribute('data-categorie');
        
        if (categorie == gekozenCategorie) {
            optie.style.display = 'block';
        }
        else {
            optie.style.display = 'none';
        }
    }
}

window.onload = function() {
    categorieSelect.onchange();
};
