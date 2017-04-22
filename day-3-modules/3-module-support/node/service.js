
export function logStrings(...strings) {
    strings.forEach((string, ind) => {
        if(ind === 0) {
            console.log(`First I was like "${string}"`);
        } else {
            console.log(`And then I was all like "${string}"`);
        }
    });
}