
const getRandomKhodam = (khodamList: string[]): string => {
    return khodamList[Math.floor(Math.random() * khodamList.length)];
};

const checkKodam = (name: string | null) => {
    const khodamList: string[] = [
        'Musang', 'Laba-laba sunda', 'Colokan', 'Rice Cooker',
        'Tape Madura', 'Pentol Bakar CFD', 'Hot In Cream',
        'Kaporit', 'Abe Cekut', 'Cipung', 'Jasin Kartel'
    ];

    if (!name || null) {
        return 'Nama wajib diisi!'
    }

    const randomKhodam = getRandomKhodam(khodamList)
    return `Khodam ${name} adalah ${randomKhodam}`

}

console.log(checkKodam("Laksa"))

// ts-node "(2) kodam.ts" 