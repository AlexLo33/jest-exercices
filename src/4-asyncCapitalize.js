export const capitalize = (string) => new Promise((resolve, reject) => {
    if (!string || typeof string !== "string") {
        reject('You have to pass a valid string');
    }
    const stringCapitilize = string.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
    resolve(stringCapitilize);
});
