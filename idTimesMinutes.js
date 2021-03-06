const { data } = require('./data');
const findBestMinutesAndOfficer = require('./findBestMinutesAndOfficer');

const idTimesMinutes = (securityData) => {
  const bestTimes = findBestMinutesAndOfficer(securityData);
  const minTimesId = bestTimes.sleepiestTimes.map((minute) => {
    return minute * bestTimes.officer;
  });
  return minTimesId;
};

/* ---un-comment below to demo--- */

// const result = idTimesMinutes(data);
// console.log(result);

