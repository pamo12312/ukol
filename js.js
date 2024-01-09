function showAlert() {
    document.getElementById('alert').style.display = 'block';
    setTimeout(function () {
        document.getElementById('alert').style.display = 'none';
    }, 5000);
}

var numbers = [];

var minNumber = Infinity;

function refreshData() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNumber);


    if (randomNumber < minNumber) {
        minNumber = randomNumber;
        document.getElementById('minNumberContainer').innerText = 'Nejnižší číslo: ' + minNumber;
    }


    document.getElementById('randomNumberContainer').innerText = 'Náhodné číslo: ' + randomNumber+"%";
    document.getElementById('averageContainer').innerText = 'Průměr: ' + calculateAverage(numbers);
}


function calculateAverage(array) {
    var sum = array.reduce(function(a, b) { return a + b; }, 0);
    return (sum / array.length).toFixed(2);
}
