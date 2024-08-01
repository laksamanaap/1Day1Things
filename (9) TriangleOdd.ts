{/* 

             1                  = 1 (1³)
          3     5               = 8 (2³)
       7     9    11            = 27 (3³)
   13    15    17    19         = 64 (4³)
21    23    25    27    29      = 125 (5³)
    
Calculate the number base on their rows

If we sum all the odd number, we can look that the triangle pattern is (n^3)

*/}


export function rowSumOddNumbers(n: number): number {
    return n * n * n;
}

