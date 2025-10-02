function lowerCaseWords(array){
    return new Promise((resolve, reject) => {
        if (!Array.isArray(array)) {
            return reject(new Error("Input must be an array"));
        }
        const result = array
            .filter(item => typeof item === 'string')
            .map(item => item.toLowerCase());

        resolve(result);
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
//const notArray = 5;
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(err => console.error(err));