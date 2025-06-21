let clock = document.getElementById("clock");
let displayDate = document.getElementById("date");

// <---------------- runs after one second when page loads ---------------->

// setInterval(function () {
//   let date = new Date();

//   // <--- using padstart for get '0' before every single digit --->

// // let hours = date.getHours().toString().padStart(2, '0');
// // let minutes = date.getMinutes().toString().padStart(2, '0');
// // let seconds = date.getSeconds().toString().padStart(2, '0');

// // clock.textContent = `${hours}:${minutes}:${seconds}`;

// //using local timestring for 2 digit

// clock.textContent = date.toLocaleTimeString("en-US", {
//   hour: '2-digit',
//   minute: '2-digit',
//   second: '2-digit',
//   hour12: true
// });

// //  ---------- clock.textContent = date.toLocaleTimeString();--------------------
//   displayDate.textContent = date.toLocaleDateString("en-GB", {
//     weekday: "short",
//     year: "numeric",
//     month: "short",
//     day: "2-digit",
//   });
// }, 1000);

// <------------- runs direct at page load ------------------>

function updateClock() {
  let date = new Date();

  clock.textContent = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  displayDate.textContent = date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

updateClock();
setInterval(updateClock, 1000);
