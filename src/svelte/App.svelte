<script>
	import { onMount } from 'svelte';

	import '../sass/app.scss';
	import { Page } from '../../../sdk/v0.4.x/svelte-components.js';
	import { Navigator } from '../../../sdk/v0.4.x/sdk.js';

	import pages from '../js/pages.js';

	onMount(() => {
		Navigator.setPages(pages);
		Navigator.goTo('home');
	});
</script>

<main>
	<Page/>
</main>

<style lang="scss">
	main {
		flex: 1;
		text-align: center;
	}
</style>