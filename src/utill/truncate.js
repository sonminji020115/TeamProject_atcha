export const truncate = (str, n) => {
    return str && str.length > n
        ? str.substring(0, n) + '...'
        : str;
};