export class Gabut {
  static getVowelCount(str: string): number {
    const vowelArr: string = "aiueo";
    let vowelCount: number = 0;
     
    for(const char of str) {
      if(vowelArr.includes(char)) {
        vowelCount += 1
      }  
    }

    return vowelCount;
  }
}

console.log(Gabut.getVowelCount("laksamana")) // 4 Vowels Word
console.log(Gabut.getVowelCount("typescript")) // 2 Vowels Word
