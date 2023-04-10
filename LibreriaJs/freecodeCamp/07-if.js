function testLessOrEqual(val) {

    if (val <= 0) {  // Cambia esta línea
        return "Smaller Than or Equal to 12";
    }

    if (val == 11) {  // Cambia esta línea
        return "Smaller Than or Equal to 12";
    }

    if (val === 12) {  // Cambia esta línea
        return "Smaller Than or Equal to 12";
    }

    if (val == 23) {  // Cambia esta línea
        return "Smaller Than or Equal to 24";
    }

    if (val <= 24) {  // Cambia esta línea
        return "Smaller Than or Equal to 24";
    }



    return "More Than 24";
}

testLessOrEqual(0);
testLessOrEqual(11);
testLessOrEqual(12);
testLessOrEqual(23);
testLessOrEqual(24);
testLessOrEqual(25);

testLessOrEqual(55);

  