function showAlert() {
    document.getElementById('alert').style.display = 'block';
    setTimeout(function () {
        document.getElementById('alert').style.display = 'none';
    }, 5000);
}
let numbers = [];
let minNumber = Infinity;
function refreshData() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNumber);
    if (randomNumber < minNumber) {
        minNumber = randomNumber;
        document.getElementById('minNumberContainer').innerText = 'Last downtime: ' + minNumber;
    }
    document.getElementById('randomNumberContainer').innerText = 'Uptime: ' + randomNumber + "%";
    let averageMessage = calculateAverage(randomNumber);
    document.getElementById('averageContainer').innerText = 'Status uptime: ' + averageMessage;
}
function calculateAverage(randomNumber) {
    if (randomNumber < 20) {
        return 'Poor';
    } else if (randomNumber >= 20 && randomNumber < 50) {
        return 'OK';
    } else if (randomNumber >= 50 && randomNumber <= 100) {
        return 'Good';
    }
}
