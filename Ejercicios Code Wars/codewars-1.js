/*In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).*/

//solucion 1
function DNAStrand(dna){
  var charArray = Array.from(dna)
  var newChar=[];
  charArray.forEach( function(valor, indice, array) {							
    if(valor==='A'){
     valor='T'    
    }else if(valor==='T'){
      valor='A'
    }else if(valor==='G'){
      valor='C'
    }else if(valor==='C'){
      valor='G'
    }
     newChar.push(valor)
  });
  
  return newChar.join("")
}

//solucion pro
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}