
// Latihan 1
let gelasA = "merah";
let gelasB = "biru";
let gelasC;

gelasC = gelasA;
gelasA = gelasB;
gelasB = gelasC;

console.log(gelasA, gelasB)

// Latihan 2
function cariAngkaTerkecil(angka) {
    let smallets = angka[0];
    
    for(let i = 0; i < angka.length; i++) {
        if(angka[i] < smallets) {
            smallets = angka[i]
        }
    }
    
    return smallets
}

const angka = [4,7,2,9,3]
console.log("Angka Terkecil dari parameter adalah : ",cariAngkaTerkecil(angka))

// Latihan 3
const grid = [
    ['r', 'R', 'B', 'r'],
    ['a', 'r', 'R', 'z'],
    ['M', 'R', 'r', 'R'],
    ['R', 'O', 't', 'r'],
]

let count = 0;
for(let row = 0; row < grid.length; row ++) {
    for(let col = 0; col < grid[row].length; col++) {
        if(grid[row][col] === "r") {
            count++
        }
    }
}

console.log("Banyak huruf r pada grid tersebut adalah : ",count);

// Latihan 4
function convertNilaiAbjad(nilaiTugas, nilaiUTS, nilaiUAS) {
    const nilaiAkhir = (30 * nilaiTugas / 100) + (30 * nilaiUTS / 100) + (40 * nilaiUAS / 100)
    
    let nilaiAbjad;
    if(nilaiAkhir < 100 && nilaiAkhir >= 80) {
        nilaiAbjad = "A";
    } else if(nilaiAkhir < 80 && nilaiAkhir >= 73) {
        nilaiAbjad = "B+";
    } else if(nilaiAkhir < 73 && nilaiAkhir >= 65) {
        nilaiAbjad = "B";
    } else if(nilaiAkhir < 65 && nilaiAkhir >= 60) {
        nilaiAbjad = "C+";
    } else if (nilaiAkhir < 60 && nilaiAkhir >= 50) {
        nilaiAbjad = "C";
    } else if(nilaiAkhir < 50 && nilaiAkhir >= 39) {
        nilaiAbjad = "D";
    } else if(nilaiAkhir <= 39) {
        nilaiAbjad = "E";
    } else {
        nilaiAbjad = "Nilai tidak valdi";
    }
    
    return {
        nilaiAkhir: nilaiAkhir,
        nilaiAbjad: nilaiAbjad
    }
    
    
}

console.log(convertNilaiAbjad(80,60,80));

