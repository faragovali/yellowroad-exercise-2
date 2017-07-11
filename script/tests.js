function onReady() {
  runTest(true, 2);
  runTest(false, 6);
  runTest(true, 7);
  runTest(false, 8);
  runTest(false, 9);
  runTest(false, 10);
  runTest(true, 11);
  runTest(false, 12);
  runTest(true, 13);
  runTest(true, 1299721);
  runTest(false, 1299723);
  runTest(false, -9);
  runTest(true, -3);
  runTest(true, -2);
}

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function runTest(expected, number) {
  var expectElement = document.querySelector('.expect pre');
  var assertElement = document.querySelector('.assert pre');
  var correctElement = document.querySelector('.correct pre');
  expectElement.innerHTML += '<b>.isPrime(' + number + ')</b> should return <b>' + expected + ' </b><br/>';
  assertElement.innerHTML += 'Expected: <b>'+ expected +'</b>, got: <b>' + isPrime(number) +'</b><br/>';
  correctElement.innerHTML += (isPrime(number) === expected) + '<br/>';
}

ready(onReady);