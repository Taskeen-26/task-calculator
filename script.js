var display = document.getElementById("display");

function pressBtn(val) {
  if (display.value != 0) {
    display.value = display.value + val;
  } else {
    display.value = val;
  }
}

function clearDisplay() {
  console.log("clear works");
  display.value = 0;
}

function deleteVal() {
  var lastIndex = display.value.length - 1;
  var newVal = display.value.slice(0, lastIndex);

  if (newVal.length == 0) {
    display.value = 0;
  } else {
    display.value = newVal;
  }
}

// function add() {
//   display.value = parseInt(display.value);
//   var fNum = display.value;
//   console.log("fnum", fNum);

//   if ((display.value = fNum)) {
//     display.value = "";
//     var sNum = display.value;
//     console.log("sNum", sNum);
//   }
// }

var fNum = null;
console.log("fNum", fNum);

function add() {
  var sNum = parseInt(display.value);
  console.log("sNum", sNum);

  if (fNum === null) {
    fNum = sNum;
    display.value = "";
  } else {
    var res = fNum + sNum;
    console.log("res", res);
    display.value = res;
  }
}

function equals() {
  var sNum = display.value;
  var result = parseInt(fNum) + parseInt(sNum);
  display.value = result;
}
