class Hamming {
  compute(string1, string2) {
    const stringArray1 = string1.split('');
    const stringArray2 = string2.split('');
    let count = 0;

    if(stringArray1.length !== stringArray2.length){
      throw new Error('DNA strands must be of equal length.')
    } else {
      for(let i = 0; i <= stringArray1.length; i++){
        stringArray1[i] !== stringArray2[i] ? count++ : count;
      }
      return count
    }    
  }
}

export default Hamming
