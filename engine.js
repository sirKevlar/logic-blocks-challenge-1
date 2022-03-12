const { data } = require('./data.js');

const whoIsAsleep = () => {
  const officers = {};
  const days = data.match(/\d{2}-\d{2}  #\d{2}  [.#]{60}/g);

  days.forEach((day) => {
    const dayInMins = day.slice(12);
    const officerId = `${day[8]}${day[9]}`;

    if (officers.hasOwnProperty(officerId)) {
      officers[officerId].days.push(dayInMins);
    } else {
      officers[officerId] = { days: [], minutesAsleep: 0 };
    }
  });

  console.log(officers);
};

whoIsAsleep();
