import { render, Span } from '../lib7.js';

/**
 * @param {string} pt
 * @param {string} ru
 * @param {string[]} className
 */
export default (pt, ru, className = []) => {
    const elem = render({
        p: {
            className: 'padd7 subl_nardo trads'
        }
    }, [
        Span(pt, { className: 'pt' }),
        Span(ru, { className: 'ru' })
    ]);

    if (className) elem.classList.add(...className);

    return elem;
}