import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './Footer.soy.js';
import {isServerSide} from 'metal';

export default class Footer extends Component {
	attached() {
		if (isServerSide()) {
			return;
		}
	}

	rendered() {
		this.year = new Date().getFullYear();
	}
}

Soy.register(Footer, templates);