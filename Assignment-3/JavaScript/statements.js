function myFunction() {
    var firstNum = document.getElementById("myNumber").value;
    var secondNum = document.getElementById("mySecondNumber").value;
    document.getElementById("highest").innerHTML = Math.max(firstNum, secondNum);
  }

  function myCheck() {
    if ( "number" % 2 == 0) {
        alert("Even Number");
        console.log("The number is even.");
    }else{
        alert("Odd Number");
        console.log("The number is odd.");
    }
    document.getElementById("checks").innerHTML = alert;
    }

    let number = 2;
    console.log(number);

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}