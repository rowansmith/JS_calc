

globalAns = "";

num1 = void 0;

num2 = void 0;

num = [];

function aFunction() {
  var source;
  source = event.target || event.srcElement;
  globalAns = globalAns + source.value;
  return document.getElementById("ans_field").value = globalAns;
};

function addition() {
  var operand;
  operand = "add";
  document.getElementById("ans_field").value = 0;
  num1 = globalAns;
  return globalAns = "";
};

function subtraction() {
  var operand;
  operand = "subtract";
  document.getElementById("ans_field").value = 0;
  num1 = globalAns;
  return globalAns = "";
};

function multiply() {
  var operand;
  operand = "multiply";
  document.getElementById("ans_field").value = 0;
  num1 = globalAns;
  return globalAns = "";
};

function divide() {
  var operand;
  operand = "divide";
  document.getElementById("ans_field").value = 0;
  num1 = globalAns;
  return globalAns = "";
};

function equal() {
  if (operand == "add") {
    num1 = num1 * 1;
    globalAns = globalAns * 1;
    globalAns = num1 + globalAns;
  }
  if (operand == "subtract") {
    globalAns = num1 - globalAns;
    document.getElementById("ans_field").value = globalAns;
  }
  if (operand == "multiply") {
    globalAns = num1 * globalAns;
    document.getElementById("ans_field").value = globalAns;
  }
  if (operand == "divide") {
    globalAns = num1 / globalAns;
    return document.getElementById("ans_field").value = globalAns;
  }
};

function cancel() {
  globalAns = "";
  return document.getElementById("ans_field").value = "";
};

function plusMinus() {
  var pn;
  pn = num1 *= -1;
  document.getElementById("ans_field").value = pn;
  return globalAns = pn;
};

function squareRoot() {
  return document.getElementById("ans_field").value = Math.sqrt(document.getElementById("ans_field").value);
};

function clear_e() {
  return globalAns = document.getElementById("ans_field").value = "";
};

function plusMinus() {
  return document.getElementById("ans_field").value = document.getElementById("ans_field").value * -1;
};

function backspace() {
  var bkspace;
  bkspace = document.getElementById("ans_field").value.substring(0, document.getElementById("ans_field").value.length - 1);
  document.getElementById("ans_field").value = bkspace;
  return globalAns = bkspace;
};
