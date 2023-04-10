/**
 *
 * 
 1 "Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!
 */
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Cambia solo el código debajo de esta línea
    if (strokes == 1) {
        return names[0];
    }

    else if (strokes <= par - 2) {
        return names[1];
    }

    else if (strokes <= par - 1) {
        return names[2];
    }

    else if (strokes == par) {
        return names[3];
    }
    else if (strokes == par + 1) {
        return names[4];
    }
    else if (strokes == par + 2) {
        return names[5];
    }
    else if (strokes >= par + 3) {
        return names[6];
    }
    // Cambia solo el código encima de esta línea
}

golfScore(1, 1);
golfScore(4, 1);
golfScore(4, 2);
golfScore(4, 3);
golfScore(4, 4);
golfScore(4, 5);
golfScore(4, 6);
golfScore(4, 7);
golfScore(5, 2);
golfScore(5, 5);
golfScore(5, 9);