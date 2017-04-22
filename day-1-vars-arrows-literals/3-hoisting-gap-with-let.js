/*
 If we try to reproduce accidental hoisting using let
 or const, it won't work
 ------------
 */
function getValue() {

    if (1 === 2) {

        let value = "blue";
        return value;

    } else {

        // value exists here with a value of undefined
        console.log(value);
        return null;

    }

    // value also exists here with a value of undefined

}

getValue();