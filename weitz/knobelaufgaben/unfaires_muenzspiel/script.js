function simAlice() {
    var result = 2,
        dice = [ Math.round(Math.random()), Math.round(Math.random()) ];
    while( dice[0] != 0  ||  dice[1] != 1 ) {
        dice[0] = dice[1];
        dice[1] = Math.round(Math.random());
        result++;
    }
    return result;
}

function simBob() {
    var result = 2,
        dice = [ Math.round(Math.random()), Math.round(Math.random()) ];
    while( dice[0] != 0  ||  dice[1] != 0 ) {
        dice[0] = dice[1];
        dice[1] = Math.round(Math.random());
        result++;
    }
    return result;
}

var aliceAverage = 0,
    bobAverage = 0,
    index;

for(index=0; index<100000; index++) { aliceAverage += simAlice(); }
aliceAverage = aliceAverage / 100000;
console.log( "Alice braucht im Schnitt " + Math.round(aliceAverage) + " Würfe." );

for(index=0; index<100000; index++) { bobAverage += simBob(); }
bobAverage = bobAverage / 100000;
console.log( "Bob braucht im Schnitt " + Math.round(bobAverage) + " Würfe." );