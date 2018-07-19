export const updateXpath = (selector, replaceString, replacer) => {
    const newxpath = selector.replace(replacer, replaceString);
    return newxpath;
};


export const utilMethods = {
    updateXpath
};

