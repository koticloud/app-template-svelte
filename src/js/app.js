import init from './init.js';
import SvelteApp from '../svelte/App.svelte';

const svelteApp = new SvelteApp({
    target: document.body
});

export default svelteApp;