import { mapEntries, render, Span } from '../lib7.js';
import SearchBox from '../components/SearchBox.js';
import russo from '../russo.js';

export default render({
    div: {
        className: 'grid',
        id: 'container'
    }
}, [
    SearchBox,
    ...mapEntries(russo, ([letra, trads]) =>
        render({
            div: {
                className: 'blocos brd_nardo bs_neon3 padd7'
            }
        }, [
            render({
                h2: {
                    className: 'letra'
                }
            }, letra),
            ...mapEntries(trads, ([pt, ru]) =>
                render({
                    p: {
                        className: 'padd7 subl_nardo trads'
                    }
                }, [
                    Span(pt, { className: 'pt' }),
                    Span(ru, { className: 'ru' })
                ])
            )
        ])
    )
]);