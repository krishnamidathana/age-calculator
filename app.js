const getAge = document.getElementById("calculate");
var todaydate = new Date();
var d2 = new Date().getDate();
var m2 = new Date().getMonth() + 1;
var y2 = new Date().getFullYear();

if (m2 < 10) {
  m2 = "0" + m2;
}
if (d2 < 10) {
  d2 = "0" + d2;
}
var maxDate = y2 + "-" + m2 + "-" + d2;
var userInput = document.getElementById("demo");
userInput.setAttribute("max", maxDate);

getAge.addEventListener("click", calculateAge);
function calculateAge() {
    if (userInput.value == "") {
    alert("Please Enter Date Of Birth");
  } else {
  let userDate = new Date(userInput.value);

  let d1 = userDate.getDate();
  let m1 = userDate.getMonth() + 1;
  let y1 = userDate.getFullYear();

  var yCount = document.getElementById("yCount");
  var mCount = document.getElementById("mCount");
  var dCount = document.getElementById("dCount");

  var d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
       let dx = Number(d2);
    d3 = daysInMonth(y1, m1) + dx - d1;
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
}}
