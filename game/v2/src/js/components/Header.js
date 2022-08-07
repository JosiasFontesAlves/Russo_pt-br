import { Burger, render, Title } from '../lib7.js';
import ContainerBarr from './ContainerBarr.js';

export default render({
    header: {
        className: 'center fix flex w100'
    }
}, [
    Burger({ className: 'fix', id: 'burger' }),
    Title(1, 'Matsa'), ContainerBarr
]);