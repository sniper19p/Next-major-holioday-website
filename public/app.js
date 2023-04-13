const countdownItems = ['months', 'days', 'hours', 'minutes', 'seconds'];
const countdownLabels = ['Months', 'Days', 'Hours', 'Minutes', 'Seconds'];

function updateCountdown() {
  const holiday = new Date('2023-12-25'); 
  const now = new Date();
  const timeLeft = holiday.getTime() - now.getTime();
  if (timeLeft <= 0) {
    clearInterval(timer);
    countdownItems.forEach((item, index) => {
      document.getElementById(item).innerHTML = '0';
      document.getElementById(countdownLabels[index]).innerHTML = '';
    });
    return;
  }
  const monthsLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30));
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24)) % 30;
  const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60)) % 24;
  const minutesLeft = Math.floor(timeLeft / (1000 * 60)) % 60;
  const secondsLeft = Math.floor(timeLeft / 1000) % 60;
  document.getElementById('months').innerHTML = monthsLeft;
  document.getElementById('days').innerHTML = daysLeft;
  document.getElementById('hours').innerHTML = hoursLeft;
  document.getElementById('minutes').innerHTML = minutesLeft;
  document.getElementById('seconds').innerHTML = secondsLeft;
}

// Update the countdown every second
const timer = setInterval(updateCountdown, 1000);
