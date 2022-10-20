export const getTotalPages = (totalPosts, limitPosts) => {
    return Math.ceil(totalPosts / limitPosts);
};

export const getArrayOfNumbers = (total) => {
    const numbersPages = [];
    for (let i = 0; i < total; i++) {
        numbersPages.push(i + 1);
    }
    return numbersPages;
};