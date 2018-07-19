export const isFloat = (n) => {
    try {
        if (Number(n).toString() === n.toString() && n % 1 !== 0) {
            return true;
        }
    } catch (e) {
        console.error(e);// Log level to be added for better stacktrace
        return false;
    }
};

export const isInt = (n) => {
    try {
        if (Number(n).toString() === n.toString() && n % 1 === 0) {
            return true;
        }
    } catch (e) {
        console.error(e);// Log level to be added for better stacktrace
        return false;
    }
};


export const isString = (n) => {
    try {

        if (typeof n === 'string' || n instanceof String) {
            return true;
        }
    } catch (e) {
        console.error(e);// Log level to be added for better stacktrace
        return false;
    }
};

export const isObject = (n) => {

    try {
        if (n !== null && typeof n === 'object') {
            return true;
        }
    } catch (e) {
        console.error(e);// Log level to be added for better stacktrace
        return false;
    }
};

export const getsize = (n) => {
    console.log("\n\n\n\\n\n\n\\n\n\\n\nfekkefnjkfend")

    console.log(Object.keys(n).length)
    console.log("\n\n\n\\n\n\n\\n\n\\n\nfekkefnjkfend")
    return Object.keys(n).length
};


export const apiValidator = {
    isFloat,
    isInt,
    isString,
    isObject,
    getsize
};
