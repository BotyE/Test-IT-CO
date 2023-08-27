function checkSyntax(str) {
    const brackets = '()[]{}<>';
    let arr = [];
    let pos;

    for (let i = 0; i < str.length; i++) {
        pos = brackets.indexOf(str[i]);
        if (pos % 2 === 0) arr.push(brackets[pos + 1]);
        else if (brackets[pos] === arr[arr.length - 1]) arr.pop();
             else arr.push(brackets[pos]);
    }
    
    return (arr.length) ? 1 : 0;
}

console.log(checkSyntax('---(++++)----'));
console.log(checkSyntax(''));
console.log(checkSyntax('before ( middle []) after '));
console.log(checkSyntax(') ('));
console.log(checkSyntax('} {'));
console.log(checkSyntax('<(   >)'));
console.log(checkSyntax('(  [  <>  ()  ]  <>  )'));
console.log(checkSyntax('   (      [)'));