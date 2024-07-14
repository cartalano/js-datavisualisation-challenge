document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('myChart').getContext('2d');

    // Initialiser le graphique Chart.js
    const myChart = new Chart(ctx, {
        type: 'bar', // Type de graphique
        data: {
            labels: [], // Étiquettes initiales
            datasets: [{
                label: 'Live Data',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Live Updating Chart'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Fonction pour obtenir les nouvelles données via AJAX
    function fetchData() {
        console.log('Fetching data...');
        axios.get('https://canvasjs.com/services/data/datapoints.php')
            .then(response => {
                console.log('Data fetched successfully');
                // Supposons que la réponse est un tableau de tableaux [timestamp, value]
                const newData = response.data;

                // Extraire les labels et les données
                const labels = newData.map(point => new Date(point[0]).toLocaleTimeString());
                const data = newData.map(point => point[1]);

                // Mettre à jour les labels et les data du graphique
                myChart.data.labels = labels;
                myChart.data.datasets[0].data = data;

                // Rafraîchir le graphique
                myChart.update();
                console.log('Chart updated');
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données:', error);
            });
    }

    // Appeler fetchData toutes les X millisecondes (par exemple, toutes les 5 secondes)
    setInterval(fetchData, 5000); // Actualise toutes les 5 secondes

    // Appeler fetchData immédiatement pour charger les premières données
    fetchData();
});
