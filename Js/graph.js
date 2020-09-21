const pollChartData = [
    {
        province: "Eastern Cape",
        recovered: 155,
        color: "rgb(255, 99, 132)"
    },
    {
        province: "Free State",
        recovered: 86,
        color: "rgb(54, 162, 235)"
    },
    {
        province: "Gauteng",
        recovered: 120,
        color: "rgb(36, 36, 36)"
    },
    {
        province: "KwaZulu-Natal",
        recovered: 100,
        color: "rgb(255, 159, 64)"
    },
    {
        province: "Limpopo",
        recovered: 78,
        color: "rgb(75, 192, 192)"
    },
    {
        province: "Mpumalanga",
        recovered: 134,
        color: "rgb(25, 180, 86)"
    },
    {
        province: "Northern Cape",
        recovered: 180,
        color: "rgb(83, 15, 155)"
        
    },
    {
        province: "North West",
        recovered: 100,
        color: "rgb(253, 202, 155)"
        
    },
    {
        province: "Western Cape",
        recovered: 50,
        color: "rgb(293, 83, 255)"
        
    },
    {
        province: "Northern Cape",
        recovered: 64,
        color: "rgb(117, 152, 175)"
        
    },
    {
        province: "Northern Cape",
        recovered: 140,
        color: "rgb(153, 102, 255)"
        
    },
];

const ctx = document.getElementById('chart').getContext('2d');
const pollChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pollChartData.map(pollOption => pollOption.province),
        datasets: [{
            label: 'Total Recoveries',
            data: pollChartData.map(pollOption => pollOption.recovered),
            backgroundColor: pollChartData.map(pollOption => pollOption.color),
            borderWidth: 6
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
    title: {
        display:true,
        text:'Poll Results',
        fontColor: "#333",
        fontSize: 20,
        padding: 20
    },
        legend: {
            display: false
        }
    }

});