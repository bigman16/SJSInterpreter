prn LETS PLAY FIZZBUZZ!

lop (num i = 1, (lte i 100), (add i 1)) {
    str result 
    
    com (equ (mod [i] 3) 0) {
        con result fizz
    }

    com (equ (mod [i] 5) 0) {
        con result buzz
    }

    com (equ result ) {
        str result = i
    }
    prn result
}