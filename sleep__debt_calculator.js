//We are going to write a calculator that calculates sleep debt. 
//The program will ask a user how many hours of sleep is ideal each night,
//then compare that to the actual hours they slept each night of the last week.
//Then, it will calculate the amount of hours over or under they are to their sleep goal.

function getSleepHours (day) {
  var hours = prompt('How many hours of sleep did you get on ' + day + '?');
  return Number(hours);
}

function getActualSleepHours () {
  return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
}

function getIdealSleepHours () {
  var idealHours = prompt('How much sleep do you think you need per night?');
  return Number(idealHours) * 7;
}

function calculateSleepDebt () {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You are getting the perfect amount of sleep.');
  }  else if (actualSleepHours > idealSleepHours) {
    console.log('You are sleeping ' + (actualSleepHours - idealSleepHours) + ' more hours than needed.');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You are sleeping ' + (idealSleepHours - actualSleepHours) + ' hours less than needed');
  } else {
    console.log('Error');
  }
}
calculateSleepDebt();