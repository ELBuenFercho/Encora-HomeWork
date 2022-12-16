function maxDiceLength(inputStr){
  let length=0;
  let die=inputStr.split(" ")
  for(let i=0;i<die.length;++i){
    die[i]=Number(die[i]);
  }
  die=die.sort(function(a, b) {return a - b;});
  for(let i=0;i<die.length;++i){
    if(die[i]>length) ++length;
  }
  return length;
}

let input="10 10 7 6 7 4 4 5 7 4";
console.log(maxDiceLength(input));