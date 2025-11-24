const leapYears = function (year) {
  const leapyear = year % 4 === 0;
  const leapiestyear = year % 4 || year % 400 === 0;
  const century = year % 100 === 0;

  if (leapyear && (!century || leapiestyear)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
