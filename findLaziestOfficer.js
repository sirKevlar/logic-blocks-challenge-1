const findLaziestOfficer = (securityData) => {
  const team = {};
  const officers = [];
  const days = securityData.match(/\d{2}-\d{2}  #\d{2}  [.#]{60}/g);

  // Creates team object
  days.forEach((day) => {
    const dayInMins = day.match(/[\.#]{60}/g)[0];
    const officerId = day.match(/#\d+/g)[0].slice(1);

    if (team.hasOwnProperty(officerId)) {
      team[officerId].days.push(dayInMins);
    } else {
      team[officerId] = { days: [], minutesAsleep: 0 };
    }
  });

  // Creates officers array
  const officerIds = Object.keys(team);
  officerIds.forEach((officerId) => {
    officers.push({ id: officerId, ...team[officerId] });
  });

  // Calculates minutes asleep
  officers.forEach((officer) => {
    const totalMinsAsleep = [];

    officer.days.forEach((day) => {
      const dailyMinsAsleep = day.match(/#/g);
      totalMinsAsleep.push(dailyMinsAsleep);
    });
    officer.minutesAsleep = totalMinsAsleep.flat().length;
  });

  // Sorts array by laziest officer desc
  officers.sort(function (a, b) {
    if (a.minutesAsleep < b.minutesAsleep) return 1;
    if (a.minutesAsleep > b.minutesAsleep) return -1;
    return 0;
  });
  const laziestOfficer = officers[0];

  return laziestOfficer;
};

module.exports = findLaziestOfficer;
