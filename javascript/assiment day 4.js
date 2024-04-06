function showTime(timezone, frameId) {
  const now = new Date();
  const timeOptions = { timeZone: timezone };
  const countryTime = now.toLocaleTimeString('en-US', timeOptions);

  document.getElementById(frameId).innerHTML = `<div class="clock">Current time in ${timezone}: ${countryTime}</div>`;
}
