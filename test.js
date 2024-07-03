document.addEventListener("DOMContentLoaded", function () {

    const table = document.getElementById('table1');

    let labels = [];
    let datasets = [];


    const rows = table.querySelectorAll('tbody tr');


    rows.forEach((row, rowIndex) => {
        const cells = row.querySelectorAll('th, td');

        if (rowIndex === 0) {
            // La première ligne contient les années
            for (let i = 2; i < cells.length; i++) {
                labels.push(cells[i].textContent.trim());
            }
        } else {

            let countryData = {
                label: cells[1].textContent.trim(),
                data: [],
                backgroundColor: getRandomColor(),
                borderColor: getRandomColor(),
                fill: false,
                pointStyle: 'circle', // Style des points
                pointRadius: 5, // Taille des points
                pointHoverRadius: 7
            };

            for (let i = 2; i < cells.length; i++) {
                let value = cells[i].textContent.trim().replace(',', '.');
                countryData.data.push(value ? parseFloat(value) : null);
            }

            datasets.push(countryData);
        }
    });

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line', // ou 'bar', 'pie', etc.
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Offences recorded by the police, 2002-12'
                }
            }
        }
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
});

document.addEventListener("DOMContentLoaded", function () {

    const table2 = document.getElementById('table2');

    let labels = [];
    let datasets = [];


    const rows = table2.querySelectorAll('tbody tr');


    rows.forEach((row, rowIndex) => {
        const cells = row.querySelectorAll('th, td');

        if (rowIndex === 0) {
            // La première ligne contient les années
            for (let i = 2; i < cells.length; i++) {
                labels.push(cells[i].textContent.trim());
            }
        } else {

            let countryData = {
                label: cells[1].textContent.trim(),
                data: [],
                backgroundColor: getRandomColor(),
                fill: false,
            };

            for (let i = 2; i < cells.length; i++) {
                let value = cells[i].textContent.trim().replace(',', '.');
                countryData.data.push(value ? parseFloat(value) : null);
            }

            datasets.push(countryData);
        }
    });

    const ctx = document.getElementById('myChart2').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar', // ou 'bar', 'pie', etc.
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Prison population, average per year, 2007-09 and 2010-12 per 100,000 inhabitants'
                }
            }
        }
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
});