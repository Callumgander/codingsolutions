// differentSymbolsNaive on codesignal

// my solutions
function differentSymbolsNaive(s) {
    const chars = s.split('').;
    const unique = [];
    chars.forEach((char) => {
        if (unique.includes(char) === false) {
            unique.push(char)
        }
    });
    return unique.length;
}

function differentSymbolsNaive(s) {
    const unique = [];
    const chars = s.split('').forEach((char) => {
        if (unique.includes(char) === false) {
            unique.push(char)
        }
    });
    return unique.length;
}

// someone else's solution
function differentSymbolsNaive(s) {
    return new Set(s).size
  }
  
