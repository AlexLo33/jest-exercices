const sample = ['John', 'Mick', 'Samantha', 'Pascal', 'Marc'];

export const findItemByIndex = (index) => {
    if(index > sample.length - 1) {
        return '';
    }

    return sample[index];
};
