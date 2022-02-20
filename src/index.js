const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here

    let code = expr;
  let result = '';

  for (let i = 0; i < expr.length; i += 10) {
    
    let codeLetter = code.slice(0, 10);
    if (codeLetter === '**********') {
      result = `${result} `;
    } else {
      
      let morKey = '';
      for (let i = 0; i < 5; i++) {
        let sym = codeLetter.slice(0, 2);
        if (sym === '10') {morKey = `${morKey}.`;} 
        if (sym === '11') {morKey = `${morKey}-`;}
        codeLetter = codeLetter.substring(2);
      }
      for (key in MORSE_TABLE) {
        if (key === morKey) {
          result = `${result}${MORSE_TABLE[key]}`
        }
      }

      
    }
    code = code.substring(10);
  }
  
  return result;
  

}

module.exports = {
    decode
}