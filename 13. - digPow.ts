// (a^p + b^p + 1 + c^p + 2  + d^p + 3  +...) =n∗k
// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

export class G964 {

    public static digPow = (n: number, p: number): number => {
        const digits = n.toString().split('').map(Number);

        const sum = digits.reduce((acc, digit, index) => {
            return acc + Math.pow(digit, p + index);
        }, 0);

        if (sum % n === 0) {
            return sum / n;
        } else {
            return -1;
        }
    }
}
