window.onload = function() {
  const countdownItems = ['months', 'days', 'hours', 'minutes', 'seconds'];
  const countdownLabels = ['Months', 'Days', 'Hours', 'Minutes', 'Seconds'];
  let timer;

  function updateCountdown(holidayDate) {
    const holiday = new Date(holidayDate);
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

  // Add event listeners to dropdown links
  const dropdownLinks = document.querySelectorAll('.dropdown-content a');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const holidayDate = link.getAttribute('data-holiday-date');
      document.getElementById('dropbtn').innerHTML = link.innerHTML;
      document.getElementById('holiday-date').value = holidayDate;
      clearInterval(timer);
      updateCountdown(holidayDate);
      timer = setInterval(() => {
        updateCountdown(holidayDate);
      }, 1000);
    });
  });
};
