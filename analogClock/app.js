const handSecond = document.querySelector(".sec-hand");
const handMinute = document.querySelector(".min-hand");
const handHour = document.querySelector(".hour-hand");

function timer() {
  const time = new Date();
  // get a seconds
  const seconds = time.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  handSecond.style.transform = `rotate(${secondsDegrees}deg)`;

  //   get a minutes
  const minutes = time.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  handMinute.style.transform = `rotate(${minutesDegrees}deg)`;

  //   get a hour
  const hour = time.getHours();
  console.log(hour);
  const hourDegerees = (hour / 12) * 360 + 90;
  handHour.style.transform = `rotate(${hourDegerees}deg)`;
}

setInterval(timer, 1000);
