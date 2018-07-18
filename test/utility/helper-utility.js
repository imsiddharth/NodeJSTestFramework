export const updateXpath = (selector, replaceString, replacer) => {
    const newxpath = selector.replace(replacer, replaceString);
    return newxpath;
};


// export const uniqueRand = () => {
//     const rand = uniqueRandom(100, 999);
//     return rand;
// };


export const utilMethods = {
    updateXpath
};

