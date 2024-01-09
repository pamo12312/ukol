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
    const randomLastDowntime = Math.floor(Math.random() * 61); // 0 to 60
    const randomAvgDowntime = Math.floor(Math.random() * 61); // 0 to 60

    lastDowntimeValue.textContent = `Last Downtime: ${randomLastDowntime} minutes`;
    avgDowntimeValue.textContent = `Average Downtime: ${randomAvgDowntime}`;
}

function getRandomColor() {
    const colors = ['red', 'orange', 'green'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function showAlert() {
    const alertToast = document.querySelector('.alert-toast');
    alertToast.style.display = 'block';
    setTimeout(function () {
        alertToast.style.display = 'none';
    }, 2000);
}

function updateUptimeBars() {
    const bars = Array.from(uptimeBarsContainer.getElementsByClassName('uptime-bar'));
    bars.forEach(bar => {
        const randomColor = getRandomColor();
        bar.className = `uptime-bar ${randomColor}`;
    });
}
