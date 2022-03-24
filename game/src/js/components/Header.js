import { Burger, render, Title } from '../lib7.js';
import ContainerBarr from './ContainerBarr.js';

export default render({
    header: {
        class: 'center fix flex w100'
    }
}, [
    Burger({ class: 'fix' }), 
    Title('Matsa'), ContainerBarr
]);