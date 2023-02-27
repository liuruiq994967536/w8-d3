//Create a time data function
function currentTime() {
  //Declare variables
  var d = new Date(); // Get current date
  var hr = d.getHours(); // Get current hours
  var min = d.getMinutes(); // Get current minutes
  var sec = d.getSeconds(); // Get current seconds
  var ampm; // Declare empty variable to store AM or PM

  var utchr = d.getUTCHours();
  var timeDiff;
  var adjTimeDiff;
  var timeZone;

  //Add 0 to single digits for seconds
  if (sec < 10) {
    sec = `0${sec}`;
  }

  //Add 0 to single digits for minutes
  if (min < 10) {
    min = `0${min}`;
  }

  //Determine AM or PM string
  if (hr === 12) {
    ampm = "PM";
  } else if (hr > 12) {
    hr -= 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  //Convert GMT from military time to standard time
  utchr = utchr > 12 ? utchr - 12 : utchr;

  //Calculate time difference between GMT hour and local hour
  timeDiff = hr - utchr;

  // Convert time difference, if negative, to positive
  adjTimeDiff = Math.abs(timeDiff);

  // Check with time zone based on the converted time difference between GMT hour and local hour
  switch (adjTimeDiff) {
    case 4:
      timeZone = "EDT";
      break;
    case 5:
      timeZone = "CDT";
      break;
    case 6:
      timeZone = "MDT";
      break;
    case 7:
      timeZone = "PDT";
      break;
    case 8:
      timeZone = "ADT";
      break;
    case 10:
      timeZone = "HST";
      break;
  }

  //Assemble time format to display
  var time = `${hr}:${min}:${sec} ${ampm} ${timeZone}`;

  //Display current local time and time zone on HTML elements
  document.getElementById("clock").innerHTML = time; //adding time

  // Very intersting way to write a setInterval inside it's callback
  // In this way, we could use setTimeout as well - it's not a infinte recursion
  // Event Loop will reduce the size of the call stack
  // Other way to write: put setInterval outside the scope
  setInterval(currentTime, 1000);
}

currentTime();
