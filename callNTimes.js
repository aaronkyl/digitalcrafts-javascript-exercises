function helloWorld() {
    console.log("Hello, world!");
}


function callNTimes(fun, num) {
  for (var i = 0; i < num; i++) {
    fun();
  }
}

callNTimes(helloWorld, 5);