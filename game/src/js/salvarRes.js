export default res => {
    const getRes = ['pt', 'ru', 'res'];
    return getRes.reduce((key, val, i) => {
        key[val] = res[i];
        return key;
    }, {});
}