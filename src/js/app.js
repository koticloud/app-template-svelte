import init from './init.js';
import SvelteApp from '../svelte/App.svelte';

const svelteApp = new SvelteApp({
	target: document.body,
	props: {
		title: 'Koti Cloud App Template with Svelte'
	}
});

export default svelteApp;