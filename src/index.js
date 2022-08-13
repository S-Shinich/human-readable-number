module.exports = function toReadable (number) {
  let dig = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'elleven', 'twelve', 'thirteen', 'fourteen', 'thithteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
  let dec = ['', '' ,'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hndrd = [ 'hundred' ]; 
  let str = '';

 function arrToStr (pref, post) { 
  return ( (pref === 0 ? '' : dec[pref] ) + (post === 0 ? '' : + '' + dig[post] ));
}; 

  if ( ( number >= 0 ) && (number < 20 ) ) {
    str = String(dig[number]);
  }
  else if ( ( number >= 20 ) && (number < 100 ) ) 
  { 
    str = arrToStr( ( Math.trunc(number / 10 ) ), (number % 10));
  }
  else {
    str = dig[Math.trunc(number / 100)] + hndrd + ' ' + arrToStr( Math.trunc((number % 100 ) / 10 )  , (number % 10));
  }
    return str;
      
    
}
