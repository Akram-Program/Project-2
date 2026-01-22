// Transactie geschiedenis
const transactions = [
    { id: 1, type: 'inkomend', datum: '2025-11-01', bedrag: 650.00 },
    { id: 2, type: 'uitgaand', datum: '2025-11-03', bedrag: -500.00 },
    { id: 3, type: 'inkomend', datum: '2025-11-05', bedrag: 290.00 },
    { id: 4, type: 'uitgaand', datum: '2025-11-10', bedrag: -39.00 }
];

document.addEventListener('DOMContentLoaded', () => {
    const listElement = document.getElementById('transactielijstGS') || document.querySelector('.transactie-lijstGS');
    const filterType = document.getElementById('filterTypeGS');
    const filterDatum = document.getElementById('filterDatumGS');
    const btnFilter = document.getElementById('btnFilterGS');

    console.log('Transactie module geladen. listElement=', listElement, 'transactions=', transactions.length);

    function displayTransactions(data) {
        if (!listElement) {
            console.warn('transactielijst element niet gevonden.');
            return;
        }
        listElement.innerHTML = '';

        if (!data || data.length === 0) {
            listElement.innerHTML = '<p>Geen transacties gevonden.</p>';
            return;
        }

        data.forEach(t => {
            const item = document.createElement('div');
            item.classList.add('transaction-item');

            const bedragStr = (t.bedrag < 0 ? '-€' + Math.abs(t.bedrag).toFixed(2) : '€' + t.bedrag.toFixed(2));

            item.innerHTML = `
                <p><span class="label">Type:</span> ${t.type}</p>
                <p><span class="label">Datum:</span> ${t.datum}</p>
                <p><span class="label">Bedrag:</span> ${bedragStr}</p>
            `;
            listElement.appendChild(item);
        });
    }

    function filterData() {
        if (!filterType || !filterDatum) return;
        const typeValue = filterType.value;
        const dateValue = filterDatum.value;

        const filtered = transactions.filter(t => {
            const matchType = (typeValue === 'alle' || t.type === typeValue);
            const matchDate = (dateValue === '' || t.datum === dateValue);
            return matchType && matchDate;
        });

        displayTransactions(filtered);
    }

    if (btnFilter) btnFilter.addEventListener('click', filterData);

    displayTransactions(transactions);
});