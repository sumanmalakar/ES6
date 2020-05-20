let re;
// Literal Characters
re = /hello/
re = /hello/i

// Metacharacters Symbols
re= /^h/i;        // Must start with
re = / word$/;    // Must ends with
re = /^hello$/i   // Must begin and end with
re = /^h.llo$/i;  // Matches any ONE charracters
re = /h*llo/i;  // Matches any charracters 0 or more times
re = /gre?a?y/i; // Optional characters
re = /gre?a?y\?/i; // Escape characters


// Brackts [] - Character Sets
re = /gr[ae]y/i;      // Must be an a or e
re = /[GF]ray/i;      // Must be an G or F
re = /[^GF]ray/i;      // Match anything except a G or F
re = /[A-Z]ray/;      // Match any uppercase letter
re = /[a-z]ray/;      // Match any uppercase letter
re = /[A-Za-z]ray/;      // Match any uppercase letter
re = /[0-9][0-9]ray/;         // Match any digig

// Braces {} - Quantifiers
re = /Hel{2}o/i;          // Must occur exactly {m} amount of times   

re = /Hel{2,4}o/i;          // Must occur exactly {m} amount of times   

re = /Hel{2,}o/i;          // Must occur at least {m} times   

// Paretheses () - Grouping 
re = /^([0-9]x){3}$/

// shorthand Character Classes
re = /\w/;   // word character - alphanumeric or _
re = /\w+/;   // + = one or more
re = /\W/;   // Non-word character 
re = /\d/;   // Match any digit
re = /\d+/;   // Match any digit 0 or more times
re = /\D/;   // Match any Non-digit
re = /\s/;   // Match whitespace charracters
re = /\S/;   // Match non-whitespace charracters
re = /Hell\b/i;  // word boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y



// string to match
const str = 'fgjdksgxkfjkfjxjfd';


// Log Results
const result = re.exec(str);
console.log(result)

function reTest (re, str){
  if(re.test(str)){
    console.log(`${str} matched ${re.source}`)
  }else{
    console.log(`${str} does NOT Match ${re.source}`)

  }
}

reTest(re, str)