// Change all string char to "#" except the last 4 char elements
export function maskify(cc: string): string {
    if (cc.length <= 4) {
        return cc;
    }
    const maskedPart = cc.slice(0, -4).replace(/./g, '#');
    const visiblePart = cc.slice(-4);
    return maskedPart + visiblePart;
}

console.log(maskify("4556364607935616")) // ############5616
