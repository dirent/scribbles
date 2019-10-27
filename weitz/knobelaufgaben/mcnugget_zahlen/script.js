for( var i=179; i>=0; i-- ) {
  var packing = false;
  for( var countSix = 0; countSix*6 <= i; countSix++ ) {
    for( var countNine = 0; countNine*9 <= i; countNine++ ) {
      for( var countTwenty = 0; countTwenty*20 <= i; countTwenty++ ) {
        if( countSix*6 + countNine*9 + countTwenty*20 === i ) {
          //console.log( "Packung fuer " + i + ": [" + countSix + ", " + countNine + ", " + countTwenty + "]" );
          packing = true;
        }
      }
    }
  }
  if( packing === false ) {
    console.log( "------------   " + i + " kann nicht gepackt werden. ---------------" );
  }
};
