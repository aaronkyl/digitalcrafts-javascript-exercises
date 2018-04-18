function helloWorld() {
    console.log("Hello, world!");
}


function call3Times(fun) {
  fun();
  fun();
  fun();
}

call3Times(helloWorld);