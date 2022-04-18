import { render, Span } from '../lib7.js';
import { footer } from '../template.js';

export default render(footer, Span('Matsa © 2022', { id: 'copyright' }));