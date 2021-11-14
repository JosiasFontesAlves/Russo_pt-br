export default res => [
    'Português', 'Russo', 'Resposta'
].reduce((key, val, i) => {
    key[val] = res[i];
    return key;
}, {});