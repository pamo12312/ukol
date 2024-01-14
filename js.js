const refreshBtn = document.querySelector('#refreshBtn');
const showAlertBtn = document.querySelector('.btnshow-alert');
const uptimeBarsContainer = document.querySelector('.uptime-bars');
const uptimeValue = document.querySelector('.uptime');
const lastDowntimeValue = document.querySelector('.last-downtime');
const avgDowntimeValue = document.querySelector('.avg-downtime');
const eventData = [
    { id: 1, date: '8.1.2023', status: 'error' },
    { id: 2, date: '3.3.2023', status: 'warning' },
    { id: 3, date: '12.1.2023', status: 'success' },
    { id: 3, date: '12.1.2023', status: 'success' },
    { id: 2, date: '3.3.2023', status: 'warning' }
];
let currentIndex = 0;
let currentStatus;
let currentDate;


refreshBtn.addEventListener('click', handleRefreshClick);

function handleRefreshClick() {
    currentStatus = eventData[currentIndex].status;
    currentDate = eventData[currentIndex].date;

    updateUptimeScore();
    updateUptimeBars();
    updateUptimeDetails();
    currentIndex = (currentIndex + 1) % eventData.length;
}

showAlertBtn.addEventListener('click', function () {
    showAlert();
});

function updateUptimeScore() {
    const randomScore = Math.floor(Math.random() * 101);
    uptimeValue.textContent = `Uptime: ${randomScore}%`;
}

function updateUptimeDetails() {
    lastDowntimeValue.textContent = `Date: ${currentDate}`;
    avgDowntimeValue.textContent = `Status: ${currentStatus}`;
}

function showAlert() {
    const alertElement = document.querySelector('.alert');
    alertElement.style.display = 'block';

    setTimeout(function () {
        alertElement.style.display = 'none';
    }, 5000);
}

let currentUptimeBarIndex = 0;

function updateUptimeBars() {
    const bars = Array.from(uptimeBarsContainer.getElementsByClassName('uptime-bar'));
    const color = getStatusColor(currentStatus);
    for (let index = bars.length - 1; index > 0; index--) {
        bars[index].textContent = bars[index - 1].textContent;
        bars[index].className = bars[index - 1].className;
    }
    bars[0].textContent = '-';
    bars[0].className = `uptime-bar ${color}`;
    currentUptimeBarIndex = (currentUptimeBarIndex + 1) % bars.length;
}

function getStatusColor(status) {
    switch (status) {
        case 'success':
            return 'green';
        case 'warning':
            return 'orange';
        case 'error':
            return 'red';
        default:
            return 'black';
    }
}
