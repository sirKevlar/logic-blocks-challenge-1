const findLaziestOfficer = require('./findLaziestOfficer');

const findBestMinutesAndOfficer = (securityData) => {
  const laziestOfficer = findLaziestOfficer(securityData);
  const sleepingMinutes = [];

  // Create array of sleeping times
  laziestOfficer.days.forEach((day) => {
    for (let i = 0; i < day.length; i++) {
      if (day[i] === '#') {
        sleepingMinutes.push(i);
      }
    }
  });
  sleepingMinutes.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  // Find the modal minutes
  const minuteTracker = {};

  // Create object of sleeping minutes: frequency
  sleepingMinutes.forEach((sleepingMinute, i) => {
    if (minuteTracker.hasOwnProperty(sleepingMinute)) {
      minuteTracker[sleepingMinute]++;
    } else {
      minuteTracker[sleepingMinute] = 1;
    }
  });

  // Obtain highest frequency
  let highestFrequency = 1;

  for (let num in minuteTracker) {
    if (minuteTracker[num] > highestFrequency) {
      highestFrequency = minuteTracker[num];
    }
  }

  // Extract minutes with highest frequency
  const bestMinutes = [];

  for (let key in minuteTracker) {
    if (minuteTracker[key] === highestFrequency) {
      bestMinutes.push(key);
    }
  }

  const idAndTimes = {
    officer: laziestOfficer.id,
    sleepiestTimes: bestMinutes,
  };

  return idAndTimes;
};

module.exports = findBestMinutesAndOfficer;
