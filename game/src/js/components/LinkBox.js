import { LinkBar, render } from '../lib7.js';
import { btnLinkBox, linkBox, links } from '../template.js';
import TemEsc from './TemEsc.js';

export default render(linkBox, [TemEsc, LinkBar(links)]);