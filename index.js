var ctx = document.getElementById("myChart").getContext("2d");

var data = {
    labels: ["0", "1", "2", "3"],
    datasets: [
        {
            label: "Offline",
            backgroundColor:"red",
            data: [1, 3, 2, 4],
        },
        {
            label: "Online",
            backgroundColor:"blue",
            data: [3, 1, 4, 2],
        },
    ]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        barValueSpacing: 20,
        scales: {
            yAxes: [{ ticks: { min: 0, } }]
        }
    }

});