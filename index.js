function digitalDetox(logs) {
  // hold results in an array of objects
  const res = [];

  console.log(logs);
  // handle array of date objects...
  for (let log of logs) {
    // console.log(log.getUTCDate())
    let d = new Date(log);
    let date = d.getUTCDate();
    let hour = d.getUTCHours();
    console.log(date, hour);
    // Throw into an object and push to array
    let obj = {};
    obj['date'] = date;
    obj['hour'] = hour;
    res.push(obj);
  }
  console.log(res);

  // hold a previous day value??
  // loop through res
  for (let day of res) {
  }

  // logged in no more than once within any four-hour period
  // check login[1] - login[0]
  // login[0] = 1, login[1] = 5
  // 5 - 1 = 4
  // is greater than or equal to 4
  // so pass it into an array??
  // how to set up the initial value? boolean?
  //

  // logged in no more than 2 times on any single day
  //  return logs;
}

digitalDetox([
  '2026-02-05 10:00:00',
  '2026-02-01 09:00:00',
  '2026-02-03 22:15:00',
  '2026-02-02 12:10:00',
  '2026-02-02 07:15:00',
  '2026-02-04 01:45:00',
  '2026-02-01 16:50:00',
  '2026-02-03 09:30:00',
]);
