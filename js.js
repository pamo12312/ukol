const refreshBtn = document.querySelector('#refreshBtn');
const showAlertBtn = document.querySelector('.btnshow-alert');
const uptimeBarsContainer = document.querySelector('.uptime-bars');
const uptimeValue = document.querySelector('.uptime');
const lastDowntimeValue = document.querySelector('.last-downtime');
const avgDowntimeValue = document.querySelector('.avg-downtime');

refreshBtn.addEventListener('click', function () {
    updateUptimeScore();
    updateUptimeBars();
    updateUptimeDetails();
});

showAlertBtn.addEventListener('click', function () {
    showAlert();
});

function updateUptimeScore() {
    const randomScore = Math.floor(Math.random() * 101);
    uptimeValue.textContent = `Uptime: ${randomScore}%`;
}

function updateUptimeDetails() {
    const randomLastDowntime = Math.floor(Math.random() * 61);
    const randomAvgDowntime = Math.floor(Math.random() * 61);

    lastDowntimeValue.textContent = `Last Downtime: ${randomLastDowntime} minutes`;
    avgDowntimeValue.textContent = `Average Downtime: ${randomAvgDowntime}`;
}

function getRandomColor() {
    const colors = ['red', 'orange', 'green'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function showAlert() {
    const alertElement = document.querySelector('.alert');

    alertElement.style.display = 'block';

    setTimeout(function () {
        alertElement.style.display = 'none';
    }, 5000);
}


function updateUptimeBars() {
    const bars = uptimeBarsContainer.getElementsByClassName('uptime-bar');

    for (let i = 0; i < bars.length; i++) {
        const randomColor = getRandomColor();
        bars[i].className = `uptime-bar ${randomColor}`;
    }
}

