// maps a function on each element of an array
let map = function( array1, f ) {
    let r = []; 
    array1.forEach( function(a) { r.push(f(a)); } ); 
    return r;
};

// reduces an array with a reducer function to a single value
let reduce = function( array1, f ) {
    let i, r = f( array1[0], array1[1] );
    for( i=2; i<array1.length; i++ ) {
        r = f( r, array1[i] );
    };
    return r; 
};

let mapped = map( [1,2,4,8], function(x) { return x*2; } );
console.log( "map [1,2,4,8] to x*2: " + mapped );

let reduced = reduce( [1,2,4,8], function(x,y) { return x-y; } );
console.log( "reduce [1,2,4,8] with (x,y) => { return x-y; }: " + reduced );
