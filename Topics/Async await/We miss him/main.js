async function rockBand(str) {
    return new Promise((resolve, reject) => {
        if (str === 'Linkin Park') {
            setTimeout(() => resolve('Chester, we miss you!'), 2000);
        } else {
            reject('No matter the band we miss him anyway!');
        }
    });
}