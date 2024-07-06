// Guest your birthday date using binary numbers

{/*
    So, the game flow is very simple

    1. Provided 5 sets of number
    2. In the provided sets number, guest your birtday date there
    3. After you determine your result, we will convert your binary answer to integer  

*/}

import * as readline from 'readline';
let binaryResult :  string[] = []

let formattedOutput1 : string = '';
const numberArr1: number[] = [
    1, 3, 5, 7,
    9, 11, 13, 15,
    17, 19, 21, 23,
    25, 27, 29, 31
]

let formattedOutput2 : string = '';
const numberArr2: number[] = [
    2, 3, 6, 7,
    10, 11, 14, 15,
    18, 19, 22, 23,
    26, 27, 30, 31
]

let formattedOutput3 : string = '';
const numberArr3: number[] = [
    4, 5, 6, 7,
    12, 13, 14, 15,
    20, 21, 22, 23,
    28, 29, 30, 31
]

let formattedOutput4 : string = '';
const numberArr4: number[] = [
    8, 9, 10, 11,
    12, 13, 14, 15,
    24, 25, 26, 27,
    28, 29, 30, 31
]

let formattedOutput5 : string = '';
const numberArr5: number[] = [
    16, 17, 18, 19,
    20, 21, 22, 23,
    24, 25, 26, 27, 
    28, 29, 30, 31
]

// Radix (2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal)
const parseBinary = (num: string) => {
    return parseInt(num , 2)
}

// Add 0 if the num is less than 10
const addLeadingZero = (num : number): string => {
    return num < 10 ? '0' + num : num.toString()
}

// Format number reusable function
const formatNumber = (formatedOutput : any | null, index : number) => {
    let formatOutputRes = formatedOutput

    if ((index + 1) % 4 !== 0 && index !== numberArr1.length - 1) {
        formatOutputRes += ' | ';
    }

    if ((index + 1) % 4 === 0) {
        formatOutputRes += '\n';
    }
    
    return formatOutputRes
}

// forEach num 1
numberArr1.forEach((numberArrOne, index) => {
    formattedOutput1 += addLeadingZero(numberArrOne);
    formattedOutput1 = formatNumber(formattedOutput1, index)
});

// forEach num 2
numberArr2.forEach((numberArrTwo, index) => {
    formattedOutput2 += addLeadingZero(numberArrTwo);
    formattedOutput2 = formatNumber(formattedOutput2, index)
});

// forEach num 3
numberArr3.forEach((numberArrThree, index) => {
    formattedOutput3 += addLeadingZero(numberArrThree);
    formattedOutput3 = formatNumber(formattedOutput3, index)
});

// forEach num 4
numberArr4.forEach((numberArrFour, index) => {
    formattedOutput4 += addLeadingZero(numberArrFour);
    formattedOutput4 = formatNumber(formattedOutput4, index)
});

// forEach num 5
numberArr5.forEach((numberArrFive, index) => {
    formattedOutput5 += addLeadingZero(numberArrFive);
    formattedOutput5 = formatNumber(formattedOutput5, index)
});

const questionArr : string[] = [formattedOutput1, formattedOutput2, formattedOutput3, formattedOutput4, formattedOutput5];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (index: number) => {
    if (index >= questionArr.length) {
        console.log('Binary Result:', binaryResult.join(''));
        console.log('Tanggal Ulang Tahun Anda Adalah : ',parseBinary(binaryResult.join('').toString()))
        rl.close();
        return;
    }

    console.log(`Apakah angka pada kumpulan nomer ini ada tanggal ulang tahun anda? \n${questionArr[index]}`);
    rl.question('Jawab (y/t): ', (answer) => {
        if (answer.toLowerCase() === 'y') {
            binaryResult.push('1');
        } else {
            binaryResult.push('0');
        }
        askQuestion(index + 1);
    });
};

askQuestion(0);

// ts-node "(3) tebakUltah.ts"
// Reference : https://ifkarsyah.blogspot.com/2016/12/sulap-zaman-sd-menebak-tanggal-ultah.html