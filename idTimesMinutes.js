const {data} = require('./data');
const findBestMinutesAndOfficer = require('./findBestMinutesAndOfficer');

const idTimesMinutes = (securityData) => {
  const bestTimes = findBestMinutesAndOfficer(securityData);
  const minTimesId = bestTimes.sleepiestTimes.map((minute) => {
    return minute * bestTimes.officer  
  })
  console.log(minTimesId);
};

idTimesMinutes(data);
