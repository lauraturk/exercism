export default class Transcriptor {
  constructor() {
    this.outputRna = new Map([
      ['G', 'C'],
      ['C', 'G'],
      ['T', 'A'],
      ['A', 'U']
    ])
  }

  toRna(inputDna) {
    const splitInputDna = inputDna.split('')

    return splitInputDna.map(n => {
      if (!this.outputRna.has(n)) {
        throw new Error('Invalid input DNA.')
      };
      return this.outputRna.get(n)
    }).join('')
  }
}

/*
 * `G` -> `C`
 * `C` -> `G`
 * `T` -> `A`
 * `A` -> `U`
 */
