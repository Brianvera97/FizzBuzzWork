function imprimir() {
    var fizz = "Fizz"
    var buzz = "Buzz"
    var fizBuzz = "FizBuzz"
    for (var i = 1; i <= 100; i++)
    if (i % 5 == 0 && i % 3 == 0) {
        console.log(fizBuzz)
    }
    else if (i % 3 == 0) {
        console.log(fizz)
    }
    else if (i % 5 == 0) {
        console.log(buzz)
    }

    else {
        console.log(i)
    }

}