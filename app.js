const getAge = document.getElementById("calculate");
var todayDate = new Date();
var currentDay = todayDate.getDate();
var currentMonth = todayDate.getMonth() + 1;
var currentYear = todayDate.getFullYear();

if (currentMonth < 10) {
  currentMonth = "0" + currentMonth;
}
if (currentDay < 10) {
  currentDay = "0" + currentDay;
}

var maxDate = currentYear + "-" + currentMonth + "-" + currentDay;
var userInput = document.getElementById("demo");
userInput.setAttribute("max", maxDate);

getAge.addEventListener("click", calculateAge);
function calculateAge() {
  if (userInput.value == "") {
    alert("Please Enter Date Of Birth");
  } else {
    let userDate = new Date(userInput.value);

    let birthDay = userDate.getDate();
    let birthMonth = userDate.getMonth() + 1;
    let birthYear = userDate.getFullYear();

    var yCount = document.getElementById("yCount");
    var mCount = document.getElementById("mCount");
    var dCount = document.getElementById("dCount");

    var d3, m3, y3;

    y3 = currentYear - birthYear;

    if (currentMonth >= birthMonth) {
      m3 = currentMonth - birthMonth;
    } else {
      y3--;
      m3 = 12 + currentMonth - birthMonth;
    }

    if (currentDay >= birthDay) {
      d3 = currentDay - birthDay;
    } else {
      m3--;
      let dx = Number(currentDay);
      d3 = daysInMonth(birthYear, birthMonth) + dx - birthDay;
    }

    if (m3 < 0) {
      m3 = 11;
      y3--;
    }

    if (m3 < 10) {
      m3 = "0" + m3;
    }
    if (d3 < 10) {
      d3 = "0" + d3;
    }

    function daysInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    }

    yCount.innerText = y3;
    mCount.innerText = m3;
    dCount.innerText = d3;
    console.log(yCount, mCount, dCount);
    console.log(y3, m3, d3);
    userInput.value = "";
  }
}
