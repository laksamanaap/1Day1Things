// a x a = a ^ 2 -> basic concept
// a ^ 2 + b ^ 2 + c ^ 2

export function squareSum(numbers: number[]): number {
    return numbers.reduce((acc : number,curr : number) => acc + (curr ** 2), 0);
}

const numArr: number[] = [1, 2, 3, 4 ,5]; // 55
console.log(squareSum(numArr))

