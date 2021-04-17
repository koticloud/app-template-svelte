<script>
    import { onMount } from 'svelte';

    import '../sass/app.scss';
    import { PageRenderer } from '../../../sdk/v0.5.x/svelte-components.js';
    import { Navigator } from '../../../sdk/v0.5.x/sdk.js';

    import pages from '../js/pages.js';

    onMount(() => {
        Navigator.setPages(pages);
        Navigator.goTo('home');
    });
</script>

<style lang="scss">
    main {
        flex: 1;
        text-align: center;
    }
</style>

<main>
    <PageRenderer/>
</main>